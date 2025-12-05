import { useState, useEffect } from "react";

const API_BASE = "https://upes-courses-through-notes-and-codes-1.onrender.com/api";

function Home() {
  const [repoData, setRepoData] = useState({
    years: [],
    resources: [],
    mlDlTraining: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedSections, setExpandedSections] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchRepositoryStructure();
  }, []);

  const fetchGithubContents = async (dirPath = "") => {
    try {
      const response = await fetch(
        `${API_BASE}/github-contents/?dir_path=${dirPath}`
      );

      if (response.status === 429) {
        const errorData = await response.json();
        throw new Error(
          errorData.message ||
            "GitHub API rate limit exceeded. Please try again later."
        );
      }

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to fetch data");
      }

      return await response.json();
    } catch (err) {
      console.error("Error fetching:", err);
      throw err;
    }
  };

  const fetchRepositoryStructure = async () => {
    try {
      setLoading(true);
      setError(null);

      const rootContents = await fetchGithubContents("");
      const years = rootContents
        .filter((item) => item.name.includes("year"))
        .sort((a, b) => a.name.localeCompare(b.name));

      const resources = rootContents.filter((item) =>
        item.name.includes("Important_Resources")
      );

      const mlDlTraining = rootContents.filter((item) =>
        item.name.includes("ML_DL_IntensiveTraining")
      );

      setRepoData({
        years,
        resources,
        mlDlTraining,
      });
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
        <p>Loading UPES Course Repository...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>⚠️ Error</h2>
        <p>{error}</p>
        {error.includes("rate limit") && (
          <div className="error-help">
            <p>
              <strong>Rate limit exceeded.</strong> The data is cached for 1
              hour. Please wait or add a GitHub token for higher limits.
            </p>
          </div>
        )}
        <button onClick={fetchRepositoryStructure} className="retry-button">
          Retry
        </button>
      </div>
    );
  }

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">
            UPES <span className="highlight">Course Repository</span>
          </h1>
          <p className="hero-subtitle">
            Access comprehensive notes, codes, and resources for all years
          </p>
        </div>
      </section>

      <main className="main-content">
        <div className="container">
          <section className="courses-section">
            <h2 className="section-title">📚 Academic Years</h2>
            <div className="courses-grid">
              {repoData.years.map((year) => {
                const isExpanded = expandedSections[year.path];
                const hasContents = isExpanded && Array.isArray(isExpanded);

                return (
                  <div key={year.path} className="year-card">
                    <div
                      className="year-header"
                      onClick={() => toggleSection(year.path)}
                    >
                      <h3>{year.name.replace("-", " ").toUpperCase()}</h3>
                      <span className="toggle-icon">
                        {isExpanded ? "▼" : "▶"}
                      </span>
                    </div>
                    {hasContents && (
                      <div className="year-content">
                        {isExpanded.map((subItem) =>
                          subItem.type === "dir" ? (
                            renderFolder(subItem, 0)
                          ) : (
                            <a
                              key={subItem.path}
                              href={subItem.html_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="file-item"
                            >
                              <span className="file-icon">
                                {getFileIcon(subItem.name)}
                              </span>
                              <span className="file-name">{subItem.name}</span>
                            </a>
                          )
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {repoData.mlDlTraining.length > 0 && (
            <section className="training-section">
              <h2 className="section-title">🤖 ML/DL Intensive Training</h2>
              <div className="training-content">
                {repoData.mlDlTraining.map((item) => renderFolder(item))}
              </div>
            </section>
          )}

          <section className="resources-section">
            <h2 className="section-title">📖 Important Resources</h2>
            <div className="resources-grid">
              {repoData.resources.map((resourceFolder) => (
                <div key={resourceFolder.path} className="resource-category">
                  {renderFolder(resourceFolder)}
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Home;
