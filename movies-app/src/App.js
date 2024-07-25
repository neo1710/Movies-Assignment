import logo from './logo.svg';
import './App.css';
import { Main } from './Components/Main';
import { Slider } from './Components/Slider';
import img from "./Media/inside (1).png"
function App() {
  return (
    <div className="App">
        <div className='nav'>
        
        <img src={img} alt='err'/>
      </div>
      <Slider/>
      <Main/>
    </div>
  );
}

export default App;
