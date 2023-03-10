
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Landing from './Components/Landing/Landing';
import PillDescription from './Components/Pill Description/PillDescription';
import Mife from './Components/Mife/Mife';
import Instructions from './Components/Instructions/Instructions'
import OkayNotOkay from './Components/OkayNotOkay/OkayNotOkay';
import Disclaimer from './Components/Disclaimer/Disclaimer';
import MisoOptions from './Components/MisoOptions/MisoOptions';
import MifeBuccal from './Components/Mife/MifeBuccal';
import InstructionsBuccal from './Components/Instructions/InstructionsBuccal'

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Disclaimer />} />
      <Route path='/mifemiso' element={<Landing />} />
      <Route path='/pilldescription' element={<PillDescription />} />
      <Route path='/misooptions' element={<MisoOptions />} />
      <Route path='/mifeMisoVaginal' element={<Mife />} />
      <Route path='/mifeMisoBuccal' element={<MifeBuccal />} />
      <Route path='/instructions' element={<Instructions />} />
      <Route path='/buccalinstructions' element={<InstructionsBuccal />} />
      <Route path='/okaynotokay' element={<OkayNotOkay />} />
      </Routes>

    </div>
  );
}

export default App;
