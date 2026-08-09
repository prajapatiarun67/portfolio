import { ArrowUp, Linkedin, Mail, Phone } from "lucide-react";
import { personalDetails } from "@/data/portfolioData";

export function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div>
          <strong>ArunPrajapati.</strong>
          <span>{personalDetails.location}</span>
        </div>
        <div className="footer-links">
          <a
            href={personalDetails.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
          >
            <Linkedin />
          </a>
          <a href={`mailto:${personalDetails.email}`} aria-label="Send Email">
            <Mail />
          </a>
          <a href={`tel:${personalDetails.phoneRaw}`} aria-label="Call Phone">
            <Phone />
          </a>
          <a className="top" href="#home" aria-label="Back to top">
            <ArrowUp />
          </a>
        </div>
        <div className="copyright">© 2026 ARUN PRAJAPATI</div>
      </div>
    </footer>
  );
}
