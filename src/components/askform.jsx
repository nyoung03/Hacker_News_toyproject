import { AskCard } from "./askCard";

export const AskForm = () => {
  return (
    <div className="askbox">
      <div className="subtitle">ASK</div>
      <ul className="asklist">
        <AskCard />
        <AskCard />
        <AskCard />
      </ul>
    </div>
  );
};
