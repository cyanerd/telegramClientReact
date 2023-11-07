import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import RequestList from './RequestOperator/RequestList';
import Button from '../src/components/Button/Button';
import RequestUserList from './RequestUser/RequestUserList';
import RequestUserDesc from './RequestUser/RequestUserDesc';

const tg = window.Telegram.WebApp

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RequestUserList />} />
        <Route path="/requests/:id" element={<RequestUserDesc />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
