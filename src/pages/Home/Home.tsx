import '../../App.css';
import './Home.css';

import Contacts from './Contacts';
import Experience from './Experience';
import Hero from './Hero';
import Hobbies from './Hobbies';
import Projects from './Projects';
import Skills from './Skills';

const Home = () => {
  return (
    <>
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Hobbies />
      <Contacts />
    </>
  );
};

export default Home;
