import { useState, useEffect } from "react";
import { API_BASE_URL } from "../config/api";

function Resources() {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedSections, setExpandedSections] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchResources();
  }, []);

  const fetchGithubContents = async (dirPath = "") => {
    const url = `${API_BASE_URL}/github-contents/?dir_path=${dirPath}`;
    console.log("Resources - Fetching from:", url);

    try {
      const response = await fetch(url);

      const contentType = response.headers.get("content-type") || "";

      if (!response.ok) {
        if (contentType.includes("application/json")) {
          const errorData = await response.json();
          throw new Error(
            errorData.error || errorData.message || "Failed to fetch resources"
          );
        }
        const text = await response.text();
        const brief = text.replace(/\n+/g, " ").slice(0, 500);
        throw new Error(
          brief || "Failed to fetch resources (non-JSON response)"
        );
      }

      if (contentType.includes("application/json")) {
        return await response.json();
      }
      const text = await response.text();
      try {
        return JSON.parse(text);
      } catch (e) {
        throw new Error(
          "Unexpected non-JSON response from server: " +
            (text && text.slice ? text.slice(0, 500) : String(text))
        );
      }
    } catch (err) {
      console.error("Error fetching:", err);
      throw err;
    }
  };

  const fetchResources = async () => {
    try {
      setLoading(true);
      setError(null);

      const rootContents = await fetchGithubContents("");
      const resourcesFolder = rootContents.filter((item) =>
        item.name.includes("Important_Resources")
      );

      if (resourcesFolder.length > 0) {
        const resourceContents = await fetchGithubContents(
          resourcesFolder[0].path
        );
        setResources(resourceContents);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const toggleSection = async (path) => {
    if (expandedSections[path]) {
      setExpandedSections((prev) => ({ ...prev, [path]: null }));
    } else {
      try {
        const contents = await fetchGithubContents(path);
        setExpandedSections((prev) => ({ ...prev, [path]: contents }));
      } catch (err) {
        console.error("Error loading section:", err);
      }
    }
  };

  const getFileIcon = (name) => {
    const extension = name.split(".").pop().toLowerCase();
    const iconMap = {
      pdf: "📄",
      doc: "📝",
      docx: "📝",
      ppt: "📊",
      pptx: "📊",
      zip: "🗜️",
      rar: "🗜️",
      py: "🐍",
      js: "💛",
      java: "☕",
      cpp: "⚙️",
      c: "⚙️",
      html: "🌐",
      css: "🎨",
      md: "📋",
    };
    return iconMap[extension] || "📁";
  };

  const filterItems = (items) => {
    if (!searchQuery.trim()) return items;
    return items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const renderFolder = (item, level = 0) => {
    const isExpanded = expandedSections[item.path];
    const hasContents = isExpanded && Array.isArray(isExpanded);
    const filteredContents = hasContents ? filterItems(isExpanded) : [];

    return (
      <div
        key={item.path}
        className="folder-item"
        style={{ marginLeft: `${level * 20}px` }}
      >
        <div className="folder-header" onClick={() => toggleSection(item.path)}>
          <span className="folder-icon">{isExpanded ? "📂" : "📁"}</span>
          <span className="folder-name">{item.name}</span>
          <span className="expand-icon">{isExpanded ? "▼" : "▶"}</span>
        </div>
        {hasContents && (
          <div className="folder-contents">
            {filteredContents.map((subItem) =>
              subItem.type === "dir" ? (
                renderFolder(subItem, level + 1)
              ) : (
                <a
                  key={subItem.path}
                  href={subItem.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="file-item"
                  style={{ marginLeft: `${(level + 1) * 20}px` }}
                >
                  <span className="file-icon">{getFileIcon(subItem.name)}</span>
                  <span className="file-name">{subItem.name}</span>
                </a>
              )
            )}
          </div>
        )}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loader"></div>
        <p>Loading Resources...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>⚠️ Error</h2>
        <p>{error}</p>
        <button onClick={fetchResources} className="retry-button">
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="page-container">
      <section className="hero hero-small">
        <div className="container">
          <h1 className="hero-title">
            Important <span className="highlight">Resources</span>
          </h1>
          <p className="hero-subtitle">
            Essential materials and references for your studies
          </p>
        </div>
      </section>

      <main className="main-content">
        <div className="container">
          <section className="resources-section">
            <div className="resources-grid">
              {filterItems(resources).map((resource) =>
                resource.type === "dir" ? (
                  <div key={resource.path} className="resource-card">
                    {renderFolder(resource)}
                  </div>
                ) : (
                  <a
                    key={resource.path}
                    href={resource.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resource-card resource-link"
                  >
                    <div className="resource-icon">
                      {getFileIcon(resource.name)}
                    </div>
                    <span className="resource-name">{resource.name}</span>
                  </a>
                )
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Resources;
