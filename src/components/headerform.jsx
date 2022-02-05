import logo from "../imgs/logo.png";
import ham from "../imgs/Vector.png";

export const HeaderForm = () => {
  return (
    <>
      <div className="outline"></div>
      <header>
        <img src={logo} alt="logo" class="logo" />
        <div className="title">Hacker News</div>
        <a href="#" className="ham">
          <img src={ham} alt="" />
        </a>
      </header>
    </>
  );
};
