import telephoneIcon from "../../assets/images/telephone.png";
import emailIcon from "../../assets/images/email.png";
import ubicationIcon from "../../assets/images/ubication.png";
import eboracastIcon from "../../assets/images/eboracast.png";
import youtubeIcon from "../../assets/images/icoyoutube.png";
import instagramIcon from "../../assets/images/icoinstagram.png";
import facebookIcon from "../../assets/images/icofacebook.png";
import linkedinIcon from "../../assets/images/icolinkedin.png";
import twitterIcon from "../../assets/images/icotwitter.png";
import imdbIcon from "../../assets/images/imdbIcon.png";
import aaagIcon from "../../assets/images/aaag.png";
import "./style.css";

const ContactSection = () => {
  return (
    <article className="contactsection">
      <section>
        <h4>Representante</h4>
        <p>María Liaño</p>
        <ul>
          <li>
            <a href="mailto:maria@eboracast.com" title="Correo de Maria Liaño">
              <img
                src={emailIcon}
                alt="Correo electrónico de la representante de Ariadna Santana"
              />
            </a>
            <a href="mailto:maria@eboracast.com" title="Correo de Maria Liaño">
              maria@eboracast.com
            </a>
          </li>
          <li>
            <a href="tel:+34609811224" title="Teléfono de Maria Liaño">
              <img
                src={telephoneIcon}
                alt="Teléfono de la representante de Ariadna Santana"
              />
            </a>
            <a href="tel:+34609811224" title="Teléfono de Maria Liaño">
              +34609811224
            </a>
          </li>
          <li>
            <a
              href="https://goo.gl/maps/1L74ZLGcvAaM3sP2A"
              target="_blank"
              rel="noreferrer"
              title="Ubicación Maria Liaño"
            >
              <img
                src={ubicationIcon}
                alt="Dirección de la representante de Ariadna Santana"
              />
            </a>
            <a
              href="https://goo.gl/maps/1L74ZLGcvAaM3sP2A"
              target="_blank"
              rel="noreferrer"
              title="Ubicación Maria Liaño"
            >
              c/ Alfonso Rodríguez Castelao 5, 5ºA 15011 A Coruña (Spain)
            </a>
          </li>
          <li>
            <a
              href="http://www.eboracast.com/"
              target="_blank"
              rel="noreferrer"
              title="Página Web Maria Liaño"
            >
              <img
                src={eboracastIcon}
                alt="Pagina web de la representante de Ariadna Santana"
              />
            </a>
            <a
              href="http://www.eboracast.com/"
              target="_blank"
              rel="noreferrer"
              title="Página Web Maria Liaño"
            >
              www.eboracast.com
            </a>
          </li>
        </ul>
      </section>
      <section>
        <h4>Personal</h4>
        <p>Ariadna Santana</p>
        <ul>
          <li>
            <a
              href="mailto:ariadna.santana.actriz@gmail.com"
              title="E-Mail de Ariadna Santana"
            >
              <img
                src={emailIcon}
                alt="Correo electrónico de la representante de Ariadna Santana"
              />
            </a>
            <a
              href="mailto:ariadna.santana.actriz@gmail.com"
              title="E-Mail de Ariadna Santana"
            >
              ariadna.santana.actriz@gmail.com
            </a>
          </li>
          <li>
            <a
              title="https://www.youtube.com/channel/UCNSUM8TqclT7vDaZsEFPq1Q"
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/channel/UCNSUM8TqclT7vDaZsEFPq1Q"
            >
              <img src={youtubeIcon} alt="Mi canal de Youtube" />
            </a>
            <a
              title="https://www.youtube.com/channel/UCNSUM8TqclT7vDaZsEFPq1Q"
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/channel/UCNSUM8TqclT7vDaZsEFPq1Q"
            >
              Mi canal de Youtube
            </a>
          </li>
          <li>
            <a
              title="https://www.instagram.com/ariadna_santana/?hl=es"
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/ariadna_santana/?hl=es"
            >
              <img src={instagramIcon} alt="Mi Facebook" />
            </a>
            <a
              title="https://www.instagram.com/ariadna_santana/?hl=es"
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/ariadna_santana/?hl=es"
            >
              Mi Instagram
            </a>
          </li>
          <li>
            <a
              title="https://www.facebook.com/profile.php?id=100035365431992"
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/profile.php?id=100035365431992"
            >
              <img src={facebookIcon} alt="Mi Facebook" />
            </a>
            <a
              title="https://www.facebook.com/profile.php?id=100035365431992"
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/profile.php?id=100035365431992"
            >
              Mi Facebook
            </a>
          </li>
          <li>
            <a
              title="https://mobile.twitter.com/Ariadna_Santana/with_replies"
              target="_blank"
              rel="noreferrer"
              href="https://mobile.twitter.com/Ariadna_Santana/with_replies"
            >
              <img src={twitterIcon} alt="Mi Twitter" />
            </a>
            <a
              title="https://mobile.twitter.com/Ariadna_Santana/with_replies"
              target="_blank"
              rel="noreferrer"
              href="https://mobile.twitter.com/Ariadna_Santana/with_replies"
            >
              Mi Twitter
            </a>
          </li>
          <li>
            <a
              title="https://www.linkedin.com/in/ariadna-santana-b0679827?originalSubdomain=es"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/ariadna-santana-b0679827?originalSubdomain=es"
            >
              <img src={linkedinIcon} alt="Mi Linkedin" />
            </a>
            <a
              title="https://www.linkedin.com/in/ariadna-santana-b0679827?originalSubdomain=es"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/ariadna-santana-b0679827?originalSubdomain=es"
            >
              Mi Linkedin
            </a>
          </li>
          <li>
            <a
              title="https://www.imdb.com/name/nm5228269/bio?ref_=nm_ql_1"
              target="_blank"
              rel="noreferrer"
              href="https://www.imdb.com/name/nm5228269/bio?ref_=nm_ql_1"
            >
              <img src={imdbIcon} alt="Mi Imdb" />
            </a>
            <a
              title="https://www.imdb.com/name/nm5228269/bio?ref_=nm_ql_1"
              target="_blank"
              rel="noreferrer"
              href="https://www.imdb.com/name/nm5228269/bio?ref_=nm_ql_1"
            >
              Mi Imdb
            </a>
          </li>
          <li>
            <a
              title="https://aaag.gal/catalogo/ariadna-santana"
              target="_blank"
              rel="noreferrer"
              href="https://aaag.gal/catalogo/ariadna-santana"
            >
              <img src={aaagIcon} alt="Mi Aaag" />
            </a>
            <a
              title="https://aaag.gal/catalogo/ariadna-santana"
              target="_blank"
              rel="noreferrer"
              href="https://aaag.gal/catalogo/ariadna-santana"
            >
              Mi Aaag
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
};
export default ContactSection;
