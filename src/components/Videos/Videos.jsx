import Heading from "../../global-components/Heading/Heading.jsx";
import Container from "../../Layout/Container.jsx";
import Video from "./Video/Video.jsx";
import imgPreviewSrc from '../../assets/imgs/video-preview.jpg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import classes from './Videos.module.css';
import {faRandom} from "@fortawesome/free-solid-svg-icons";

const Videos = () => {
    return <section className={classes['tmp__top-videos']} id='top-videos'>
        <Heading title='Top videos'/>
        <Container>
            <div className={classes['tmp__top-videos_content']}>
                <div className={classes['tmp__top-videos_content_videos']}>
                    <div className={classes['tmp__top-videos_content_videos_head']}>
                        Top Videos
                        <FontAwesomeIcon icon={faRandom} />
                    </div>
                    <Video title='How To Create Sub Domain' duration="05:25"/>
                    <Video title='Playing With The DNS' duration="04:16"/>
                    <Video title='Everything About The Virtual Hosts' duration="07:48"/>
                    <Video title='How To Monitor Your Website' duration="03:12"/>
                    <Video title='Uncharted Beating The Last Boss' duration="08:10"/>
                    <Video title='Ys Oath In Felghana Overview' duration="03:12"/>
                    <Video title='Ys Series All Games Ending' duration="08:10"/>
                </div>
                <div className={classes['tmp__top-videos_content_preview']}>
                    <img src={imgPreviewSrc} alt="preview image"/>
                    <p>Everything About The Virtual Hosts</p>
                </div>
            </div>
        </Container>
    </section>
}

export default Videos;