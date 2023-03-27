import classes from './Skill.module.css'

const Skill = ({title, percentage}) => {

    const style = {
        width: percentage + "%"
    }
    return <div className={classes.tmp__skill}>
        <div className={classes.tmp__skill_info}>
            <span>{title}</span>
            <span>{percentage}%</span>
        </div>
        <div className={classes['tmp__skill_progress-bar']}>
            <div style={style}></div>
        </div>
    </div>
}
export default Skill;