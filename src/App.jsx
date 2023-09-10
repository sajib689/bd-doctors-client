import { Outlet } from "react-router-dom";
import "./App.css";
import Home from "./Layout/Home/Home";
import Footer from "./Shared/Footer/Footer";

function App() {
  return (
    <>
      <Home></Home>
      <Outlet></Outlet>

      <Footer></Footer>
    </>
  );
}

export default App;
