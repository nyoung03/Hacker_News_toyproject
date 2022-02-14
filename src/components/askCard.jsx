import point_icon from "../imgs/point_icon.png";
import comment_icon from "../imgs/comment_icon.png";

export const AskCard = () => {
  return (
    <li className="askcard">
      <div className="ask_time time">3 min ago</div>
      <div className="askcontents">
        Where are you going to find long-form content online these days?
      </div>

      <div className="ask_id">idforstmeier</div>

      <div className="ask_plus plus">
        <img src={point_icon} alt="point" />
        <div className="point">97</div>

        <img src={comment_icon} alt="comment" />
        <div className="comment">100</div>
      </div>
    </li>
  );
};
