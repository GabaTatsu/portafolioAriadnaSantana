import "./style.css";
import zoom from "../../assets/images/zoom.png";
import { useState } from "react";
import GallerySlider from "../../components/GallerySlider";

const FotosGallery = ({ data, title }) => {
  const [slider, setSlider] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <article className="gallerylist">
      {slider && (
        <GallerySlider
          data={data}
          setSlider={setSlider}
          imageIndex={imageIndex}
        />
      )}
      <h2>{title}</h2>
      <ul>
        {data.map((image, index) => {
          return (
            <li key={index}>
              <img src={image} alt={image} />
              <button
                onClick={() => {
                  setSlider(true);
                  setImageIndex(index);
                }}
              >
                <img src={zoom} alt="zoom" />
              </button>
            </li>
          );
        })}
      </ul>
    </article>
  );
};
export default FotosGallery;
