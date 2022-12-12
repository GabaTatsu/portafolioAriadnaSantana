import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderMenu = ({ setContactShow }) => {
  const colorDefault = "rgb(255, 154, 108)";
  const [indexColor, setIndexColor] = useState("");
  const [seriesColor, setSeriesColor] = useState("");
  const [cineTvColor, setCineTvColor] = useState("");
  const [teatroColor, setTeatroColor] = useState("");
  const [musicaColor, setMusicaColor] = useState("");
  const [fotosColor, setFotosColor] = useState("");
  const [cvColor, setCvColor] = useState("");
  const [contactoColor, setContactoColor] = useState("");

  const menuColor = () => {
    if (window.location.href.indexOf("series") > -1) {
      setIndexColor("");
      setSeriesColor(colorDefault);
      setCineTvColor("");
      setTeatroColor("");
      setMusicaColor("");
      setFotosColor("");
      setCvColor("");
      setContactoColor("");
    } else if (window.location.href.indexOf("cinetv") > -1) {
      setIndexColor("");
      setSeriesColor("");
      setCineTvColor(colorDefault);
      setTeatroColor("");
      setMusicaColor("");
      setFotosColor("");
      setCvColor("");
      setContactoColor("");
    } else if (window.location.href.indexOf("teatro") > -1) {
      setIndexColor("");
      setSeriesColor("");
      setCineTvColor("");
      setTeatroColor(colorDefault);
      setMusicaColor("");
      setFotosColor("");
      setCvColor("");
      setContactoColor("");
    } else if (window.location.href.indexOf("musica") > -1) {
      setIndexColor("");
      setSeriesColor("");
      setCineTvColor("");
      setTeatroColor("");
      setMusicaColor(colorDefault);
      setFotosColor("");
      setCvColor("");
      setContactoColor("");
    } else if (window.location.href.indexOf("fotos") > -1) {
      setIndexColor("");
      setSeriesColor("");
      setCineTvColor("");
      setTeatroColor("");
      setMusicaColor("");
      setFotosColor(colorDefault);
      setCvColor("");
      setContactoColor("");
    } else if (window.location.href.indexOf("cv") > -1) {
      setIndexColor("");
      setSeriesColor("");
      setCineTvColor("");
      setTeatroColor("");
      setMusicaColor("");
      setFotosColor("");
      setCvColor(colorDefault);
      setContactoColor("");
    } else if (window.location.href.indexOf("contacto") > -1) {
      setIndexColor("");
      setSeriesColor("");
      setCineTvColor("");
      setTeatroColor("");
      setMusicaColor("");
      setFotosColor("");
      setCvColor("");
      setContactoColor(colorDefault);
    } else {
      setIndexColor(colorDefault);
      setSeriesColor("");
      setCineTvColor("");
      setTeatroColor("");
      setMusicaColor("");
      setFotosColor("");
      setCvColor("");
      setContactoColor("");
    }
  };

  window.addEventListener("load", () => {
    menuColor();
  });

  return (
    <ul>
      <li>
        <Link
          to="/"
          style={{ color: indexColor }}
          onClick={() => {
            setContactShow(true);
            setIndexColor(colorDefault);
            setSeriesColor("");
            setCineTvColor("");
            setTeatroColor("");
            setMusicaColor("");
            setFotosColor("");
            setCvColor("");
            setContactoColor("");
          }}
        >
          INICIO
        </Link>
      </li>
      <li>
        <Link
          to="/series"
          style={{ color: seriesColor }}
          onClick={() => {
            setContactShow(true);
            setIndexColor("");
            setSeriesColor(colorDefault);
            setCineTvColor("");
            setTeatroColor("");
            setMusicaColor("");
            setFotosColor("");
            setCvColor("");
            setContactoColor("");
          }}
        >
          SERIES
        </Link>
      </li>
      <li>
        <Link
          style={{ color: cineTvColor }}
          to="/cinetv"
          onClick={() => {
            setContactShow(true);
            setIndexColor("");
            setSeriesColor("");
            setCineTvColor(colorDefault);
            setTeatroColor("");
            setMusicaColor("");
            setFotosColor("");
            setCvColor("");
            setContactoColor("");
          }}
        >
          CINE/TV
        </Link>
      </li>
      <li>
        <Link
          style={{ color: teatroColor }}
          to="/teatro"
          onClick={() => {
            setContactShow(true);
            setIndexColor("");
            setSeriesColor("");
            setCineTvColor("");
            setTeatroColor(colorDefault);
            setMusicaColor("");
            setFotosColor("");
            setCvColor("");
            setContactoColor("");
          }}
        >
          TEATRO
        </Link>
      </li>
      <li>
        <Link
          to="/teatro"
          style={{ color: musicaColor }}
          onClick={() => {
            setContactShow(true);
            setIndexColor("");
            setSeriesColor("");
            setCineTvColor("");
            setTeatroColor("");
            setMusicaColor(colorDefault);
            setFotosColor("");
            setCvColor("");
            setContactoColor("");
          }}
        >
          MÚSICA
        </Link>
      </li>
      <li>
        <Link
          to="/fotos"
          style={{ color: fotosColor }}
          onClick={() => {
            setContactShow(true);
            setIndexColor("");
            setSeriesColor("");
            setCineTvColor("");
            setTeatroColor("");
            setMusicaColor("");
            setFotosColor(colorDefault);
            setCvColor("");
            setContactoColor("");
          }}
        >
          FOTOS
        </Link>
      </li>
      <li>
        <Link
          to="/cv"
          style={{ color: cvColor }}
          onClick={() => {
            setContactShow(true);
            setIndexColor("");
            setSeriesColor("");
            setCineTvColor("");
            setTeatroColor("");
            setMusicaColor("");
            setFotosColor("");
            setCvColor(colorDefault);
            setContactoColor("");
          }}
        >
          CV
        </Link>
      </li>
      <li>
        <Link
          to="/contacto"
          style={{ color: contactoColor }}
          onClick={() => {
            setContactShow(false);
            setIndexColor("");
            setSeriesColor("");
            setCineTvColor("");
            setTeatroColor("");
            setMusicaColor("");
            setFotosColor("");
            setCvColor("");
            setContactoColor(colorDefault);
          }}
        >
          CONTACTO
        </Link>
      </li>
    </ul>
  );
};
export default HeaderMenu;
