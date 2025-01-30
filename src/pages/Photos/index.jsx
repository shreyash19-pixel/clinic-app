import React, { useState } from "react";
import "../../styles/Photos/index.scss";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

// Importing all photos dynamically
const photoImports = [
  "Photo1.jpg",
  "Photo2.jpg",
  "Photo3.jpg",
  "Photo4.jpg",
  "Photo5.jpg",
  "Photo6.jpg",
  "Photo7.jpg",
  "Photo8.jpg",
  "Photo9.jpg",
  "Photo10.jpg",
  "Photo11.jpg",
  "Photo12.jpg",
  "Photo13.jpg",
  "Photo14.jpg",
  "Photo15.jpg",
  "Photo16.jpg",
  "Photo17.jpg",
  "Photo18.jpg",
].map((photo) => require(`../../assets/Photos/${photo}`));

const videoData = [
  { id: "clLtCgWWT6A", title: "Video 1" },
  { id: "s_cJ2pWxGPo", title: "Video 2" },
  { id: "8DKoQ_8nZyA", title: "Video 3" },
];

const Photos = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div>
      <Nav />

      {/* Photo Grid Section */}

      {/* YouTube Video Section */}
      <section className="video-section">
        <h2 className="video-section__title">Watch Our Videos</h2>
        <div className="video-grid">
          {videoData.map((video, index) => (
            <div
              key={index}
              className="video-container"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              onClick={() =>
                window.open(
                  `https://www.youtube.com/watch?v=${video.id}`,
                  "_blank"
                )
              }
            >
              <iframe
                src={
                  hovered === index
                    ? `https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1`
                    : `https://www.youtube.com/embed/${video.id}`
                }
                title={video.title}
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </section>

      <section className="photos">
        {photoImports.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`photo-${index + 1}`}
            className="photos__img"
          />
        ))}
      </section>

      <Footer />
    </div>
  );
};

export default Photos;
