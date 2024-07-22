import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <div>
      <div>
        <h1>authentication ui </h1>
        <Login />
        <Signup />
      </div>
    </div>
  );
}

export default App;
