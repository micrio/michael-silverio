import { useLocation, useNavigate } from 'react-router-dom';

const links = [
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

const SiteNav = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const goToSection = (id: string) => {
    const scroll = () =>
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });

    if (pathname === '/') {
      scroll();
      return;
    }

    // Coming from a project page: go home first, then scroll once it mounts.
    navigate('/');
    window.setTimeout(scroll, 120);
  };

  return (
    <nav className="flex items-center gap-1">
      {links.map((link) => (
        <button
          key={link.id}
          type="button"
          onClick={() => goToSection(link.id)}
          className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-white/60 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
        >
          {link.label}
        </button>
      ))}
    </nav>
  );
};

export default SiteNav;
