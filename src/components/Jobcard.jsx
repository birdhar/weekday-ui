import style from "./Style.module.css";

function Jobcard({ job }) {
  console.log(job);
  return (
    <div className={style.jobcard}>
      <div className={style.jobcardinfo}>
        <img src="/images/logo.png" alt="" />
        <div>
          <p>{job?.title}</p>
          <h6>{job?.company}</h6>
          {job?.experience > 1 ? (
            <p className={style.location}>
              {job?.location} | Exp: {job?.experience} years
            </p>
          ) : (
            <p className={style.location}>
              {job?.location} | Exp: {job?.experience} year
            </p>
          )}
        </div>
      </div>
      <div className={style.jobcardcontent}>
        <h4 className={style.descriptionheading}>Description</h4>
        <p className={style.description}>{job?.description}</p>
      </div>
    </div>
  );
}

export default Jobcard;
