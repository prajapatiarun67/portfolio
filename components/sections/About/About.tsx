import { SectionLabel } from "@/components/ui/SectionLabel";
import { personalDetails } from "@/data/portfolioData";

export function About() {
  return (
    <section id="about" className="section container about">
      <div className="about-photo">
        <div className="photo-placeholder">
          <div className="photo-lines" />
          <span>YOUR PHOTO</span>
        </div>
      </div>
      <div className="about-copy">
        <SectionLabel number="01">ABOUT</SectionLabel>
        <h2>
          A quick intro<span>.</span>
        </h2>
        {personalDetails.aboutParagraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
