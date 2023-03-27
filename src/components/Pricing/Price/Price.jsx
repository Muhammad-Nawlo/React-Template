import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import classes from './Price.module.css';

const Price = ({title, imgSrc, price, aspects, popular = false}) => {
    const aspectsDiv = aspects.map((aspect, index) => <div key={index}>
        <FontAwesomeIcon icon={faCheck} color="#2196f3" size='sm'/>{aspect}
    </div>)

    return <div className={classes.tmp__price}>
        {popular && <div className={classes.popular}>
            Most Popular
        </div>}
        <h2 className={classes.tmp__price_title}>{title}</h2>
        <div className={classes.tmp__price_img}>
            <img src={imgSrc} alt="price plan image"/>
        </div>
        <div className={classes['tmp__price-price']}>
            <p>${price}</p>
            <p>Per Month</p>
        </div>
        <div className={classes.tmp_price_aspects}>
            {aspectsDiv}
        </div>
        <div className={classes.tmp__price_choose}>
            <a href='/'> Choose Plan</a>
        </div>
    </div>
}
export default Price;