import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import Badge from '../../components/Badge/Badge';
import Card from '../../components/Card/Card';
import { IProject, projects } from '../../data/projects';

const ProjectCard = ({ project }: { project: IProject }) => {
  return (
    <Card
      imageUrls={project.images}
      cardBody={
        <>
          <h3 className="mx-3 text-lg font-medium text-slate-900 dark:text-white">
            {project.title}
          </h3>
          <p className="mx-3 mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
            {project.shortDescription}
          </p>
          <Link
            to={`/projects/${project.slug}`}
            className="mx-3 mt-4 inline-flex items-center gap-1 text-sm font-medium text-slate-800 underline decoration-slate-400/50 underline-offset-4 transition-colors hover:text-slate-950 dark:text-slate-100 dark:hover:text-white"
          >
            Read more
            <ChevronRight size={16} />
          </Link>
        </>
      }
      cardFooter={
        <div className="ml-2 flex flex-wrap gap-2">
          {project.badges.map((badge) => (
            <Badge key={badge}>{badge}</Badge>
          ))}
        </div>
      }
    />
  );
};

const Projects = () => {
  const webProjects = projects.filter((project) => project.category === 'web');

  return (
    <section id="projects" className="scroll-mt-24 py-16">
      <h2 className="section-heading mb-10">Projects</h2>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 md:gap-x-16 md:gap-y-16">
        {webProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
