import { lazy, Suspense } from 'react';
import Background from './components/Background.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';

// Below-the-fold: se cargan en chunks separados para no sumar al bundle
// inicial (ver DESIGN.md #0, rendimiento).
const Skills = lazy(() => import('./components/Skills.jsx'));
const Experience = lazy(() => import('./components/Experience.jsx'));
const Contact = lazy(() => import('./components/Contact.jsx'));
const Footer = lazy(() => import('./components/Footer.jsx'));
const WhatsAppButton = lazy(() => import('./components/WhatsAppButton.jsx'));

export default function App() {
  return (
    <>
      <Background />
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Suspense fallback={null}>
          <Skills />
          <Experience />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
        <WhatsAppButton />
      </Suspense>
    </>
  );
}
