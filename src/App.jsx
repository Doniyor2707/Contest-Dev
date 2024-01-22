import "./App.css";
import { BrowserRouter} from "react-router-dom";

import Navbar from "./components/nav/Navbar";
import Section from "./components/section/section";

function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Navbar />
          <Section/>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
