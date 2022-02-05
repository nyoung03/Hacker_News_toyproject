import { HeaderForm } from "../components/headerform";
import { NavForm } from "../components/navform";
import { RankerForm } from "../components/rankerform";
import { TopForm } from "../components/topform";
import { NewForm } from "../components/newform";
import { ShowForm } from "../components/showform";
import { AskForm } from "../components/askform";
import { JobsForm } from "../components/jobform";
import "../css/Home.css";

export const Home = () => {
  return (
    <div className="wrapper">
      <HeaderForm />
      <NavForm />
      <RankerForm />
      <TopForm />
      <NewForm />
      <ShowForm />
      <AskForm />
      <JobsForm />
    </div>
  );
};
