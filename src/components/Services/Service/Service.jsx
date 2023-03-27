import classes from "./Service.module.css";

export const Service = ({ icon, title, link }) => {
  return (
    <div className={classes.tmp__service}>
      <div className={classes.tmp__service_icon}>{icon}</div>
      <h4 className={classes.tmp__service_title}>{title}</h4>
      <div className={classes.tmp__service_more}>
        <span className={classes["tmp__service_more-number"]}>01</span>
        <a href={link} className={classes["tmp__service_more-details"]}>
          Details
        </a>
      </div>
    </div>
  );
};
