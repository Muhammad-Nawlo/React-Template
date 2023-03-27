import Heading from "../../global-components/Heading/Heading.jsx";
import Container from "../../Layout/Container.jsx";
import imgSrc from '../../assets/imgs/work-steps.png'
import WorkStep from "./WorkStep/WorkStep.jsx";
import wsImg1 from '../../assets/imgs/work-steps-1.png';
import wsImg2 from '../../assets/imgs/work-steps-2.png';
import wsImg3 from '../../assets/imgs/work-steps-3.png';
import classes from './WorkSteps.module.css';

const WorkSteps = () => {
    return <section className={classes['tmp__work-steps']} id={'work-steps'}>
        <Heading title={"How it Works?"}/>
        <Container>
            <div className={classes['tmp__work-steps_content']}>
                <div className={classes['tmp__work-steps_content-img']}>
                    <img src={imgSrc} alt="work steps image"/>
                </div>
                <div className={classes['tmp__work-steps_content-items']}>
                    <WorkStep title="Business Analysis"
                              description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt obcaecati quisquam quis laborum recusandae debitis vel'
                              imgSrc={wsImg1}/>
                    <WorkStep title="Architecture"
                              description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt obcaecati quisquam quis laborum recusandae debitis vel'
                              imgSrc={wsImg2}/>
                    <WorkStep title="Development"
                              description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt obcaecati quisquam quis laborum recusandae debitis vel'
                              imgSrc={wsImg3}/>
                </div>
            </div>
        </Container>
    </section>
}
export default WorkSteps;