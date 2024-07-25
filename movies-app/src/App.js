import logo from './logo.svg';
import './App.css';
import { Main } from './Components/Main';
import { Slider } from './Components/Slider';

function App() {
  return (
    <div className="App">
        <div className='nav'>
        
        <h1>Movies Db</h1>
      </div>
      <Slider/>
      <Main/>
    </div>
  );
}

export default App;
