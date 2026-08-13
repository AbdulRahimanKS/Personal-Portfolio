import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <div id="home"><Home /></div>
        <div id="about"><About /></div>
        <div id="skills"><Skills /></div>
        <div id="projects"><Projects /></div>
        <div id="experience"><Experience /></div>
        <div id="contact"><Contact /></div>
      </main>
      <Chatbot />
    </ThemeProvider>
  );
}

export default App;
