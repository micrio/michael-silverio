import Badge from '../../components/Badge/Badge';

interface ISkillGroup {
  title: string;
  skills: string[];
}

const skillGroups: ISkillGroup[] = [
  {
    title: 'Languages',
    skills: ['Ruby', 'JavaScript', 'TypeScript', 'Python'],
  },
  {
    title: 'Backend',
    skills: [
      'Ruby on Rails',
      'TDD',
      'RSpec',
      'Sidekiq',
      'Real-time (WebSockets / ActionCable)',
      'RubyLLM',
    ],
  },
  {
    title: 'Frontend',
    skills: [
      'React',
      'Next.js',
      'Redux',
      'Zustand',
      'Tailwind CSS',
      'HTML/CSS/SCSS',
      'jQuery',
      'CoffeeScript',
      'Hotwire Stimulus',
    ],
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'SQLite'],
  },
  {
    title: 'APIs & Auth',
    skills: [
      'OAuth2',
      'REST APIs',
      'Webhooks',
      'GraphQL',
      'ETL',
      'RBAC',
      'ABAC',
      'Multi-tenancy',
      'Zoho Integration',
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      'AWS (EC2, EBS, RDS, Load Balancing, AutoScaling, IAM, CI/CD)',
      'Docker',
      'Kubernetes',
      'Containerization',
      'Grafana',
      'Honeybadger',
    ],
  },
  {
    title: 'AI',
    skills: ['AI Integration', 'RAG', 'AI Agentic Coding'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16">
      <h2 className="section-heading">Skills</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.title} className="glass rounded-2xl p-6">
            <h3 className="text-sm font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400">
              {group.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
