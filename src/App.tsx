import { useEffect } from 'react';
import {
  HashRouter,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';

import './App.css';
import Background from './components/Background/Background';
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
      <div className="relative min-h-screen">
        <Background />
        <header className="mx-auto flex w-full max-w-6xl items-center justify-end px-6 py-5 md:px-10">
          {/* Theme toggle hidden for now - dark theme only. */}
          {/* <ThemeToggle /> */}
        </header>
        <main className="mx-auto w-full max-w-6xl px-6 pb-24 md:px-10">
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
