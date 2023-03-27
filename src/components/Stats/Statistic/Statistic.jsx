import classes from './Statistic.module.css';

const Statistic = ({icon, number, title}) => {
    return <div className={classes.tmp__statistic}>
        <div className={classes.tmp__statistic_icon}>{icon}</div>
        <div className={classes.tmp__statistic_number}>{number}</div>
        <div className={classes.tmp__statistic_title}>{title}</div>
    </div>
}
export default Statistic;