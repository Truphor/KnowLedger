import './SideBar.css';
import logo from '../../public/logo.jpeg'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className='sidebar-logo'>
                <img src={logo}></img>
            </div>
            <ul className="sidebar-menu">
                <li>
                    <a href="/page1">Explore</a>
                </li>
                <li>
                    <a href="/page2">Enrolled</a>
                </li>
                <li>
                    <a href="/page3">Exam</a>
                </li>
                <li>
                    <a href="/page4">Portfolio</a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
