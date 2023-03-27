import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import Card from "../../../global-components/Card/Card";

import classes from "./Article.module.css";
const Article = ({ title, description, img, link }) => {
  return (
    <div className={classes.tmp__article}>
      <Card>
        <div className={classes.tmp__article_img}>
          <img src={img} alt="Article image" />
        </div>
        <div className={classes.tmp__article_body}>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
        <div className={classes["tmp__article_read-more"]}>
          <a href={link}>Learn more</a>
          <FontAwesomeIcon icon={faLongArrowAltRight} size="sm" />
        </div>
      </Card>
    </div>
  );
};

export default Article;
