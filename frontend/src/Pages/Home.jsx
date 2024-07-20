import AdContainer from '../Components/Advertisement/AdContainer.jsx';
import SelectionContainer from '../Components/SelectionContainer/SelectionNavigation.jsx';
import SearchContainer from '../Components/SearchContainer/SearchContainer.jsx';
import ItemContainer from '../Components/ItemContainer/ItemContainer.jsx';

import LayoutManager from '../LayoutManager.jsx';
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