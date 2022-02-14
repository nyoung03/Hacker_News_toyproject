import home_fill from "../imgs/home-fill.svg";
import news_non from "../imgs/news-non.svg";
import show_non from "../imgs/show-non.svg";
import ask_non from "../imgs/ask-non.svg";
import jobs_non from "../imgs/jobs-non.svg";

export const NavForm = () => {
  return (
    <nav className="nav_form">
      <ul className="nav_list">
        <li className="nav_page">
          <img src={home_fill} alt="home" />
        </li>
        <li className="nav_page">
          <img src={news_non} alt="news" />
        </li>
        <li className="nav_page">
          <img src={show_non} alt="show" />
        </li>
        <li className="nav_page">
          <img src={ask_non} alt="ask" />
        </li>
        <li className="nav_page">
          <img src={jobs_non} alt="jobs" />
        </li>
      </ul>
    </nav>
  );
};
