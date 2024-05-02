import { useEffect, useRef, useState } from "react";
import FilterInput from "./FilterInput";
import style from "./Style.module.css";
import Jobcard from "./Jobcard";
import useFetchData from "../useFetchData";
import {
  locationoptions,
  experienceoptions,
  roleoptions,
  basepayoptions,
  remoteptions,
} from "../mockdata";

function AllJobs() {
  const [filters, setFilters] = useState({
    experience: "",
    basepay: "",
    location: "",
    remote: "",
    role: "",
  });

  const pageRef = useRef(null); // This ref element is created to observe the intersecting element
  const [page, setPage] = useState(1);

  const { data: jobs, loading, error } = useFetchData(page, 10); // The data is coming from the custom hook created to fetch api
  const [filteredJobs, setFilteredJobs] = useState([]);

  const handleIntersection = (entries) => {
    const entry = entries[0];

    if (entry?.isIntersecting) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    if (observer && pageRef?.current) {
      observer?.observe(pageRef?.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [filteredJobs]); // Intersection observer is used for infinite scrolling. Whenever user scrolls to the bottom it observes the element with ref=pageRef. It is intersecting, then page number will be increased and new data will be fetched

  useEffect(() => {
    if (jobs?.length) {
      setFilteredJobs(jobs);
    }
  }, [jobs]);

  const filtered = filteredJobs?.filter((job) => {
    //Each if conditions filter out job if the consition doesn't match
    if (filters?.location !== "" && job?.location !== filters?.location) {
      return false;
    }
    if (
      filters.role !== "" &&
      job?.jobRole.toLowerCase() !== filters.role.toLowerCase()
    ) {
      return false;
    }
    if (filters.experience && job?.minExp > filters.experience) {
      return false;
    }
    if (filters.basepay && job.maxExp && job.maxJdSalary < filters.basepay) {
      return false;
    }
    if (filters.remote && job.location !== filters.remote) {
      return false;
    }
    return true;
  }); // It filters the filteredJobs based on five valuesi filter state. Returns the job which passes all the conditions

  return (
    <div className={style.jobscontainer}>
      <h4 className={style.jobsheading}>Search Jobs</h4>

      <div className={style.filters}>
        <FilterInput
          type="text"
          reff="locationRef"
          value={filters.location}
          placeholder="Location"
          options={locationoptions}
          handleChange={(val, state) => {
            setFilters({ ...filters, location: state === "remove" ? "" : val });
          }}
        />

        <FilterInput
          reff="experienceRef"
          value={filters.experience}
          placeholder="Experience"
          handleChange={(val, state) => {
            setFilters({
              ...filters,
              experience: state === "remove" ? "" : parseInt(val),
            });
          }}
          type="number"
          options={experienceoptions}
        />
        <FilterInput
          value={filters.role}
          placeholder="Role or Tech Stack"
          handleChange={(val, state) => {
            setFilters({
              ...filters,
              role: state === "remove" ? "" : val,
            });
          }}
          type="text"
          reff="roleRef"
          options={roleoptions}
        />
        <FilterInput
          value={filters.basepay}
          placeholder="Min base pay"
          handleChange={(val, state) => {
            setFilters({
              ...filters,
              basepay: state === "remove" ? "" : parseInt(val),
            });
          }}
          reff="basepayRef"
          type="number"
          options={basepayoptions}
        />
        <FilterInput
          value={filters.remote}
          placeholder="Remote"
          handleChange={(val, state) => {
            setFilters({
              ...filters,
              remote: state === "remove" ? "" : val,
            });
          }}
          reff="remoterefRef"
          type="text"
          options={remoteptions}
        />
      </div>

      <div className={style.jobs}>
        {filtered?.map((job, index) => (
          <Jobcard key={index} job={job} />
        ))}
        <div className={style.ref} ref={pageRef}></div>
      </div>
    </div>
  );
}

export default AllJobs;
