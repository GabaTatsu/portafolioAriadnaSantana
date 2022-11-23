import perfilImage from "../../assets/images/AriCV.jpg";
import "./style.css";

const PerfilCV = () => {
  return (
    <article className="perfilcv">
      <section>
        <h3>PERFIL</h3>
        <ul>
          <li>
            <p>
              <strong>Piel:</strong> Mediterránea.
            </p>
          </li>
          <li>
            <p>
              <strong>Pelo:</strong> Castaño.
            </p>
          </li>
          <li>
            <p>
              <strong>Ojos:</strong> Castaños.
            </p>
          </li>
          <li>
            <p>
              <strong>Estatura:</strong> 1’65 cm.
            </p>
          </li>
          <li>
            <p>
              <strong>Residencia:</strong> Madrid, Galicia.
            </p>
          </li>
          <li>
            <p>
              <strong>Idiomas:</strong> Castellano y Gallego (nativo) / Inglés
              (nivel alto) / Portugués, Francés y Italiano: (nivel medio)/
              Alemán, Ruso: (nivel bajo).
            </p>
          </li>
          <li>
            <p>
              <strong>Aptitudes:</strong> Canto (Soprano), Guitarra, Percusión,
              Locución, Danza, Equitación, Lengua de Signos, Esquí, Zancos,
              Esgrima, Lucha Escénica, Manejo de Armas, Mimo, Clown, Yoga,
              Carnet B1.
            </p>
          </li>
        </ul>
      </section>
      <img src={perfilImage} alt="Ariadna Santana" />
    </article>
  );
};
export default PerfilCV;
