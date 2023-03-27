import classes from './Skills.module.css';
import Heading from "../../global-components/Heading/Heading.jsx";
import Container from "../../Layout/Container.jsx";
import imgSrc from '../../assets/imgs/skills.png'
import Skill from "./Skill/Skill.jsx";

const Skills = () => {
    return <section className={classes['tmp__our-skills']} id='our-skills'>
        <Heading title="Our skills"/>
        <Container>
            <div className={classes['tmp__our-skills_content']}>
                <div className={classes['tmp__our-skills_content-img']}>
                    <img src={imgSrc} alt="Skills image"/>
                </div>
                <div className={classes['tmp__our-skills_content-items']}>
                    <Skill title="HTML" percentage="80"/>
                    <Skill title="css" percentage="85"/>
                    <Skill title="javascript" percentage="70"/>
                    <Skill title="python" percentage="80"/>
                </div>
            </div>
        </Container>
    </section>

}
export default Skills;