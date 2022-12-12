import ContactSection from "../ContactSection";
import Developed from "../Developed";
import "./style.css";

const Footer = ({ contactShow }) => {
  return (
    <footer>
      {contactShow && (
        <>
          <h2>CONTACTO</h2>
          <ContactSection />
        </>
      )}

      <Developed />
    </footer>
  );
};
export default Footer;
