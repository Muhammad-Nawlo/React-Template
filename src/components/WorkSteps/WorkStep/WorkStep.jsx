import classes from './WorkStep.module.css';

const WorkStep = ({imgSrc, title, description}) => {
    return <div className={classes['tmp__work-step']}>
        <div className={classes['tmp__work-step-img']}>
            <img src={imgSrc} alt="work step image"/>
        </div>
        <div className={classes['tmp__work-step-info']}>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    </div>
}
export default WorkStep;