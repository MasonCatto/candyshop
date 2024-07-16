import SelectionContainer from '../Components/SelectionContainer/SelectionNavigation.js';
import AdContainer from '../Components/Advertisement/AdContainer.js';
import SearchContainer from '../Components/SearchContainer/SearchContainer.js';
import ItemContainer from '../Components/ItemContainer/ItemContainer.js';
import LayoutManager from '../LayoutManager.js';

export default function Profile() {
  return (
    <LayoutManager>
        <SelectionContainer />
        <AdContainer />
        <SearchContainer />
        <ItemContainer />
    </LayoutManager>
  );
}

