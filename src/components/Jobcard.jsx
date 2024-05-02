import { useState } from "react";
import style from "./Style.module.css";

function Jobcard({ job }) {
  const [seeMore, setSeeMore] = useState(false);

  // Here I have used  static image and random company name because I could not find it in the api data.

  return (
    <div className={style.jobcard}>
      <div className={style.jobcardinfo}>
        <img src="/images/logo.png" alt="" />
        <div>
          <p className={style.jobcompany}>
            {" "}
            {job?.companyName || "Random Company"}
          </p>
          <h6 className={style.jobrole}>{job?.jobRole}</h6>

          <p className={style.location}>
            {job?.location} | Exp: {job?.minExp}-{job?.maxExp}{" "}
            {job?.minExp && job?.maxExp && "years"}
          </p>
        </div>
      </div>
      <div className={style.jobcardcontent}>
        <h4 className={style.descriptionheading}>Description</h4>
        <p className={style.description}>
          {job?.jobDetailsFromCompany?.length > 400 && !seeMore
            ? job?.jobDetailsFromCompany?.slice(0, 400)
            : job?.jobDetailsFromCompany?.length > 400 && seeMore
            ? job?.jobDetailsFromCompany
            : job?.jobDetailsFromCompany}
        </p>
      </div>

      <div className={style.floatdiv}>
        {job?.jobDetailsFromCompany?.length > 400 && (
          <button
            className={`${style.viewjob} ${style.seemore}`}
            onClick={() => setSeeMore(!seeMore)}
          >
            {seeMore ? "See Less" : "See More"}
          </button>
        )}

        <a href="" className={style.viewjob}>
          View Job
        </a>
      </div>

      <div className={style.jobcardinfo}>
        <div>
          <p className={style.jobcompany}>Minimum Experience</p>
          <h6 className={style.jobrole}>
            {" "}
            {job?.minExp} {job?.minExp > 1 ? "Years" : "Year"}
          </h6>
        </div>
      </div>

      <div className={style.applybtn}>⚡ Easy Apply</div>
    </div>
  );
}

export default Jobcard;
