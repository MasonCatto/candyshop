import './AdContainer.css';
import Ad1 from '../../Assets/Advertisement/Ad1.jpg';
function AdContainer() {
    return (
        <div className="Ad-container">
            <img className="Advert-image" src={Ad1}/>
            {/* <div className="Ad-content">
                <img className="Advert-image" src={Ad1}/>
            </div> */}
        </div>
    )
}
export default AdContainer;