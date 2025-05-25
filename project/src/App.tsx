import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { AboutUs } from './sections/AboutUs';
import { Contact } from './sections/Contact';
import { Documents } from './sections/Documents';
import { Domain } from './sections/Domain';
import { Home } from './sections/Home';
import { Milestones } from './sections/Milestones';
import { Presentations } from './sections/Presentations';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Home />
        <Domain />
        <Milestones />
        <Presentations />
        <Documents />
        <AboutUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;