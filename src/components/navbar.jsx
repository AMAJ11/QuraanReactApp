// src/components/Navbar.jsx
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { faQuran } from "@fortawesome/free-solid-svg-icons";


function Navbar() {
  const location = useLocation();

  return (
    <nav className="p-4  flex gap-4 d-flex-row justify-center">
      <div>
        <Link
          to="/"
          className={`px-4 py-2 rounded transition
        }`}
        >
          <FontAwesomeIcon icon={faHome} className={`ml-2 text-lg  ${location.pathname === "/" ? "text-blue-500" : "text-white"} `} />
        </Link>

        <Link
          to="/quraan"
          className={`px-4 py-2 rounded transition
        }`}
        >
          <FontAwesomeIcon icon={faQuran} className={`ml-2 text-lg ${location.pathname === "/quraan" ? "text-blue-500" : "text-white"} `} />
          {/* <FontAwesomeIcon icon={faHome} /> */}
        </Link>
        <Link
          to="/about"
          className={`px-4 py-2 rounded transition
        }`}
        >
          <FontAwesomeIcon icon={faQuestion} className={`ml-2 text-lg ${location.pathname === "/about" ? "text-blue-500" : "text-white"} `} />
          {/* <FontAwesomeIcon icon={faHome} /> */}
        </Link>
      
      </div>

    </nav>
  );
}

export default Navbar;