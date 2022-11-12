import "./style.css";
import closeButton from "../../assets/images/close-button.png";
import fullScreen from "../../assets/images/fullscreen.png";
import closeFullScreen from "../../assets/images/close-fullscreen.png";
import next from "../../assets/images/proximo.png";
import { useState } from "react";

const GallerySlider = ({ data, setSlider, imageIndex }) => {
  const [fullScreenImage, setFullScreenImage] = useState(fullScreen);
  const [finalImageIndex, setFinalImageIndex] = useState(imageIndex);

  document.addEventListener("fullscreenchange", (event) => {
    if (document.fullscreenElement) {
      setFullScreenImage(closeFullScreen);
    } else {
      setFullScreenImage(fullScreen);
    }
  });

  return (
    <div className="galleryslider">
      <aside>
        <button
          onClick={() => {
            if (document.body.requestFullscreen()) {
              document.exitFullscreen();
            } else {
              document.body.requestFullscreen();
            }
          }}
        >
          <img src={fullScreenImage} alt="Full Screen" />
        </button>
        <button
          onClick={() => {
            setSlider(false);
          }}
        >
          <img src={closeButton} alt="Close" />
        </button>
      </aside>
      <section>
        <button>
          <img
            src={next}
            alt="Previus"
            onClick={() => {
              if (finalImageIndex <= 0) {
                setFinalImageIndex(data.length - 1);
              } else {
                setFinalImageIndex(finalImageIndex - 1);
              }
            }}
          />
        </button>
        <img src={data[finalImageIndex]} alt="Foto de la Galería" />
        <button>
          <img
            src={next}
            alt="Next"
            onClick={() => {
              if (data.length <= finalImageIndex + 1) {
                setFinalImageIndex(0);
              } else {
                setFinalImageIndex(finalImageIndex + 1);
              }
            }}
          />
        </button>
      </section>
    </div>
  );
};
export default GallerySlider;
