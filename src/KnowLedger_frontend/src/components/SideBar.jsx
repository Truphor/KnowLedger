import './SideBar.css';
import logo from '../../images/logo.jpeg';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className='sidebar-logo'>
                <img src={logo}></img>
            </div>
            <ul className="sidebar-menu">
                <li>
                    <Link to="/page1">Explore</Link>
                </li>
                <li>
                    <Link to="/page2">Enrolled</Link>
                </li>
                <li>
                    <Link to="/page3">Exam</Link>
                </li>
                <li>
                    <Link to="/page4">Portfolio</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;