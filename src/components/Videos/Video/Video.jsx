import classes from './Video.module.css';

const Video = ({title, duration}) => {
    return <section className={classes.tmp__video}>
        <a href='#'>{title}</a>
        <p>{duration}</p>
    </section>
}
export default Video;