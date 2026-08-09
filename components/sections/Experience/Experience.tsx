import { SectionLabel } from "@/components/ui/SectionLabel";
import { experienceData, educationData } from "@/data/portfolioData";

export function Experience() {
  return (
    <section id="experience" className="section container">
      <SectionLabel number="02">EXPERIENCE</SectionLabel>
      <h2>
        Where I&apos;ve worked<span>.</span>
      </h2>

      <div className="experience-list">
        {experienceData.map((item) => (
          <article className="experience-row" key={item.role}>
            <div>
              <div className="date">{item.date}</div>
              <h3>{item.role}</h3>
              <div className="company">{item.company}</div>
            </div>
            <ul>
              {item.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <h3 className="subheading">Education &amp; Certifications.</h3>
      <div className="education-grid">
        {educationData.map((edu, index) => (
          <div key={index}>
            <div className="date">{edu.date}</div>
            <h3>{edu.title}</h3>
            <p>{edu.institution}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
