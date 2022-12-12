import "./style.css";
import { Link } from "react-router-dom";
import NavSection from "../NavSection";
import HeaderMenu from "../HeaderMenu";

const header = ({ windowScrollY, setContactShow }) => {
  return (
    <header>
      <section>
        <Link to="/">
          <h2>Ariadna Santana</h2>
        </Link>

        <NavSection />
      </section>

      <menu
        style={{
          position: windowScrollY,
        }}
      >
        <HeaderMenu setContactShow={setContactShow} />
      </menu>
    </header>
  );
};
export default header;
