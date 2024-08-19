import "./SideBar.css";
import logo from "../../images/logo1.png";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="sidebar-menu">
        <li>
          <Link to="/" className={isActive("/")}>
            Explore
          </Link>
        </li>
        <li>
          <Link to="/enrolled" className={isActive("/enrolled")}>
            Enrolled
          </Link>
        </li>
        <li>
          <Link to="/exam" className={isActive("/exam")}>
            Exam
          </Link>
        </li>
        <li>
          <Link to="/profile" className={isActive("/profile")}>
            Profile
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
