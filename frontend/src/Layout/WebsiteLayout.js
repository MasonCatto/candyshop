import './WebsiteLayout.css';
import TopNavigation from './TopNavigation/NavigationLayout.js';
import AdContainer from './Advertisement/AdContainer.js';
import SelectionContainer from './SelectionContainer/SelectionNavigation.js';
import SearchContainer from './SearchContainer/SearchContainer.js';
import ItemContainer from './ItemContainer/ItemContainer.js';
function WebsiteLayout() {
  return (
    <div className="Layout-container">
        <TopNavigation />
        <SelectionContainer />
        <AdContainer />
        <SearchContainer />
        <ItemContainer />
    </div>
  );
}

export default WebsiteLayout;
