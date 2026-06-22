import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Sigin from './Sigin';
import Tasks from './Tasks';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Sigin />} />
      <Route path='/tasks' element={<Tasks />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
