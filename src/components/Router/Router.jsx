import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "../inicio/login";
import Lobby from "../looby";

 function Router() {
    return (
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Lobby/>}/>
        <Route path="/01" element={<LogIn/>}/>
        </Routes>
      </BrowserRouter>
    );
  }
export default Router;

