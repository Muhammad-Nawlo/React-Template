import Heading from "../../global-components/Heading/Heading.jsx";
import Container from "../../Layout/Container.jsx";
import imgSrc from '../../assets/imgs/events.png';
import classes from './Events.module.css';

const Events = () => {
    return <section className={classes.tmp__events} id='events'>
        <div className={`${classes.dots} ${classes['dots-up']}`}></div>
        <div className={`${classes.dots} ${classes['dots-down']}`}></div>
        <Heading title='Latest events'/>
        <Container>
            <div className={classes.tmp__events_content}>
                <div className={classes['tmp__events_content_img']}>
                    <img src={imgSrc} alt="Event image"/>
                </div>
                <div className={classes['tmp__events_content_info']}>
                    <div className={classes['tmp__events_content_info_date']}>
                        <div className={classes.tmp__events_content_info_date_item}>
                            <div>0-68</div>
                            <div>Days</div>
                        </div>
                        <div className={classes.tmp__events_content_info_date_item}>
                            <div>0-68</div>
                            <div>Hours</div>
                        </div>
                        <div className={classes.tmp__events_content_info_date_item}>
                            <div>0-68</div>
                            <div>Minutes</div>
                        </div>
                        <div className={classes.tmp__events_content_info_date_item}>
                            <div>0-68</div>
                            <div>Seconds</div>
                        </div>
                    </div>
                    <h4>Tech Masters Event 2021</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero tenetur doloremque iusto ut
                        adipisci quam ratione aliquam excepturi nulla in harum, veritatis porro</p>
                </div>
            </div>
            <div className={classes.tmp__events_input}>
                <form action="">
                    <input type="email" placeholder='Enter Your Email'/>
                    <input type='submit' value='Subscribe'/>
                </form>

            </div>

        </Container>
    </section>
}
export default Events;