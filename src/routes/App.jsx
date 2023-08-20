import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../styles/App.css';
import OpenChart1 from '../pages/OpenChart1';
import OpenChart2 from '../pages/OpenChart2';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OpenChart1 />} />
        <Route path="/openchart2" element={<OpenChart2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
