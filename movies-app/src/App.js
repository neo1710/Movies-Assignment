import './App.css';
import { Main } from './Components/Main';
import { Slider } from './Components/Slider';
import img from "./Media/inside (2).png"
function App() {
  return (
    <div className="App">
        <div className='nav'>
        
        <img src={img} alt='err'/>
      </div>
      <Slider/>
      <Main/>
      <div className='footer'>
        <img src={img} alt='err'/>
        <div>
          <a>Contact</a><br/>
          <a>Help</a>
        </div>
      </div>
    </div>
  );
}

export default App;
