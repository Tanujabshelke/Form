import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
// import Add from './Component/Add';
import View from "./Component/View";
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  useNavigate
} from "react-router-dom";
import Add from "./Component/Add";

function App() {
  const [add, setAdd] = useState(true);

  return (
    <div className="container">
      <section className="header">WELCOME</section>
      <section className="main">
        <nav className="main--sidebar">
          <button
            onClick={() => {
              setAdd(true);
            }}
          >
            Add
          </button>
          <button
            onClick={() => {
              setAdd(false);
            }}
          >
            View
          </button>
        </nav>
        <div className="main--view">{add ? <Add /> : <View />}</div>
      </section>
    </div>
  );
}

export default App;
