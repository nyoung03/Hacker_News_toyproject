import { ShowCard } from "./showcard";

export const ShowForm = () => {
  return (
    <div className="showbox">
      <div className="subtitle">SHOW</div>
      <ul className="showlist">
        <ShowCard />
        <ShowCard />
        <ShowCard />
      </ul>
    </div>
  );
};
