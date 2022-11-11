import VideoList from "../../components/VideoList";
import seriesData from "../../db/seriesData";

const Series = () => {
  return (
    <>
      <h2>SERIES</h2>
      <VideoList videoData={seriesData} />
    </>
  );
};
export default Series;
