import "./style.css";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.png";
const AppNav = () => {
  return (
   <>
    <header>
      <div className="logo">
        <Link>
          <img src={logo} alt="" />
        </Link>
      </div>
      <nav>
        <ul className="nav__links">
        
          <li>
            <Link to="#">
              <FaHeart style={{color:'red',fontSize:'1.2rem'}}/>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  
   </>
  );
};
export default AppNav;
