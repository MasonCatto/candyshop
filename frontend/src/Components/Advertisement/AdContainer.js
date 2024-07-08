import './AdContainer.css';
import Ad1 from '../../Assets/Advertisement/Ad1.jpg';
function AdContainer() {
    return (
        <div className="Ad-container">
            <div className="Ad-content">
                <img src={Ad1}/>
            </div>
        </div>
    )
}
export default AdContainer;