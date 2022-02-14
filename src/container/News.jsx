import logo from "../imgs/logo.png";
import about from "../imgs/Vector.png";

export const News = () => {
  return (
    <div className="wrap">
      <div className="outline"></div>
      <header className="head">
        <img src={logo} alt="logo" className="logo" />
        <div className="title">Hacker News</div>
        <div className="about">
          <img src={about} alt="" />
        </div>
      </header>
      <div className="news_main"></div>
      <section></section>
    </div>
  );
};
