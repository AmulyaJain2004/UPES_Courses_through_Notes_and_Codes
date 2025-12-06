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
      <div key={item.path} className={`mb-2 ${level > 0 ? "ml-4" : ""}`}>
        <div
          className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-all duration-200 group/folder"
          onClick={() => toggleSection(item.path)}
        >
          <span className="text-xl transform group-hover/folder:scale-110 transition-transform duration-200">
            {isExpanded ? "📂" : "📁"}
          </span>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover/folder:text-blue-600 dark:group-hover/folder:text-blue-400 transition-colors duration-200 flex-1">
            {item.name.replace(/_/g, " ")}
          </span>
          <span className="text-blue-500 dark:text-blue-400 transform group-hover/folder:translate-x-1 transition-transform duration-200">
            {isExpanded ? "▼" : "▶"}
          </span>
        </div>
        {hasContents && (
          <div className="ml-4 mt-2 space-y-1 animate-fadeIn">
            {filteredContents.map((subItem) =>
              subItem.type === "dir" ? (
                renderFolder(subItem, level + 1)
              ) : (
                <a
                  key={subItem.path}
                  href={subItem.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-200 group/file"
                >
                  <span className="text-xl transform group-hover/file:scale-125 transition-transform duration-200">
                    {getFileIcon(subItem.name)}
                  </span>
                  <span className="text-sm text-gray-700 dark:text-gray-300 group-hover/file:text-blue-600 dark:group-hover/file:text-blue-400 transition-colors duration-200">
                    {subItem.name}
                  </span>
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
            <h2 className="section-title">📖 Resource Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
              {filterItems(resources).map((resource) =>
                resource.type === "dir" ? (
                  <div
                    key={resource.path}
                    className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    <div
                      className="relative p-6 cursor-pointer"
                      onClick={() => toggleSection(resource.path)}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                          📁
                        </div>
                        <span className="text-xl font-bold text-blue-500 dark:text-blue-400 transform group-hover:rotate-90 transition-transform duration-300">
                          {expandedSections[resource.path] ? "▼" : "▶"}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {resource.name.replace(/_/g, " ")}
                      </h3>
                      <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 rounded-full"></div>
                    </div>

                    {expandedSections[resource.path] &&
                      Array.isArray(expandedSections[resource.path]) && (
                        <div className="px-6 pb-6 space-y-2 animate-fadeIn">
                          {filterItems(expandedSections[resource.path]).map(
                            (subItem) =>
                              subItem.type === "dir" ? (
                                <div key={subItem.path} className="pl-4">
                                  {renderFolder(subItem, 0)}
                                </div>
                              ) : (
                                <a
                                  key={subItem.path}
                                  href={subItem.html_url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-200 group/file"
                                >
                                  <span className="text-2xl transform group-hover/file:scale-125 transition-transform duration-200">
                                    {getFileIcon(subItem.name)}
                                  </span>
                                  <span className="text-sm text-gray-700 dark:text-gray-300 group-hover/file:text-blue-600 dark:group-hover/file:text-blue-400 transition-colors duration-200">
                                    {subItem.name}
                                  </span>
                                </a>
                              )
                          )}
                        </div>
                      )}
                  </div>
                ) : (
                  <a
                    key={resource.path}
                    href={resource.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 overflow-hidden block"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    <div className="relative p-6">
                      <div className="flex flex-col items-center justify-center text-center">
                        <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                          {getFileIcon(resource.name)}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                          {resource.name}
                        </h3>
                        <div className="mt-3 h-1 w-0 group-hover:w-full bg-gradient-to-r from-green-500 to-teal-600 transition-all duration-300 rounded-full"></div>
                      </div>
                    </div>
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
