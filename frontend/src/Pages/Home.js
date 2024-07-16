import AdContainer from '../Components/Advertisement/AdContainer.js';
import SelectionContainer from '../Components/SelectionContainer/SelectionNavigation.js';
import SearchContainer from '../Components/SearchContainer/SearchContainer.js';
import ItemContainer from '../Components/ItemContainer/ItemContainer.js';

import LayoutManager from '../LayoutManager.js';
const HomePage = () => {
  return (
    <LayoutManager>
        <SelectionContainer />
        <AdContainer />
        <SearchContainer />
        <ItemContainer />
    </LayoutManager>
  );
}

export default HomePage;