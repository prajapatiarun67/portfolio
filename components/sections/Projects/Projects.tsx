import { SectionLabel } from "@/components/ui/SectionLabel";
import { Pill } from "@/components/ui/Pill";
import { projectsData } from "@/data/portfolioData";

export function Projects() {
  return (
    <section id="projects" className="section container">
      <SectionLabel number="04">PROJECTS</SectionLabel>
      <h2>
        Selected work<span>.</span>
      </h2>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <article className="project" key={project.number}>
            <span className="project-number">{project.number}</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="pills">
              {project.tags.map((tag) => (
                <Pill key={tag}>{tag}</Pill>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
