import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import DataTable from './components/dataTable';
import JoinWallet from "./components/joinWallet";
import OurMission from "./components/OurMission";
import './App.css';

const App = () => {
  return (
    <div>
       <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">Our Mission</Link>
            </li>
            <li>
              <Link to="/fcode">Connect Wallet</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<DataTable />} />
          <Route path="/about" element={<OurMission />} />
          <Route path="/fcode" element={<JoinWallet />} />
        </Routes>
      </div>
    </Router>

    </div>
    
  );
};

export default App;
