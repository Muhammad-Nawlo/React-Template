import Heading from "../../global-components/Heading/Heading";
import Container from "../../Layout/Container";
import memImg1 from "../../assets/imgs/team-01.jpg";
import memImg2 from "../../assets/imgs/team-02.jpg";
import memImg3 from "../../assets/imgs/team-03.jpg";
import memImg4 from "../../assets/imgs/team-04.jpg";
import memImg5 from "../../assets/imgs/team-05.png";
import memImg6 from "../../assets/imgs/team-06.png";
import memImg7 from "../../assets/imgs/team-07.jpg";
import memImg8 from "../../assets/imgs/team-08.jpg";
import Member from "./Member/Member";
import classes from "./Teams.module.css";
const Teams = () => {
  return (
    <section className={classes.tmp__teams}>
      <Heading title="Team Members" />
      <Container>
        <div className={classes.tmp__teams_items}>
          <Member imgSrc={memImg1} key="1" />
          <Member imgSrc={memImg2} key="2" />
          <Member imgSrc={memImg3} key="3" />
          <Member imgSrc={memImg4} key="4" />
          <Member imgSrc={memImg5} key="5" />
          <Member imgSrc={memImg6} key="6" />
          <Member imgSrc={memImg7} key="7" />
          <Member imgSrc={memImg8} key="8" />
        </div>
      </Container>
    </section>
  );
};

export default Teams;
