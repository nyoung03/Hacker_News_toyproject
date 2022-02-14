import {
  RankerCard,
  RankerCardCat,
  RankerCardPig,
  RankerCardRabbit,
} from "./rankercard";

export const RankerForm = () => {
  return (
    <div className="rankbox">
      <div className="subtitle">Ranker</div>
      <ul className="ranklist">
        <RankerCardRabbit />
        <RankerCardPig />
        <RankerCardCat />
      </ul>
    </div>
  );
};
