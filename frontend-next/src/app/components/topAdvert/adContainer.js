import styles from './adContainer.module.css';
// import {Carousel} from '../../utility/carousel';
// import adCarouselData from "../../Data/AdCarouselData.json";

export default function AdContainer() {
    // const { slides } = adCarouselData; 
    const slides = [
        {url: 'http://localhost:3000/candy.jpg', title: 'Candy'},
        {url: 'http://localhost:3000/candy2.jpg', title: 'Candy2'}
        // {url: 'http://localhost:3000/candy.jpg', title: 'Candy3'},
        // {url: 'http://localhost:3000/candy.jpg', title: 'Candy4'},
        // {url: 'http://localhost:3000/candy.jpg', title: 'Candy5'}
    ]
    return (
        <div className={styles.AdContainer}>
            <div className={styles.SlideContainer}>
                {/* <Carousel data={slides} /> */}
            </div>
        </div>
    );
}