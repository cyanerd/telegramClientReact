import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import RequestList from './RequestOperator/RequestList';
import RequestListDesc from './RequestOperator/RequestListDesc';
import RequestUserList from './RequestUser/RequestUserList';
import RequestUserDesc from './RequestUser/RequestUserDesc';
const tg = window.Telegram.WebApp

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RequestList />} />
        <Route path="/RequestList" element={<RequestList />} />
        <Route path="/requestsOperator/:id" element={<RequestListDesc />} />
        <Route path="/RequestUserList/:id" element={<RequestUserList />} />
        <Route path="/requests/:id" element={<RequestUserDesc />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



// <Route path="/" element={<RequestUserList />} />  
//         <Route path="/requests/:id" element={<RequestUserDesc />} />  