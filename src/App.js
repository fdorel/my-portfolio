import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Add this to prevent body scroll when menu is open
const handleMenuOpen = () => {
  document.body.classList.add('menu-open');
};

const handleMenuClose = () => {
  document.body.classList.remove('menu-open');
};

function App() {
  // ... existing code ...

  return (
    <div className="App">
      {/* Add scroll locking when menu is open */}
      
      {/* Navigation - with menu state management */}
      <Navbar 
        onMenuOpen={handleMenuOpen} 
        onMenuClose={handleMenuClose} 
      />

      {/* Rest of your components... */}
    </div>
  );
}

export default App;
