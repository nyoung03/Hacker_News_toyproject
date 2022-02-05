import home from "../imgs/home.png";
import news from "../imgs/news.png";
import show from "../imgs/show.png";
import ask from "../imgs/ask.png";
import jobs from "../imgs/jobs.png";

export const NavForm = () => {
  return (
    <nav className="nav_form">
      <ul className="nav_list">
        <li className="nav_page">
          <img src={home} alt="home" />
        </li>
        <li className="nav_page">
          <img src={news} alt="news" />
        </li>
        <li className="nav_page">
          <img src={show} alt="show" />
        </li>
        <li className="nav_page">
          <img src={ask} alt="ask" />
        </li>
        <li className="nav_page">
          <img src={jobs} alt="jobs" />
        </li>
      </ul>
    </nav>
  );
};
