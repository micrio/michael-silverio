import Badge from '../../components/Badge/Badge';

interface ISkillGroup {
  title: string;
  skills: string[];
}

// Skill -> Simple Icons slug (https://simpleicons.org). Skills without a
// logo simply render without an icon. Icons are masked so they inherit the
// badge text color and stay visible in both light and dark themes.
const SKILL_ICONS: Record<string, string> = {
  Ruby: 'ruby',
  JavaScript: 'javascript',
  TypeScript: 'typescript',
  Python: 'python',
  'Ruby on Rails': 'rubyonrails',
  Sidekiq: 'sidekiq',
  React: 'react',
  'Next.js': 'nextdotjs',
  Redux: 'redux',
  'Tailwind CSS': 'tailwindcss',
  'HTML/CSS/SCSS': 'html5',
  jQuery: 'jquery',
  CoffeeScript: 'coffeescript',
  'Hotwire Stimulus': 'hotwire',
  MySQL: 'mysql',
  PostgreSQL: 'postgresql',
  SQLite: 'sqlite',
  GraphQL: 'graphql',
  Docker: 'docker',
  Kubernetes: 'kubernetes',
  Grafana: 'grafana',
  'Zoho Integration': 'zoho',
  WebRTC: 'webrtc',
};

const SkillIcon = ({ name }: { name: string }) => {
  const slug = SKILL_ICONS[name];
  if (!slug) {
    return null;
  }

  const url = `https://cdn.simpleicons.org/${slug}`;

  return (
    <span
      aria-hidden
      className="h-3.5 w-3.5 shrink-0 bg-current"
      style={{
        WebkitMaskImage: `url(${url})`,
        maskImage: `url(${url})`,
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
      }}
    />
  );
};

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
  'WebRTC',
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
  const sortByIcon = (skills: string[]) =>
    [...skills].sort(
      (a, b) => Number(Boolean(SKILL_ICONS[b])) - Number(Boolean(SKILL_ICONS[a]))
    );

  return (
    <section id="skills" className="scroll-mt-24 py-16">
      <h2 className="section-heading">Skills</h2>
      <div className="mt-10 flex flex-col gap-8">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-sm font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400">
              {group.title}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {sortByIcon(group.skills).map((skill) => (
                <Badge key={skill}>
                  <SkillIcon name={skill} />
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
