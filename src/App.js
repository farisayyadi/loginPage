import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login/login";
import SignUp from "./components/SignUp/SignUp";
import ForgetPassword from "./components/forgetPassword/forgetPassword";
import "./general.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signUp" element={<SignUp />} />
          <Route exact path="/forgetPassword" element={<ForgetPassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
