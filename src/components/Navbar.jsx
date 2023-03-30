import { Link } from "react-router-dom";
import LogIn from "./inicio/login";



function Navbar() {
  return (

    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">aGora</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><a>Home</a></li>
          <li><a>Nie</a></li>
          <li ><a>LogIn</a></li>
          <li><a>Perfil</a></li>
        </ul>
      </div>
    </div>

  )
}
export default Navbar;