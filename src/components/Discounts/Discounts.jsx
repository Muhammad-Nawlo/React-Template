import imgSrc from "../../assets/imgs/discount.png";
import classes from "./Discounts.module.css";
const Discounts = () => {
  return (
    <section className={classes.tmp__discounts} id="discount">
      <div className={classes.tmp__discounts_info}>
        <h3>We Have A Discount</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
          asperiores consectetur, recusandae ratione provident necessitatibus,
          cumque delectus commodi fuga praesentium beatae. Totam vel similique
          laborum dicta aperiam odit doloribus corporis.
        </p>
        <div className={classes.tmp__discounts_info_img}>
          <img src={imgSrc} alt="" />
        </div>
      </div>
      <div className={classes.tmp__discounts_form}>
        <h3>Request A Discount</h3>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="text" placeholder="Your Phone" />
          <textarea
            cols="30"
            rows="10"
            placeholder="Tell Us About Your Needs"
          ></textarea>
          <input type="submit" value="Send" />
        </form>
      </div>
    </section>
  );
};

export default Discounts;
