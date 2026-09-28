import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Students from './pages/Students';
import Profile from './pages/Profile';

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased">
        {/* Navigation */}
        <Navbar />

        {/* Content */}
        <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<Students />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;