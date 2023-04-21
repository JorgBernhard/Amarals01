import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Restaurant from "./pages/Restaurant";
import Bar from "./pages/Bar";
import Speisekarte from "./pages/Speisekarte";
import Catering from "./pages/Catering";
import Reservierungen from "./pages/Reservierungen";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Restaurant />} />
          <Route path="bar" element={<Bar />} />
          <Route path="Speisekarte" element={<Speisekarte />} />
          <Route path="catering" element={<Catering />} />
          <Route path="reservierungen" element={<Reservierungen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);