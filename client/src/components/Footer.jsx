import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>🎓 UPES Repository</h3>
            <p>
              A collaborative platform for UPES students to access and share
              educational resources, notes, and code.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/resources">Resources</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <ul className="footer-links">
              <li>
                <a
                  href="https://github.com/AmulyaJain2004/UPES_Courses_through_Notes_and_Codes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repository
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/AmulyaJain2004"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Maintainer's GitHub
                </a>
              </li>
              <li>
                <a href="mailto:amulyajain2004@gmail.com">Email Us</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Resources</h4>
            <ul className="footer-links">
              <li>
                <a
                  href="https://www.upes.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  UPES Official
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/AmulyaJain2004/UPES_Courses_through_Notes_and_Codes/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Report Issues
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/AmulyaJain2004/UPES_Courses_through_Notes_and_Codes/blob/main/README.md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Documentation
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} UPES Course Repository. Built with ❤️
            by UPES Students.
          </p>
          <p>
            Open Source Project |{" "}
            <a
              href="https://github.com/AmulyaJain2004/UPES_Courses_through_Notes_and_Codes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contribute on GitHub
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
