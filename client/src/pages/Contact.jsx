import { useState } from "react";
import { API_BASE_URL } from "../config/api";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    const url = `${API_BASE_URL}/contact/`;
    console.log("Contact - Posting to:", url);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: data.message || "Message sent successfully!",
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-container">
      <section className="hero hero-small">
        <div className="container">
          <h1 className="hero-title">
            Get in <span className="highlight">Touch</span>
          </h1>
          <p className="hero-subtitle">
            Have questions or suggestions? We'd love to hear from you
          </p>
        </div>
      </section>

      <main className="main-content">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info">
              <div className="info-card">
                <div className="info-icon">📧</div>
                <h3>Email</h3>
                <p>jainamulyawin@gmail.com</p>
              </div>

              <div className="info-card">
                <div className="info-icon">💻</div>
                <h3>GitHub</h3>
                <p>
                  <a
                    href="https://github.com/AmulyaJain2004"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @AmulyaJain2004
                  </a>
                </p>
              </div>

              <div className="info-card">
                <div className="info-icon">📚</div>
                <h3>Repository</h3>
                <p>
                  <a
                    href="https://github.com/AmulyaJain2004/UPES_Courses_through_Notes_and_Codes"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    UPES Courses Repo
                  </a>
                </p>
              </div>

              <div className="info-card">
                <div className="info-icon">🎓</div>
                <h3>University</h3>
                <p>UPES Dehradun</p>
              </div>
            </div>

            <div className="contact-form-container">
              <h2>Send us a Message</h2>

              {status.message && (
                <div className={`status-message ${status.type}`}>
                  <span className="status-icon">
                    {status.type === "success" ? "✅" : "❌"}
                  </span>
                  <p>{status.message}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What is this about?"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Your message here..."
                    disabled={isSubmitting}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message →"}
                </button>
              </form>
            </div>
          </div>

          <div className="faq-section">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>❓ How can I contribute?</h3>
                <p>
                  Fork the repository on GitHub, add your resources, and submit
                  a pull request. Check the Contributing section on the About
                  page for detailed steps.
                </p>
              </div>
              <div className="faq-item">
                <h3>❓ Is this repository official?</h3>
                <p>
                  This is a student-driven initiative to help fellow UPES
                  students. It's maintained by students for students.
                </p>
              </div>
              <div className="faq-item">
                <h3>❓ How often is content updated?</h3>
                <p>
                  The repository is continuously updated as students contribute
                  new materials and resources throughout the academic year.
                </p>
              </div>
              <div className="faq-item">
                <h3>❓ Can I request specific resources?</h3>
                <p>
                  Yes! Open an issue on GitHub or contact us with your request.
                  We'll try our best to find or add the resources you need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contact;
