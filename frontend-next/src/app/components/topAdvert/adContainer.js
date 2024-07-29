import styles from './adContainer.module.css';
import {Carousel} from '../../utility/carousel';

export default function AdContainer() {

    const slides = [
        {url: 'http://localhost:3000/candy.jpg', title: 'Candy'},
        {url: 'http://localhost:3000/candy2.jpg', title: 'Candy2'}
    ]

    return (
        <div className={styles.AdContainer}>
            <div className={styles.SlideContainer}>
                <Carousel data={slides} />
            </div>
        </div>
    );
}