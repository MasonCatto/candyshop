import './searchBar.css';
// import SearchIcon from '../../Assets/SearchContainer/SearchIcon.svg';

export default function SearchBar() {
    return (
        <div className="Search-container">
                    <input className="Input-bar" type="text" placeholder="Find your candy..."></input>
                    <button className="Input-button">
                        {/* <img src={SearchIcon} alt="Search Icon" className="Search-icon"></img> */}
                    </button>
                
        </div>
    )
}
