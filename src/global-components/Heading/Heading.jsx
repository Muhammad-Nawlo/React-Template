import classes from "./Heading.module.css";
const Heading = ({ title }) => {
  return <h2 className={classes.heading}>{title}</h2>;
};

export default Heading;
