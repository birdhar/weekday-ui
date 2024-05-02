import { jobs } from "./mockdata";
import { useState, useEffect } from "react";

function useGetJobs(pageNumber, pageSize) {
  const [pageData, setPageData] = useState([]);

  useEffect(() => {
    const startIndex = (pageNumber - 1) * pageSize + 1;
    const endIndex = startIndex + pageSize - 1;
    const newData = [];

    for (let i = startIndex; i <= endIndex; i++) {
      newData.push(jobs[i]); // Assuming jobs function returns data for a specific job
    }

    setPageData(newData);
  }, [pageNumber, pageSize]);

  return pageData;
}

export default useGetJobs;
