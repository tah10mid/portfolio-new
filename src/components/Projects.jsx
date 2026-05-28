import projects from "../data/projects";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";

function ProjectCard({ project }) {
  if (project.comingSoon) {
    return (
      <div className="project-card project-card--soon">
        <div className="project-card__thumb project-card__thumb--placeholder" />
        <div className="project-card__body">
          <h3>{project.title}</h3>
          <p className="project-card__soon-text">Coming Soon</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`project-card ${project.pending ? "project-card--pending" : ""}`}>
      <div className="project-card__thumb">
        {project.image ? (
          <img src={project.image} alt={project.title} />
        ) : (
          <div className="project-card__thumb--placeholder" />
        )}
      </div>
      <div className="project-card__body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-card__tags">
          {project.tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
        <div className="project-card__actions">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--sm btn--outline"
            >
              <FaExternalLinkAlt size={12} /> Live Demo
            </a>
          )}
          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--sm btn--outline"
            >
              <FaCode size={12} /> View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="project" className="projects reveal">
      <h2 className="section-title">
        Project
        <span className="section-title__underline" />
      </h2>
      <div className="projects__grid">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}
