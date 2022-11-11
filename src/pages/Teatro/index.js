import VideoList from "../../components/VideoList";
import theaterData from "../../db/theaterData";

const Teatro = () => {
  return (
    <>
      <h2>TEATRO</h2>
      <VideoList videoData={theaterData} />
    </>
  );
};
export default Teatro;
