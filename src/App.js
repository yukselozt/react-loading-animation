import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Routes, Route, useNavigate } from "react-router-dom";
import TableJs from './TableJs';

function App() {
  const Navigate = useNavigate()

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Button variant='outline-danger' onClick={() => Navigate("/table")}>Click For Loading Animation</Button>} />
        <Route path='/table' element={<TableJs />} />
      </Routes>
    </div>
  );
}

export default App;
