import SelectionContainer from '../Components/SelectionContainer/SelectionNavigation.jsx';
import AdContainer from '../Components/Advertisement/AdContainer.jsx';
import SearchContainer from '../Components/SearchContainer/SearchContainer.jsx';
import ItemContainer from '../Components/ItemContainer/ItemContainer.jsx';
import LayoutManager from '../LayoutManager.jsx';

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

