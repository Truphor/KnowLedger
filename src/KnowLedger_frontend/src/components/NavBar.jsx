import './NavBar.css'
import logo from '../../public/logo.jpeg'
const Navbar = () => {
    return (
        <div className='nav-main'>
            <div className='nav-logo'>
                <h1>kve</h1>
            </div>
            <div className='nav-items'>
                <a href='#'>Home</a>
                <a href='#'>Profile</a>

            </div>

        </div>
    )
}
export default Navbar