import "./style.css";

const VideoList = ({ videoData }) => {
  return (
    <ul className="listavideos">
      {videoData.map(({ title, character, cover, html, year }, index) => {
        return (
          <li key={index}>
            <a href={html} target="_blank" rel="noreferrer">
              <img src={cover} key={index} alt={title}></img>
            </a>
            <div>
              <h4>{title}</h4>
              <p>
                {character}, {year}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
export default VideoList;
