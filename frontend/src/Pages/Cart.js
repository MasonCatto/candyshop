import './Home.css';
import TopNavigation from '../Components/TopNavigation/NavigationLayout.js';
import SelectionContainer from '../Components/SelectionContainer/SelectionNavigation.js';
import FooterContainer from '../Components/Footer/Footer.js';

export default function Cart() {
  return (
    <div className="Layout-container">
        <TopNavigation />
        <SelectionContainer />
        <FooterContainer/>
    </div>
  );
}

