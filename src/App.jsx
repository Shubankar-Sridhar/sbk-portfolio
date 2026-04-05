import React from 'react';
import { useAdminMode } from './hooks/useAdminMode';
import { useData } from './context/DataContext';
import AdminPanel from './admin/AdminPanel';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/globals.css';

export default function App() {
  useAdminMode();
  const { isAdminMode } = useData();

  if (isAdminMode) {
    return <AdminPanel />;
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}