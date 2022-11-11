import "./style.css";
import imagenPresentacion from "../../assets/images/AriIndex2.jpg";

const Presentation = () => {
  return (
    <article className="presentation">
      <section>
        <h4>
          ¡Bienvenidos a la pagina web oficial de la actriz y cantante Ariadna
          Santana!
        </h4>
        <p>
          Actriz Licenciada por la "Esad de Valencia" y "Rose Bruford College"
          Londres, complementa su formación con Odin Teatret, Roy Hart, Gabriel
          Olivares, Manuel Galiana o Andrés Cuenca. Actriz políglota y
          polifacética destaca como cantante, locutora, presentadora o bailarina
          entre otras.
          <br />
          <br />
          En cine ha trabajado para Bollywood en inglés en "Dil Dhadakne Do", de
          Zoya Akhtar, en "Mama" de Julio Médem, en "Combustión" de Daniel
          Carparsoro y "Yerma" de Emilio Ruiz Barrachina Nominada como mejor
          actriz de reparto a los Goya 2018.
          <br />
          <br />
          En TV ha estado en las series "La que se Avecina", "Con el Culo al
          Aire", "Cuéntame", "Traición" o "Amar es Para Siempre".
          <br />
          <br />
          En teatro en "Microteatro por Dinero" y con su propia compañía con
          Musicales trilingües en gira. Cabe destacar "Hamlet" en el Instituto
          Grotowski o "News from the Moon" en el Festival de Almagro.
        </p>
      </section>
      <img src={imagenPresentacion} alt="Ariadna Acostada" />
      <p></p>
    </article>
  );
};
export default Presentation;
