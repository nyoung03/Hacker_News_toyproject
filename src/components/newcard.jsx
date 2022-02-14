import point_icon from "../imgs/point_icon.png";
import comment_icon from "../imgs/comment_icon.png";

export const NewCard = () => {
  return (
    <li className="newcard">
      <div className="new_time time">10 min ago</div>
      <div className="newcontents">
        IUMA (Internet Underground Music Archive) Collection A...
      </div>
      <div className="new_plus plus">
        <img src={point_icon} alt="" />
        <div className="point">97</div>

        <img src={comment_icon} alt="" />
        <div className="comment">100</div>
      </div>
    </li>
  );
};
