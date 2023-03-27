import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../../../global-components/Card/Card";
import classes from "./Person.module.css";
const Person = ({ name, imgSrc, job, description, rating }) => {
  let ratingStars = [];
  for (let index = 0; index < +rating; index++) {
    ratingStars[index] = (
      <FontAwesomeIcon icon={faStar} color="#ffc107" key={index} />
    );
  }
  return (
    <div className={classes.tmp__person}>
      <div className={classes["tmp__person-img"]}>
        <img src={imgSrc} alt="Person image" />
      </div>
      <Card>
        <h4 className={classes["tmp__person-name"]}>{name}</h4>
        <p className={classes["tmp__person-job"]}>{job}</p>
        <p className={classes["tmp__person-rating"]}>{ratingStars}</p>
        <p className={classes["tmp__person-description"]}>{description}</p>
      </Card>
    </div>
  );
};

export default Person;
