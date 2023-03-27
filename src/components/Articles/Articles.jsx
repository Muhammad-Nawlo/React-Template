import Heading from "../../global-components/Heading/Heading";
import Container from "../../Layout/Container";
import Article from "./Article/Article";

import art1Img from "../../assets/imgs/cat-01.jpg";
import art2Img from "../../assets/imgs/cat-02.jpg";
import art3Img from "../../assets/imgs/cat-03.jpg";
import art4Img from "../../assets/imgs/cat-04.jpg";
import art5Img from "../../assets/imgs/cat-05.jpg";
import art6Img from "../../assets/imgs/cat-06.jpg";
import art7Img from "../../assets/imgs/cat-07.jpg";
import art8Img from "../../assets/imgs/cat-08.jpg";

import classes from "./Articles.module.css";
const Articles = () => {
  return (
    <section className={classes.tmp__articles} id="articles">
      <Heading title="article" />
      <Container>
        <div className={classes.tmp__articles_items}>
          <Article
            title="Test Title"
            img={art1Img}
            link="/"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit"
          />
          <Article
            title="Test Title"
            img={art2Img}
            link="/"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit"
          />
          <Article
            title="Test Title"
            img={art3Img}
            link="/"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit"
          />
          <Article
            title="Test Title"
            img={art4Img}
            link="/"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit"
          />
          <Article
            title="Test Title"
            img={art5Img}
            link="/"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit"
          />
          <Article
            title="Test Title"
            img={art6Img}
            link="/"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit"
          />
          <Article
            title="Test Title"
            img={art7Img}
            link="/"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit"
          />
          <Article
            title="Test Title"
            img={art8Img}
            link="/"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit"
          />
        </div>
      </Container>
    </section>
  );
};

export default Articles;
