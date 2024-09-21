import logo from "./logo.svg";
import "./App.css";
import Component from "./Component";
import ProductTab from "./ProductTab";
// import LoginSignup from './Components/LoginSignup/LoginSignup';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/LoginSignup/Login";
import LoginSignup from "./Components/LoginSignup/LoginSignup";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "./Components/DashBoard/Dashboard";
import Myprofile from "./Components/MyProfile/Myprofile";
import Logout from "./Components/MyProfile/Logout";
import { Settings } from "@mui/icons-material";
import Form from "./Components/Form/Form";
// import SignUp from './SignUp';
function Title() {
  return <h1>Hello world</h1>;
}
function App() {
  return (
      <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<LoginSignup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Myprofile/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/applyform" element={<Form/>}/>
        <Route path="/" element={<LoginSignup />} />

      </Routes>
    </Router>
    // <div className="row">
    //   <div className="col-md-2">hello</div>  {/* Fixed className */}
    //   <div className="col-md-2 btn-primary">world</div>  {/* Fixed className */}
    // </div>
    
  );
}

export default App;
