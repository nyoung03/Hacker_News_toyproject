import { JobsCard } from "./jobscard";

export const JobsForm = () => {
  return (
    <div className="jobsbox">
      <div className="subtitle">JOBS</div>
      <ul className="jobslist">
        <JobsCard />
        <JobsCard />
        <JobsCard />
      </ul>
    </div>
  );
};
