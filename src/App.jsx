import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Schule from './pages/Schule';
import FuersEltern from './pages/FuersEltern';
import Schulleben from './pages/Schulleben';
import UeberUns from './pages/UeberUns';
import Unterstuetzen from './pages/Unterstuetzen';
import Karriere from './pages/Karriere';
import Kontakt from './pages/Kontakt';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schule/*" element={<Schule />} />
            <Route path="/eltern/*" element={<FuersEltern />} />
            <Route path="/schulleben/*" element={<Schulleben />} />
            <Route path="/ueber-uns/*" element={<UeberUns />} />
            <Route path="/unterstuetzen/*" element={<Unterstuetzen />} />
            <Route path="/karriere/*" element={<Karriere />} />
            <Route path="/kontakt/*" element={<Kontakt />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
