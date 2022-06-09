import Home from './components/Home/index.js';
import Episodes from './pages/Episodes.js';
import Location from './pages/Location.js';
import Navbar from "./components/Navbar/Navbar";
import CardDetails from './components/Card/CardDetails.js';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


export default function App() {
  return (
    <Router>
      <div>
        <Navbar></Navbar>
      </div>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/episodes" element={<Episodes></Episodes>} />
        <Route path="/location" element={<Location></Location>} />
        <Route path="/:id" element={<CardDetails />} />
        <Route path="/episodes/:id" element={<CardDetails />} />
        <Route path="/location/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  )
}
