import { Outlet } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <>
      <Home></Home>
      <Outlet></Outlet>
    </>
  );
}

export default App;
