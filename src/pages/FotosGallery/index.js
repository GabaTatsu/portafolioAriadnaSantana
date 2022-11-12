import "./style.css";
import zoom from "../../assets/images/zoom.png";

const FotosGallery = ({
  data,
  title,
  setSlider,
  setImageIndex,
  setImageGallerySliderData,
}) => {
  return (
    <article className="gallerylist">
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
                  setImageGallerySliderData(data);
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
