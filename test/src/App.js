
import './App.css';
import Navigation from './Components/Navigation';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Resume from './Components/Resume';
function App() {
  return (
    <div className="App">
     
      <Navigation></Navigation>
      <Home></Home>
      <About></About>
      <Contact></Contact>
      <Resume></Resume>
    </div>
  );
}

export default App;
