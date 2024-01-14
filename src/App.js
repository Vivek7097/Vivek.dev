import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className=" scroll-smooth transition-all duration-300">
        <Navbar/>
        <HeroSection/>
    </div>
  );
}

export default App;
