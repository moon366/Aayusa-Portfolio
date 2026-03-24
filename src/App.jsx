import React from 'react';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="bg-white text-gray-900 antialiased">
      <ScrollToTop />
      <Home />
    </div>
  );
}

export default App;