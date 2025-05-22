import React from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './sections/Home';
import { Domain } from './sections/Domain';
import { Milestones } from './sections/Milestones';
import { Documents } from './sections/Documents';
import { Presentations } from './sections/Presentations';
import { AboutUs } from './sections/AboutUs';
import { Contact } from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Home />
        <Domain />
        <Milestones />
        <Documents />
        <Presentations />
        <AboutUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;