import point_icon from "../imgs/point_icon.png";
import comment_icon from "../imgs/comment_icon.png";
import girraffe from "../imgs/girraffe.png";

export const ShowCard = () => {
  return (
    <li className="showcard">
      <div className="show_time time">3 min ago</div>
      <div className="showcontents">
        Shoot the neural network before it shoots you ...
      </div>
      <div className="profile">
        <img src={girraffe} alt="" />
        <div className="show_id">idforstmeier</div>
      </div>
      <div className="show_plus plus">
        <img src={point_icon} alt="point" />
        <div className="point">97</div>

        <img src={comment_icon} alt="comment" />
        <div className="comment">100</div>
      </div>
    </li>
  );
};
