import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Member.module.css";
const Member = ({ imgSrc }) => {
  return (
    <div className={classes.tmp__member}>
      <div className={classes.tmp__member_content}>
        <div className={classes["tmp__member_content-img"]}>
          <div className={classes.overlay}></div>
          <img src={imgSrc} alt="member image" />
        </div>
        <div className={classes["tmp__member_content-social"]}>
          <FontAwesomeIcon icon={faFacebook} size="xl" />
          <FontAwesomeIcon icon={faTwitter} size="xl" />
          <FontAwesomeIcon icon={faLinkedin} size="xl" />
          <FontAwesomeIcon icon={faYoutube} size="xl" />
        </div>
      </div>
      <div className={classes.tmp__member_info}>
        <h3>Name</h3>
        <p>Simple Short Description</p>
      </div>
    </div>
  );
};

export default Member;
