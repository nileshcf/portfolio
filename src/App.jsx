import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';
import './App.css';

const Home = lazy(() => import('./pages/Home'));
const Timeline = lazy(() => import('./pages/Timeline'));
const Projects = lazy(() => import('./pages/Projects'));
const Love = lazy(() => import('./pages/Love'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Contact = lazy(() => import('./pages/ContactMe'));

function App() {
  return (
    <Router>
      <Header />
      <main className="main-content">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/love" element={<Love />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </Router>
  );
}

export default App;