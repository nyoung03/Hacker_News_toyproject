import point_icon from "../imgs/point_icon.png";
import comment_icon from "../imgs/comment_icon.png";

export const TopCard = () => {
  return (
    <li className="topcard">
      <div className="top_ranking">1</div>
      <div className="top_time time">7 hours ago</div>
      <div className="topcontents">
        Huginn: System for building agents that perform automated tasks online
      </div>
      <div className="top_plus plus">
        <img src={point_icon} alt="" />
        <div className="point">97</div>

        <img src={comment_icon} alt="" />
        <div className="comment">100</div>
      </div>
      <div className="top_nav">
        <div className="top_userid">idcaseyf7</div>
      </div>
    </li>
  );
};
