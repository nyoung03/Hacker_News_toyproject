import logo from "../imgs/logo.png";
import about from "../imgs/Vector.png";
import { Link, Router, Switch } from "react-router-dom";

export const HeaderForm = () => {
  return (
    <>
      <div className="outline"></div>
      <header className="head">
        <img src={logo} alt="logo" className="logo" />
        <div className="title">Hacker News</div>
        <div className="about">
          <img src={about} alt="" />
        </div>
      </header>
    </>
  );
};
