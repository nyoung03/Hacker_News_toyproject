import arrow from "../imgs/arrow.svg";
import about_img from "../imgs/about_img.svg";
import "../css/about.css";
import "../css/common.css";

export const About = () => {
  return (
    <>
      <div className="outline"></div>
      <div className="about_header head">
        <img src={arrow} alt="arrow" className="arrow" />
        <div className="about_title title">Hello World!</div>
      </div>
      <div className="about_contents">
        <div className="about_intro">
          Hi, Developers. We are always trying to make good services. Thanks for
          coming and have a good day :)
        </div>
        <img src={about_img} alt="" className="about_img" />
        <div className="about_info">
          <div className="uxui_info">UX/UI design team: 신소영,최정윤</div>
          <div className="developer_info">
            Developer team: 권은서, 이장훈, 정윤재,조민지, 지은영
          </div>
          <div className="copyright">
            opyrights.2022. 2. HACKER NEWS. All rights reserved.
          </div>
        </div>
      </div>
    </>
  );
};
