import Heading from "../../global-components/Heading/Heading";
import Container from "../../Layout/Container";
import Feature from "./Feature/Feature";
import imgFeature1 from "../../assets/imgs/features-01.jpg";
import imgFeature2 from "../../assets/imgs/features-02.jpg";
import imgFeature3 from "../../assets/imgs/features-03.jpg";
import "./Features.css";
const Features = () => {
  return (
    <section className="tmp__features" id="features">
      <Heading title="features" />
      <Container>
        <div className="tmp__features_items">
          <Feature
            imgSrc={imgFeature1}
            title="Quality"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima"
            link="/"
            type="1"
          />
          <Feature
            imgSrc={imgFeature2}
            title="Time"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima"
            link="/"
            type="2"
          />
          <Feature
            imgSrc={imgFeature3}
            title="Passion"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima"
            link="/"
            type="3"
          />
        </div>
      </Container>
    </section>
  );
};

export default Features;
