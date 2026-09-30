import { ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

import Badge from '../../components/Badge/Badge';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import { projects } from '../../data/projects';

const sectionTitle =
  'text-xs font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400';

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((item) => item.slug === slug);

  const backLink = (
    <Link
      to="/"
      className="inline-flex items-center gap-1 text-sm font-medium text-slate-800 underline decoration-slate-400/50 underline-offset-4 transition-colors hover:text-slate-950 dark:text-slate-100 dark:hover:text-white"
    >
      <ArrowLeft size={16} />
      Back to projects
    </Link>
  );

  if (!project) {
    return (
      <section className="py-16">
        <h1 className="section-heading">Project not found</h1>
        {backLink}
      </section>
    );
  }

  const openRepo = () => {
    window.open(project.repoUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <article className="py-10">
      {backLink}

      <h1 className="section-heading mt-6">{project.title}</h1>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.badges.map((badge) => (
          <Badge key={badge}>{badge}</Badge>
        ))}
      </div>

      <div className="mt-8">
        <Card imageUrls={project.images} />
      </div>

      {project.overview && (
        <section className="mt-10">
          <h2 className={sectionTitle}>Overview</h2>
          <p className="mt-3 max-w-3xl text-justify leading-7 text-slate-600 dark:text-slate-300">
            {project.overview}
          </p>
        </section>
      )}

      {project.features && project.features.length > 0 && (
        <section className="mt-10">
          <h2 className={sectionTitle}>Features</h2>
          <ul className="mt-4 grid gap-3 md:grid-cols-2">
            {project.features.map((feature) => (
              <li
                key={feature.label}
                className="flex gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300"
              >
                <span
                  aria-hidden
                  className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-slate-400 dark:bg-slate-500"
                />
                <span>
                  <span className="font-medium text-slate-800 dark:text-slate-200">
                    {feature.label}
                  </span>{' '}
                  &mdash; {feature.text}
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <div className="mt-10">
        {project.repoPrivate ? (
          <p className="inline-flex items-center gap-2 rounded-2xl border border-white/30 bg-white/60 px-4 py-2 text-sm text-slate-600 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
            Repository is private
          </p>
        ) : (
          <Button variant="ghost" onClick={openRepo}>
            View repository
          </Button>
        )}
      </div>
    </article>
  );
};

export default ProjectDetail;
