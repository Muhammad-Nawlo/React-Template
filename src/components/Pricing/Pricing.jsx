import Heading from "../../global-components/Heading/Heading.jsx";
import Container from "../../Layout/Container.jsx";
import Price from "./Price/Price.jsx";
import basicImgSrc from '../../assets/imgs/hosting-basic.png'
import advancedImgSrc from '../../assets/imgs/hosting-advanced.png';
import professionalImgSrc from '../../assets/imgs/hosting-professional.png';
import classes from './Pricing.module.css';

const Pricing = () => {
    return <section className={classes.tmp__pricing} id='pricing'>
        <Heading title='Pricing plans'/>
        <Container>
            <div className={classes.tmp__pricing_items}>
                <Price
                    title='Basic'
                    imgSrc={basicImgSrc}
                    price="15"
                    aspects={['10GB HDD Space', '5 Email Addresses', '2 Subdomains', '4 Databases', 'Basic Support']}
                />
                <Price
                    title='Advanced'
                    imgSrc={advancedImgSrc}
                    price="25"
                    aspects={['20GB HDD Space', '10 Email Addresses', '5 Subdomains', '8 Databases', 'Advanced Support']}
                    popular={true}
                />
                <Price
                    title='Professional'
                    imgSrc={professionalImgSrc}
                    price="45"
                    aspects={['50GB HDD Space', '20 Email Addresses', '10 Subdomains', '20 Databases', 'Professional Support']}
                />
            </div>
        </Container>
    </section>
}

export default Pricing;
