// dependency module imports
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Route imports
import Home from "./Home";
import Game from "./Game";

const App = () => {
  return (
    <Router>
      <h1>TIC-TAC-TOE</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
