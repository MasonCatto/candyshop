import styles from './searchBar.module.css';
import {useRef}  from 'react';
import DropdownMenu from './../../utility/dropdown/dropdown';
export default function SearchBar() {
    let menuRef = useRef();


    return (
        <div ref={menuRef} className={styles.SearchContainer} >
            <DropdownMenu passDropdownClass={styles.dropdownMenu} buttonClass={styles.filter} ref={menuRef} />
            <div className={styles.container}>
                    <input className={styles.InputBar} type="text" placeholder="Find your candy..."></input>
                    <button className={styles.InputButton}>
                        {/* <img src={SearchIcon} alt="Search Icon" className="Search-icon"></img> */}
                    </button>
            </div>    
        </div>
    )

}
