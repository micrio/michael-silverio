import { useEffect, useState } from "react";

import Button from "../../components/Button/Button";
import clsx from "clsx";

const NavigationMenu = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  return (
    <nav
      className={clsx(
        'glass sticky top-0 z-10 flex w-full justify-end gap-8 rounded-none px-6 py-6 md:px-10',
        scrollPosition > 100 ? 'bg-white/80 dark:bg-slate-950/70' : 'bg-transparent backdrop-blur-0 border-transparent'
      )}
    >
      <Button>Work</Button>
      <Button>Projects</Button>
    </nav>
  );
};

export default NavigationMenu;
