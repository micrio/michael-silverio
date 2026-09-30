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
import ProductionApps from './pages/ProductionApps/ProductionApps';
import ProjectDetail from './pages/ProjectDetail/ProjectDetail';
import ShippedFeatures from './pages/ShippedFeatures/ShippedFeatures';

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
        <header className="mx-auto flex w-full max-w-6xl flex-none items-center justify-end px-4 py-4 sm:px-6 md:px-10">
          <SiteNav />
        </header>
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-24 sm:px-6 md:px-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/production-apps" element={<ProductionApps />} />
            <Route path="/shipped-features" element={<ShippedFeatures />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
