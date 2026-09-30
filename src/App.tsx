import { useEffect } from 'react';
import {
  HashRouter,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';

import './App.css';
import Background from './components/Background/Background';
import CursorGlow from './components/CursorGlow/CursorGlow';
import MoreDots from './components/MoreDots/MoreDots';
import SiteNav from './components/SiteNav/SiteNav';
import Home from './pages/Home/Home';
// import ThemeToggle from './pages/Home/ThemeToggle';
import ProjectDetail from './pages/ProjectDetail/ProjectDetail';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="relative flex min-h-screen flex-col overflow-x-hidden">
        <Background />
        <CursorGlow />
        <MoreDots />
        <header className="mx-auto flex w-full max-w-6xl flex-none items-center justify-center px-5 py-4 sm:px-6 md:px-10 lg:justify-end">
          <SiteNav />
        </header>
        <main className="mx-auto w-full max-w-6xl flex-1 px-5 pb-24 sm:px-6 md:px-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
