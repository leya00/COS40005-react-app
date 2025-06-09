// src/App.tsx

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import VideoUploader from './components/VideoUploader';
import CommuterDashboard from './components/CommuterDashboard';

function App() {
  return (
    <Router>
      {/* Simple navigation buttons */}
      <nav className="bg-gray-800 text-white p-4 flex gap-4">
        <Link to="/">Researcher View</Link>
        <Link to="/commuter">Commuter View</Link>
      </nav>

      <Routes>
        <Route path="/" element={<VideoUploader />} />
        <Route path="/commuter" element={<CommuterDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
