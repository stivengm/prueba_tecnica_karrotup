import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import Home from './components/home/home';
import Colombia from './components/colombia/colombia';
import Mexico from './components/mexico/mexico';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/colombia" element={<Colombia />} />
        <Route path="/mexico" element={<Mexico />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
