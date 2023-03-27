import Heading from "../../global-components/Heading/Heading";
import Container from "../../Layout/Container";
import Person from "./Person/Person";
import perImg1 from "../../assets/imgs/avatar-01.png";
import perImg2 from "../../assets/imgs/avatar-02.png";
import perImg3 from "../../assets/imgs/avatar-03.png";
import perImg4 from "../../assets/imgs/avatar-04.png";
import perImg5 from "../../assets/imgs/avatar-05.png";
import perImg6 from "../../assets/imgs/avatar-06.png";
import classes from "./Testimonials.module.css";
const Testimonials = () => {
  return (
    <section className={classes.tmp__testimonials} id="testimonials">
      <Heading title="Testimonials" />
      <Container>
        <div className={classes.tmp__testimonials_items}>
          <Person
            key="1"
            imgSrc={perImg1}
            name="Muhammad Nawlo"
            job="Full Stack Developer"
            rating="5"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat"
          />
          <Person
            key="2"
            imgSrc={perImg2}
            name="Shahed"
            job="Full Stack Developer"
            rating="3"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat"
          />
          <Person
            key="3"
            imgSrc={perImg3}
            name="Sally"
            job="Full Stack Developer"
            rating="3"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat"
          />

          <Person
            key="4"
            imgSrc={perImg4}
            name="Ahmad Nawlo"
            job="Full Stack Developer"
            rating="1"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat"
          />
          <Person
            key="5"
            imgSrc={perImg5}
            name="Hadeel Abdulrahman"
            job="AI Developer"
            rating="3"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat"
          />
          <Person
            key="6"
            imgSrc={perImg6}
            name="Rasha Nawlo"
            job="Full Stack Developer"
            rating="2"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat"
          />
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
