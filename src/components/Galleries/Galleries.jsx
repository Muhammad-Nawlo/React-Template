import Heading from "../../global-components/Heading/Heading";
import Container from "../../Layout/Container";
import Gallery from "./Gallery/Gallery";

import imgGal1 from "../../assets/imgs/gallery-01.png";
import imgGal2 from "../../assets/imgs/gallery-02.png";
import imgGal3 from "../../assets/imgs/gallery-03.jpg";
import imgGal4 from "../../assets/imgs/gallery-04.png";
import imgGal5 from "../../assets/imgs/gallery-05.jpg";
import imgGal6 from "../../assets/imgs/gallery-06.png";

import "./Galleries.css";
const Galleries = () => {
  return (
    <section className="tmp__galleries" id="gallery">
      <Heading title="gallery" />
      <Container>
        <div className="tmp__galleries_items">
          <Gallery imgSrc={imgGal1} />
          <Gallery imgSrc={imgGal2} />
          <Gallery imgSrc={imgGal3} />
          <Gallery imgSrc={imgGal4} />
          <Gallery imgSrc={imgGal5} />
          <Gallery imgSrc={imgGal6} />
        </div>
      </Container>
    </section>
  );
};

export default Galleries;
