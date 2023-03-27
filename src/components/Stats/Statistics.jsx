import {
  faCode,
  faGlobeAsia,
  faMoneyBillAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "../../Layout/Container.jsx";
import Statistic from "./Statistic/Statistic.jsx";
import classes from "./Statistics.module.css";
const Statistics = () => {
  return (
    <section className={classes.tmp__statistics} id="statistics">
      <h2 className={classes.tmp__statistics_header}>our awesome statistics</h2>
      <Container>
        <div className={classes.tmp__statistics_content}>
          <Statistic
            key="1"
            icon={<FontAwesomeIcon icon={faUser} size="2x" />}
            number="150"
            title="Client"
          />
          <Statistic
            key="2"
            icon={<FontAwesomeIcon icon={faCode} size="2x" />}
            number="135"
            title="Projects"
          />
          <Statistic
            key="3"
            icon={<FontAwesomeIcon icon={faGlobeAsia} size="2x" />}
            number="50"
            title="Countries"
          />
          <Statistic
            key="4"
            icon={<FontAwesomeIcon icon={faMoneyBillAlt} size="2x" />}
            number="500"
            title="Money"
          />
        </div>
      </Container>
    </section>
  );
};

export default Statistics;
