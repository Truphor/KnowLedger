import Navbar from "./Navbar";
import Rightsidebar from "./RightSideBar";
import Sidebar from "./SideBar";
import VideoGallery from "./VideoGallery";

const Landing = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <VideoGallery />
        <Rightsidebar />
      </div>
    </div>
  );
};

export default Landing;
