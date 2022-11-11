import VideoList from "../../components/VideoList";
import filmData from "../../db/filmData";

const CineTv = () => {
  return (
    <>
      <h2>LARGOMETRAJES</h2>
      <VideoList videoData={filmData} />
    </>
  );
};
export default CineTv;
