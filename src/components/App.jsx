import React from 'react';
import Home from '../pages/Home';
import Survey from '../pages/Survey'
import { Routes, Route} from 'react-router-dom';
import Header from './Header/Header';
export default function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />;
        <Route path="/survey" element={<Survey />} />;
      </Routes>
    </div>
  )
}
