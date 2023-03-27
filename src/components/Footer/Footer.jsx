import {
  faFacebookF,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faClock,
  faMapMarkerAlt,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "../../Layout/Container.jsx";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.tmp__footer} id="footer">
      <Container>
        <div className={classes.tmp__footer_content}>
          <div className={classes.tmp__footer_content_social}>
            <h3>Template</h3>
            <div className={classes.tmp__footer_content_social_image}>
              <div className={classes["tmp__footer_social_image-facebook"]}>
                <FontAwesomeIcon icon={faFacebookF} />
              </div>
              <div className={classes["tmp__footer_social_image-twitter"]}>
                <FontAwesomeIcon icon={faTwitter} />
              </div>
              <div className={classes["tmp__footer_social_image-youtube"]}>
                <FontAwesomeIcon icon={faYoutube} />
              </div>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Temporibus nulla rem, dignissimos iste aspernatur
            </p>
          </div>
          <div className={classes.tmp__footer_content_links}>
            <ul>
              <li>
                <FontAwesomeIcon icon={faAngleDoubleRight} />
                <a href="#">Important Link 1</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faAngleDoubleRight} />
                <a href="#">Important Link 2</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faAngleDoubleRight} />
                <a href="#">Important Link 3</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faAngleDoubleRight} />
                <a href="#">Important Link 4</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faAngleDoubleRight} />
                <a href="#">Important Link 5</a>
              </li>
            </ul>
          </div>
          <div className={classes.tmp__footer_content_address}>
            <div>
              <FontAwesomeIcon icon={faMapMarkerAlt} size="2xl" />
              Egypt, Giza, Inside The Sphinx, Room Number 220
            </div>
            <div>
              <FontAwesomeIcon icon={faClock} size="2xl" />
              Business Hours: From 10:00 To 18:00
            </div>
            <div>
              <FontAwesomeIcon icon={faPhoneVolume} size="2xl" />
              +20123456789 +20198765432
            </div>
          </div>
        </div>
      </Container>
      <div>Made With Muhammad Nawlo</div>
    </footer>
  );
};

export default Footer;
