function About() {
  return (
    <div className="page-container">
      <section className="hero hero-small">
        <div className="container">
          <h1 className="hero-title">
            About <span className="highlight">UPES Repository</span>
          </h1>
          <p className="hero-subtitle">
            A collaborative platform for UPES students
          </p>
        </div>
      </section>

      <main className="main-content">
        <div className="container">
          <section className="content-section">
            <div className="about-card">
              <h2>🎓 What is UPES Repository?</h2>
              <p>
                The UPES Course Repository is a comprehensive collection of
                notes, codes, and educational resources curated by students for
                students. This platform provides easy access to materials across
                all academic years, helping UPES students excel in their
                studies.
              </p>
            </div>

            <div className="about-card">
              <h2>🎯 Our Mission</h2>
              <p>
                Our mission is to create a centralized, accessible, and
                collaborative platform where UPES students can find quality
                educational resources. We believe in the power of knowledge
                sharing and aim to support every student's academic journey.
              </p>
            </div>

            <div className="about-card">
              <h2>✨ Key Features</h2>
              <div className="features-grid">
                <div className="feature-item">
                  <span className="feature-icon">📚</span>
                  <h3>Comprehensive Content</h3>
                  <p>
                    Access notes and resources from 1st year to 3rd year across
                    all semesters and specializations.
                  </p>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">💻</span>
                  <h3>Code Repository</h3>
                  <p>
                    Find working code examples, projects, and practical
                    implementations for various courses.
                  </p>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🤖</span>
                  <h3>ML/DL Training</h3>
                  <p>
                    Specialized section for Machine Learning and Deep Learning
                    intensive training materials.
                  </p>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">📖</span>
                  <h3>Important Resources</h3>
                  <p>
                    Curated collection of essential resources, reference
                    materials, and study guides.
                  </p>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🔍</span>
                  <h3>Easy Search</h3>
                  <p>
                    Quickly find what you need with our intuitive search
                    functionality.
                  </p>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🌐</span>
                  <h3>Open Source</h3>
                  <p>
                    Built on GitHub, encouraging collaboration and continuous
                    improvement.
                  </p>
                </div>
              </div>
            </div>

            <div className="about-card">
              <h2>🤝 Contributing</h2>
              <p>
                This repository thrives on contributions from UPES students. If
                you have notes, code, or resources that could help fellow
                students, we encourage you to contribute!
              </p>
              <div className="contribute-steps">
                <div className="step">
                  <span className="step-number">1</span>
                  <div>
                    <h4>Fork the Repository</h4>
                    <p>Create your own copy of the repository on GitHub</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-number">2</span>
                  <div>
                    <h4>Add Your Content</h4>
                    <p>
                      Upload your notes, code, or resources to the appropriate
                      folder
                    </p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-number">3</span>
                  <div>
                    <h4>Submit a Pull Request</h4>
                    <p>
                      Request to merge your contributions to the main repository
                    </p>
                  </div>
                </div>
              </div>
              <a
                href="https://github.com/AmulyaJain2004/UPES_Courses_through_Notes_and_Codes"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button"
              >
                Contribute on GitHub →
              </a>
            </div>

            <div className="about-card">
              <h2>📊 Repository Statistics</h2>
              <div className="stats-grid">
                <div className="stat-item">
                  <span className="stat-number">3+</span>
                  <span className="stat-label">Academic Years</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">100+</span>
                  <span className="stat-label">Resources</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">Multiple</span>
                  <span className="stat-label">Specializations</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">Active</span>
                  <span className="stat-label">Community</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default About;
