import Container from "../../Layout/Container";
import landingImg from "../../assets/imgs/landing-image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";

import "./Landing.css";
const Landing = () => {
  return (
    <>
      <section className="tmp__landing">
        <Container>
          <div className="tmp__landing_content_head">
            <h1>Welcome, This is Muhammad Nawlo</h1>
            <p>
              Here Iam gonna share everything about my life. Books Iam reading,
              Games Iam Playing, Stories and Events
            </p>
          </div>
          <div className="tmp__landing_content_img">
            <img src={landingImg} alt="Landing image" />
          </div>
        </Container>
      </section>
      <a href="#articles" className="arrow-icon">
        <FontAwesomeIcon icon={faAngleDoubleDown} size="2x" fontWeight="900" />
      </a>
    </>
  );
};

export default Landing;
