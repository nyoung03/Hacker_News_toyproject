import { NewCard } from "./newcard";

export const NewForm = () => {
  return (
    <div className="newbox">
      <div className="subtitle">NEW</div>
      <ul className="newlist">
        <NewCard />
        <NewCard />
        <NewCard />
      </ul>
    </div>
  );
};
