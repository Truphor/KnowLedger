import React from 'react';
import VideoCard from './VideoCard';
import './VideoGallery.css';

const dummyVideos = [
    {
        id: 1,
        thumbnail: 'https://i.ytimg.com/vi/Sp3dFF-Bts0/maxresdefault.jpg',
        title: 'Video Title 1',
        description: 'This is a short description of Video Title 1.',
    },
    {
        id: 2,
        thumbnail: 'https://static-cse.canva.com/blob/1654326/1600w-wK95f3XNRaM.jpg',
        title: 'Video Title 2',
        description: 'This is a short description of Video Title 2.',
    },
    {
        id: 3,
        thumbnail: 'https://i.ytimg.com/vi/Sp3dFF-Bts0/maxresdefault.jpg',
        title: 'Video Title 3',
        description: 'This is a short description of Video Title 3.',
    },
    {
        id: 4,
        thumbnail: 'https://static-cse.canva.com/blob/1654326/1600w-wK95f3XNRaM.jpg',
        title: 'Video Title 4',
        description: 'This is a short description of Video Title 4.',
    },
    {
        id: 5,
        thumbnail: 'https://i.ytimg.com/vi/Sp3dFF-Bts0/maxresdefault.jpg',
        title: 'Video Title 3',
        description: 'This is a short description of Video Title 3.',
    },
    {
        id: 6,
        thumbnail: 'https://static-cse.canva.com/blob/1654326/1600w-wK95f3XNRaM.jpg',
        title: 'Video Title 4',
        description: 'This is a short description of Video Title 4.',
    },
    {
        id: 7,
        thumbnail: 'https://i.ytimg.com/vi/Sp3dFF-Bts0/maxresdefault.jpg',
        title: 'Video Title 3',
        description: 'This is a short description of Video Title 3.',
    },
    {
        id: 8,
        thumbnail: 'https://static-cse.canva.com/blob/1654326/1600w-wK95f3XNRaM.jpg',
        title: 'Video Title 4',
        description: 'This is a short description of Video Title 4.',
    },
    {
        id: 9,
        thumbnail: 'https://static-cse.canva.com/blob/1654326/1600w-wK95f3XNRaM.jpg',
        title: 'Video Title 4',
        description: 'This is a short description of Video Title 4.',
    },
    
];

const VideoGallery = () => {
    return (
        <main className="main-content">
            <div className="video-gallery">
                {dummyVideos.map(video => (
                    <VideoCard
                        key={video.id}
                        thumbnail={video.thumbnail}
                        title={video.title}
                        description={video.description}
                    />
                ))}
            </div>
        </main>
    );
};

export default VideoGallery;
