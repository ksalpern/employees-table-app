import './App.css';
import DisplayTable from './components/DisplayTable';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
        <Route path="/"  element={ <DisplayTable/>} />
        </Routes>
     </Router>
    </div>
  );
}

export default App;
