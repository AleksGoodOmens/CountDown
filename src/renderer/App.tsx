import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import InvitePage from './Components/InvitePage/InvitePage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InvitePage />} />
      </Routes>
    </Router>
  );
}
