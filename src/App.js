import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import PlanetsCard from './components/PlanetsCard';
import ResidentsCard from './components/ResidentsCard';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<PlanetsCard />} />
          <Route exact path='/residents-card' element={<ResidentsCard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
