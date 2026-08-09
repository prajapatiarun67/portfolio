import { SectionLabel } from "@/components/ui/SectionLabel";
import { Pill } from "@/components/ui/Pill";
import { skillsData } from "@/data/portfolioData";

export function Skills() {
  return (
    <section id="skills" className="section container">
      <SectionLabel number="03">SKILLS</SectionLabel>
      <h2>
        What I bring<span>.</span>
      </h2>

      <div className="skills-grid">
        <div className="skill-card core">
          <div className="card-head">
            <h3>Core Skills</h3>
            <span>REPLACE WITH YOUR TOP PROFESSIONAL SKILLS</span>
          </div>
          <div className="pills">
            {skillsData.core.map((s) => (
              <Pill key={s}>{s}</Pill>
            ))}
          </div>
        </div>

        <div className="skill-card">
          <div className="card-head">
            <h3>
              Tools &amp;
              <br />
              Software
            </h3>
            <span>TOOLS YOU USE DAY TO DAY</span>
          </div>
          <div className="pills">
            {skillsData.tools.map((s) => (
              <Pill key={s}>{s}</Pill>
            ))}
          </div>
        </div>

        <div className="skill-card domain">
          <div className="card-head">
            <h3>
              Domain
              <br />
              Knowledge
            </h3>
            <span>INDUSTRY-SPECIFIC EXPERTISE</span>
          </div>
          <div className="pills">
            {skillsData.domain.map((s) => (
              <Pill key={s}>{s}</Pill>
            ))}
          </div>
        </div>

        <div className="skill-card languages">
          <div className="card-head">
            <h3>Languages</h3>
            <span>SPOKEN &amp; WRITTEN</span>
          </div>
          <div className="pills">
            {skillsData.languages.map((s) => (
              <Pill key={s}>{s}</Pill>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
