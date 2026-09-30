const Contacts = () => {
  const handleGithubClick = () => {
    window.open('https://github.com/micrio', '_blank', 'noopener, noreferrer');
  };

  const handleLinkedInClick = () => {
    window.open(
      'https://www.linkedin.com/in/michael-silverio-a342a6141/',
      '_blank',
      'noopener, noreferrer'
    );
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:mikesil121@gmail.com';
  };

  const buttonClasses =
    'glass-subtle rounded-2xl px-5 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:text-slate-900 dark:text-slate-200 dark:hover:text-white';

  return (
    <section id="contact" className="scroll-mt-24 py-16">
      <h2 className="section-heading">Let&apos;s connect</h2>
      <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
        Open to new opportunities and collaborations. Reach out any time.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <button type="button" onClick={handleGithubClick} className={buttonClasses}>
          Github
        </button>
        <button type="button" onClick={handleLinkedInClick} className={buttonClasses}>
          LinkedIn
        </button>
        <button type="button" onClick={handleEmailClick} className={buttonClasses}>
          Email
        </button>
      </div>
    </section>
  );
};

export default Contacts;
