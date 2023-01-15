
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Create from "./pages/CreateTest";
import Test from "./pages/Test";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element= {<Home />}/>
          <Route exact path="/createtest" element= {<Create/>} />
          {/* <Route exact path="/test/:id" children={<Test />} /> */}
          <Route exact path="/test" element={<Test />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
