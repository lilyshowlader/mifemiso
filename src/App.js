
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Landing from './Components/Landing/Landing';
import PillDescription from './Components/Pill Description/PillDescription';
import Mife from './Components/Mife/Mife';
import Instructions from './Components/Instructions/Instructions'
import OkayNotOkay from './Components/OkayNotOkay/OkayNotOkay';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/pilldescription' element={<PillDescription />} />
      <Route path='/mife' element={<Mife />} />
      <Route path='/instructions' element={<Instructions />} />
      <Route path='/okaynotokay' element={<OkayNotOkay />} />
      </Routes>

    </div>
  );
}

export default App;
