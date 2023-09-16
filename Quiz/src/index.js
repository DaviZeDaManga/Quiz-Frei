import './index.scss'

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home';
import Cardinfo from './pages/cardinfo';
import Perguntas from './pages/perguntas'
import Respostas from './pages/respostas';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/info' element={<Cardinfo/>} />
        <Route path='/perguntas' element={<Perguntas/>} />
        <Route path='/respostas' element={<Respostas/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


