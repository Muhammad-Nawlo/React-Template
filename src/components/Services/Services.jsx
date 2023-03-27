import {
  faBullhorn,
  faLaptopCode,
  faMapMarkedAlt,
  faPallet,
  faTools,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heading from "../../global-components/Heading/Heading";
import Container from "../../Layout/Container";
import { Service } from "./Service/Service";
import classes from "./Services.module.css";
const Services = () => {
  return (
    <section className={classes.tmp__services} id="services">
      <Heading title="Services" />
      <Container>
        <div className={classes.tmp__services_items}>
          <Service
            key="1"
            icon={<FontAwesomeIcon icon={faUserShield} size="4x" />}
            title="Security"
            link="/"
          />
          <Service
            key="2"
            icon={<FontAwesomeIcon icon={faTools} size="4x" />}
            title="Fixing Issues"
            link="/"
          />
          <Service
            key="3"
            icon={<FontAwesomeIcon icon={faMapMarkedAlt} size="4x" />}
            title="Location"
            link="/"
          />
          <Service
            key="4"
            icon={<FontAwesomeIcon icon={faLaptopCode} size="4x" />}
            title="Coding"
            link="/"
          />
          <Service
            key="5"
            icon={<FontAwesomeIcon icon={faPallet} size="4x" />}
            title="Location"
            link="/"
          />
          <Service
            key="6"
            icon={<FontAwesomeIcon icon={faBullhorn} size="4x" />}
            title="Location"
            link="/"
          />
        </div>
      </Container>
    </section>
  );
};

export default Services;
