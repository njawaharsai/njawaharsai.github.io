import { useState } from 'react';
import StoryShell from './components/StoryShell';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Awards from './components/Awards';
import Footer from './components/Footer';

type Mode = 'story' | 'full';

export default function App() {
  const [mode, setMode] = useState<Mode>('story');

  if (mode === 'story') {
    return <StoryShell onViewFull={() => setMode('full')} />;
  }

  return (
    <>
      <Navbar onStoryMode={() => setMode('story')} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Awards />
      </main>
      <Footer />
    </>
  );
}
