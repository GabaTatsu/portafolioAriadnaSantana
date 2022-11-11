import { Link } from "react-router-dom";

const GalleryIndex = ({ title, route, image }) => {
  return (
    <section>
      <h4>{title}</h4>
      <Link to={route}>
        <img src={image} alt={title} />
      </Link>
    </section>
  );
};
export default GalleryIndex;
