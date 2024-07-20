import './AdContainer.css';
import {Carousel} from '../../Utility/Carousel/Carousel.jsx';
// import adCarouselData from "../../Data/AdCarouselData.json";

function AdContainer() {
    // const { slides } = adCarouselData; 
    const slides = [
        {url: 'http://localhost:3000/candy.jpg', title: 'Candy'},
        {url: 'http://localhost:3000/candy2.jpg', title: 'Candy2'}
        // {url: 'http://localhost:3000/candy.jpg', title: 'Candy3'},
        // {url: 'http://localhost:3000/candy.jpg', title: 'Candy4'},
        // {url: 'http://localhost:3000/candy.jpg', title: 'Candy5'}
    ]
    return (
        <div className="Ad-container">
            <div className='Slide-container'>
                <Carousel data={slides} />
            </div>
        </div>
    );
}
export default AdContainer;