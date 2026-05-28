import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <span>&copy; 2026 Tahmidul Islam</span>
      <div className="footer__socials">
        <a href="https://github.com/tah10mid" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/tahmidul-islam-39606029a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedinIn />
        </a>
      </div>
    </footer>
  );
}
