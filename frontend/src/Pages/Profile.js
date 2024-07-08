import './Home.css';
import TopNavigation from '../Components/TopNavigation/NavigationLayout.js';
import SelectionContainer from '../Components/SelectionContainer/SelectionNavigation.js';
import FooterContainer from '../Components/Footer/Footer.js';

export default function Profile() {
  return (
    <div className="Layout-container">
        <TopNavigation />
        <SelectionContainer />
        <h2>profile</h2>
        <FooterContainer/>
    </div>
  );
}

