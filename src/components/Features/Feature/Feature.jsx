import classes from "./Feature.module.css";
const Feature = ({ title, description, imgSrc, link, type }) => {
  const overlayClass =
    type == 1
      ? classes["quality-background-img"]
      : type == 2
      ? classes["time-background-img"]
      : classes["passion-background-img"];

  const borderColor =
    type == 1
      ? classes["quality-border-color"]
      : type == 2
      ? classes["time-border-color"]
      : classes["passion-border-color"];
  const color =
    type == 1
      ? classes["quality-btn-color"]
      : type == 2
      ? classes["time-btn-color"]
      : classes["passion-btn-color"];

  return (
    <div className={classes.tmp__feature}>
      <div className={classes.tmp__feature_img}>
        <div className={`${classes.overlay} ${overlayClass}`}></div>
        <img src={imgSrc} alt="Feature image" />
      </div>
      <div className={classes.tmp__feature_body}>
        <h3 className={`${borderColor}`}>{title}</h3>
        <p>{description}</p>
      </div>
      <div className={classes.tmp__feature_more}>
        <a href={link} className={color}>
          More
        </a>
      </div>
    </div>
  );
};

export default Feature;
