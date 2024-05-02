import { useState } from "react";
import FilterInput from "./FilterInput";
import style from "./Style.module.css";
import useGetJobs from "../useGetJobs";
import Jobcard from "./Jobcard";

function AllJobs() {
  const [filters, setFilters] = useState({
    experience: null,
    company: "",
    location: "",
    remote: null,
  });
  const [page, setPage] = useState(1);
  const jobs = useGetJobs(page, 10);

  return (
    <div className={style.jobscontainer}>
      <h4 className={style.jobsheading}>Search Jobs</h4>

      <div className={style.filters}>
        <FilterInput
          value={filters.company}
          placeholder="Company Name"
          handleChange={(e) =>
            setFilters({ ...filters, company: e.target.value })
          }
          type="text"
        />
        <FilterInput
          value={filters.location}
          placeholder="Location"
          handleChange={(e) =>
            setFilters({ ...filters, location: e.target.value })
          }
          type="text"
        />

        <FilterInput
          value={filters.experience}
          placeholder="Experience"
          handleChange={(e) =>
            setFilters({ ...filters, experience: parseInt(e.target.value) })
          }
          type="number"
        />
        <FilterInput
          value={filters.remote}
          placeholder="Remote"
          handleChange={(e) =>
            setFilters({ ...filters, remote: e.target.value })
          }
          type="select"
        />
      </div>

      <div className={style.jobs}>
        {jobs?.map((job) => (
          <Jobcard key={Math.floor(Math.random * 100)} job={job} />
        ))}
      </div>
    </div>
  );
}

export default AllJobs;
