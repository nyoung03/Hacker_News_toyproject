import { TopCard } from "./topcard";

export const TopForm = () => {
  return (
    <div className="topbox">
      <div className="subtitle">TOP</div>
      <ul className="toplist">
        <TopCard />
        <TopCard />
        <TopCard />
      </ul>
    </div>
  );
};
