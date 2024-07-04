import './NavigationLayout.css';
import WebsiteLogo from '../../Assets/TopNavigation/WebsiteLogo.png';
import CartIcon from '../../Assets/TopNavigation/CartIcon.svg';
function NavigationLayout() {
    return (
        <div className="Top-nav-container">
            {/* <div className="Reference-container"> */}
                <div className=""></div>
                <a href="/">
                    <img className='Top-nav-logo' src={WebsiteLogo} alt="logo"/>
                </a>
                    <div className="Top-nav-menu">
                        <ul>
                            <li>
                                <a href="/cart">
                                <img src={CartIcon}></img>
                                </a>
                                <a href="/profile">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            // </div>
    )
}
export default NavigationLayout;