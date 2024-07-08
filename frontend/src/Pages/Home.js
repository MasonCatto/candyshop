import './Home.css';
import TopNavigation from '../Components/TopNavigation/NavigationLayout.js';
import AdContainer from '../Components/Advertisement/AdContainer.js';
import SelectionContainer from '../Components/SelectionContainer/SelectionNavigation.js';
import SearchContainer from '../Components/SearchContainer/SearchContainer.js';
import ItemContainer from '../Components/ItemContainer/ItemContainer.js';
import FooterContainer from '../Components/Footer/Footer.js';

export default function Home() {
  return (
    <div className="Layout-container">
        <TopNavigation />
        <SelectionContainer />
        <AdContainer />
        <SearchContainer />
        <ItemContainer />
        <FooterContainer/>
    </div>
  );
}

