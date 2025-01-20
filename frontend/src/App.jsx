import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TemplateList from './components/TemplateList';
import EmailBuilder from './components/EmailBuilder';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/selectTemplate" element={<TemplateList />} />
          <Route path="/builder/:templateId" element={<EmailBuilder />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
