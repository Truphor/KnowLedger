import React from "react";
import "./VideoCard.css";

const VideoCard = ({ thumbnail, title, description }) => {
  return (
    <div className="video-card">
      <img src={thumbnail} alt={title} className="video-thumbnail" />
      <div className="video-info">
        <h3 className="video-title">{title}</h3>
        <p className="video-description">{description}</p>
      </div>
    </div>
  );
};

export default VideoCard;
