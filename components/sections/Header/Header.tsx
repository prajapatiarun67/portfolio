import { FileText } from "lucide-react";
import { personalDetails } from "@/data/portfolioData";

export function Header() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="brand" href="#home">
          {personalDetails.name}
        </a>
        <nav>
          <a href="#about">ABOUT</a>
          <a href="#experience">EXPERIENCE</a>
          <a href="#skills">SKILLS</a>
          <a href="#projects">PROJECTS</a>
          <a href="#contact">CONTACT</a>
        </nav>
        <a
          className="resume"
          href={personalDetails.resumePath}
          target="_blank"
          rel="noreferrer"
        >
          <FileText size={13} /> RESUME
        </a>
      </div>
    </header>
  );
}
