import '../../App.css';
import './Home.css';

import Reveal from '../../components/Reveal/Reveal';
import Contacts from './Contacts';
import Experience from './Experience';
import Hero from './Hero';
import Hobbies from './Hobbies';
import Pillars from './Pillars';
import Projects from './Projects';
import Skills from './Skills';

const Home = () => {
  return (
    <>
      <Reveal>
        <Hero />
      </Reveal>
      <Reveal>
        <Projects />
      </Reveal>
      <Reveal>
        <Experience />
      </Reveal>
      <Reveal>
        <Pillars />
      </Reveal>
      <Reveal>
        <Skills />
      </Reveal>
      <Reveal>
        <Hobbies />
      </Reveal>
      <Reveal>
        <Contacts />
      </Reveal>
    </>
  );
};

export default Home;
