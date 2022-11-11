import closeButton from "../../assets/images/close-button.png";
import fullScreen from "../../assets/images/fullscreen.png";
import closeFullScreen from "../../assets/images/close-fullscreen.png";
import next from "../../assets/images/proximo.png";
import { useState } from "react";

const GallerySlider = ({ data, setSlider, imageIndex }) => {
  const [fullScreenImage, setFullScreenImage] = useState(fullScreen);

  return (
    <div className="galleryslider">
      <aside>
        <button>
          <img src={closeButton} alt="Close" />
        </button>
        <button>
          <img src={fullScreenImage} alt="Full Screen" />
        </button>
      </aside>
      <section>
        <button>
          <img src={next} alt="Previus" />
        </button>
        <button>
          <img src={next} alt="Next" />
        </button>
      </section>
    </div>
  );
};
export default GallerySlider;
