import NavigationBar from "./components/NavigationBar/NavigationBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import History from "./components/History/History";


function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/History" element={<History />} />
      </Routes>
    </Router>
  );
}

export default App;
