import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { CVProvider } from './context/CVContext';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Editor from './pages/Editor';
import Preview from './pages/Preview';
import Dashboard from './pages/Dashboard';
import About from './pages/About';

function App() {
  return (
    <CVProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </CVProvider>
  );
}

export default App;