import "./style.css";
import YoutubeEmbed from "../YoutubeEmbed";

const VideoReels = () => {
  return (
    <article className="youtubereels">
      <YoutubeEmbed embedId="-lV_YDTibUQ" title="CINE" />
      <YoutubeEmbed embedId="wYnZfVrlS30" title="TELEVISIÓN" />
      <YoutubeEmbed embedId="lF23E1_nn5Q" title="WEB" />
      <YoutubeEmbed embedId="fLcrofSDPbQ" title="CORPORATIVOS" />
    </article>
  );
};
export default VideoReels;
