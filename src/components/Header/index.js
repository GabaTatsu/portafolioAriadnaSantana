import "./style.css";
import { Link } from "react-router-dom";
import youtubeIcon from "../../assets/images/icoyoutube.png";
import instagramIcon from "../../assets/images/icoinstagram.png";
import facebookIcon from "../../assets/images/icofacebook.png";
import linkedinIcon from "../../assets/images/icolinkedin.png";
import twitterIcon from "../../assets/images/icotwitter.png";

const header = ({ windowScrollY }) => {
  return (
    <header>
      <section>
        <Link to="/">
          <h2>Ariadna Santana</h2>
        </Link>

        <nav>
          <li>
            <a
              title="Mi canal de Youtube"
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/channel/UCNSUM8TqclT7vDaZsEFPq1Q"
            >
              <img width="20px" src={youtubeIcon} alt="Mi canal de Youtube" />
            </a>
          </li>
          <li>
            <a
              title="Mi Instagram"
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/ariadna_santana/?hl=es"
            >
              <img width="20px" src={instagramIcon} alt="Mi Facebook" />
            </a>
          </li>
          <li>
            <a
              title="Mi Facebook"
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/profile.php?id=100035365431992"
            >
              <img width="20px" src={facebookIcon} alt="Mi Facebook" />
            </a>
          </li>
          <li>
            <a
              title="Mi Twitter"
              target="_blank"
              rel="noreferrer"
              href="https://mobile.twitter.com/Ariadna_Santana/with_replies"
            >
              <img width="20px" src={twitterIcon} alt="Mi Twitter" />
            </a>
          </li>
          <li>
            <a
              title="Mi Linkedin"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/ariadna-santana-b0679827?originalSubdomain=es"
            >
              <img width="20px" src={linkedinIcon} alt="Mi Linkedin" />
            </a>
          </li>
        </nav>
      </section>

      <menu
        style={{
          position: windowScrollY,
        }}
      >
        <li>
          <Link to="/">INICIO</Link>
        </li>
        <li>
          <Link to="/series">SERIES</Link>
        </li>
        <li>
          <Link to="/cinetv">CINE/TV</Link>
        </li>
        <li>
          <Link to="/teatro">TEATRO</Link>
        </li>
        <li>
          <Link to="/teatro">MÚSICA</Link>
        </li>
        <li>
          <Link to="/fotos">FOTOS</Link>
        </li>
        <li>
          <a href="#">CV</a>
        </li>
        <li>
          <a href="#">CONTACTO</a>
        </li>
      </menu>
    </header>
  );
};
export default header;
