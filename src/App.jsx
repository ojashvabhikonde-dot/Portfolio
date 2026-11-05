import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import LightThemeView from './components/LightThemeView';
import { ThemeProvider, useTheme } from './context/ThemeContext';

function PortfolioContent() {
  const { theme, isDark } = useTheme();

  if (!isDark) {
    // Exact Light / Orange Creative Theme matching the user's reference image
    return <LightThemeView />;
  }

  // Original Dark Neon Portfolio
  return (
    <div className="bg-[#030308] text-bodyText min-h-screen font-sans selection:bg-primary/30 relative overflow-x-hidden">
      {/* Signature Purple Glowing Ball Custom Cursor */}
      <CustomCursor />
      
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Achievements />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-[#030308]">
        <div className="relative flex items-center justify-center">
          <div className="animate-spin rounded-full h-14 w-14 border-t-2 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}

export default App;
