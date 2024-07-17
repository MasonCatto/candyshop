// import './AdContainer.css';
import {Carousel} from '../../Utility/Carousel/Carousel.js';
import adCarouselData from "../../Data/AdCarouselData.json";

function AdContainer() {
    const { slides } = adCarouselData; // Access slides from the imported JSON object
    return (
        <div className="Ad-container">
            <Carousel data={slides} />
        </div>
    );
}
export default AdContainer;