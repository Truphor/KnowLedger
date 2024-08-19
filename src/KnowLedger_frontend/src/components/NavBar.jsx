import "./NavBar.css";

const Navbar = () => {
  return (
    <div className="nav-main">
      <div className="nav-title">
        <h1>KVE</h1>
      </div>
      <div className="nav-items">
        <a href="#">Home</a>
        <a href="#">Profile</a>
      </div>
    </div>
  );
};

export default Navbar;
