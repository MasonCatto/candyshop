import styles from './searchBar.module.css';
// import SearchIcon from '../../Assets/SearchContainer/SearchIcon.svg';

export default function SearchBar() {
    return (
        <div className={styles.SearchContainer}>
                    <input className={styles.InputBar} type="text" placeholder="Find your candy..."></input>
                    <button className={styles.InputButton}>
                        {/* <img src={SearchIcon} alt="Search Icon" className="Search-icon"></img> */}
                    </button>
                
        </div>
    )
}
