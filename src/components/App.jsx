import React from 'react';
import Home from '../pages/Home';
import Survey from '../pages/Survey'
import { Routes, Route} from 'react-router-dom';
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/survey" element={<Survey />} />;
      </Routes>
    </div>
  )
}
