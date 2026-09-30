import Button from '../../components/Button/Button';

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

  return (
    <section id="contact" className="py-16">
      <h2 className="section-heading">Let&apos;s connect</h2>
      <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
        Open to new opportunities and collaborations. Reach out any time.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Button variant="ghost" onClick={handleGithubClick}>
          Github
        </Button>
        <Button variant="ghost" onClick={handleLinkedInClick}>
          LinkedIn
        </Button>
        <Button variant="ghost" onClick={handleEmailClick}>
          Email
        </Button>
      </div>
    </section>
  );
};

export default Contacts;
