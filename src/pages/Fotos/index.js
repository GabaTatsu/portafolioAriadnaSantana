import "./style.css";
import GalleryIndex from "../../components/GalleryIndex";
import bookImage from "../../assets/images/galeria/17-01-14Niebla1677.jpg";
import prensaImage from "../../assets/images/galeria/2022_6_15_Ariadna_0786.jpg";
import fotogramasImage from "../../assets/images/galeria/297598783_10159024722143348_4939660838506965738_n.jpg";
import rodajesImage from "../../assets/images/galeria/AriadnaSantanaActrizManejoArmas.JPG";

const Fotos = () => {
  return (
    <article className="gallery">
      <GalleryIndex title="BOOK" route="/fotos/book" image={bookImage} />
      <GalleryIndex title="PRENSA" route="/fotos/prensa" image={prensaImage} />
      <GalleryIndex
        title="FOTOGRAMAS"
        route="/fotos/fotogramas"
        image={fotogramasImage}
      />
      <GalleryIndex
        title="RODAJES"
        route="/fotos/rodajes"
        image={rodajesImage}
      />
    </article>
  );
};
export default Fotos;
