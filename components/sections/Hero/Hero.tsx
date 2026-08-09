import { Linkedin, MapPin } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { personalDetails } from "@/data/portfolioData";

export function Hero() {
  return (
    <section id="home" className="hero container">
      <div className="hero-copy">
        <SectionLabel number="PORTFOLIO">
          {personalDetails.location}
        </SectionLabel>
        <h1>
          Arun
          <br />
          Prajapati<span>.</span>
        </h1>
        <div className="eyebrow">{personalDetails.roleTitle}</div>
        <p>{personalDetails.bioHeadline}</p>
        <div className="hero-actions">
          <a className="button primary" href="#contact">
            CONTACT ME
          </a>
          <a
            className="button outline"
            href={personalDetails.linkedinUrl}
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={14} /> LINKEDIN
          </a>
          <span className="location">
            <MapPin size={14} /> {personalDetails.shortLocation}
          </span>
        </div>
      </div>
      <div className="hero-art">
        <div className="art-frame">
          <img src="/images/hero-abstract.jpg" alt="Hero art abstract background" />
          <div className="art-glow" />
        </div>
      </div>
    </section>
  );
}
