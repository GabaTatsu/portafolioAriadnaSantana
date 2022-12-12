import youtubeIcon from "../../assets/images/icoyoutube.png";
import instagramIcon from "../../assets/images/icoinstagram.png";
import facebookIcon from "../../assets/images/icofacebook.png";
import linkedinIcon from "../../assets/images/icolinkedin.png";
import twitterIcon from "../../assets/images/icotwitter.png";

const NavSection = () => {
  return (
    <nav>
      <ul>
        <li>
          <a
            title="Mi canal de Youtube"
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/channel/UCNSUM8TqclT7vDaZsEFPq1Q"
          >
            <img src={youtubeIcon} alt="Mi canal de Youtube" />
          </a>
        </li>
        <li>
          <a
            title="Mi Instagram"
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/ariadna_santana/?hl=es"
          >
            <img src={instagramIcon} alt="Mi Facebook" />
          </a>
        </li>
        <li>
          <a
            title="Mi Facebook"
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/profile.php?id=100035365431992"
          >
            <img src={facebookIcon} alt="Mi Facebook" />
          </a>
        </li>
        <li>
          <a
            title="Mi Twitter"
            target="_blank"
            rel="noreferrer"
            href="https://mobile.twitter.com/Ariadna_Santana/with_replies"
          >
            <img src={twitterIcon} alt="Mi Twitter" />
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
      </ul>
    </nav>
  );
};
export default NavSection;
