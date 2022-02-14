import rabbit from "../imgs/rabbit.svg";
import pig from "../imgs/pig.svg";
import cat from "../imgs/cat.svg";

export const RankerCardRabbit = () => {
  return (
    <li className="rankcard">
      <div className="ranker_id">idmyname</div>
      <img src={rabbit} alt="rankercard" />
    </li>
  );
};

export const RankerCardPig = () => {
  return (
    <li className="rankcard">
      <div className="ranker_id">idmyname</div>
      <img src={pig} alt="rankercard" />
    </li>
  );
};

export const RankerCardCat = () => {
  return (
    <li className="rankcard">
      <div className="ranker_id">idmyname</div>
      <img src={cat} alt="rankercard" />
    </li>
  );
};
