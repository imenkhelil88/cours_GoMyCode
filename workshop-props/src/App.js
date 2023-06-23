
import './App.css';
import TourList from './Components/TourList'; 
import tours from './Constant/Data';

function App() {
  return (
    <div className="App">
      <TourList data={tours}></TourList>
    </div>
  );
}

export default App;
