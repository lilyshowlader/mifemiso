
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Landing from './Components/Landing/Landing';
import PillDescription from './Components/Pill Description/PillDescription';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/pilldescription' element={<PillDescription />} />
      </Routes>

    </div>
  );
}

export default App;
