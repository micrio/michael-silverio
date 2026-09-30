import '../../App.css';
import './Home.css';

import { useState } from 'react';

import Reveal from '../../components/Reveal/Reveal';
import Contacts from './Contacts';
import Experience from './Experience';
import Hero from './Hero';
import Hobbies from './Hobbies';
import Pillars from './Pillars';
import Projects from './Projects';
import Skills from './Skills';

const Home = () => {
  const [experienceTab, setExperienceTab] = useState<
    'detailed' | 'features'
  >('detailed');

  const openFeaturesShipped = () => {
    setExperienceTab('features');
    document
      .getElementById('experience')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <Reveal>
        <Hero onFeaturesShippedClick={openFeaturesShipped} />
      </Reveal>
      <Reveal>
        <Projects />
      </Reveal>
      <Reveal>
        <Experience tab={experienceTab} onTabChange={setExperienceTab} />
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
