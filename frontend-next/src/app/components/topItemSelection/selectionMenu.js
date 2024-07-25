import {useState, useEffect, useRef} from 'react';
import styles from'./selectionMenu.module.css'
// import MenuIcon from '../../Assets/SelectionContainer/SelectionMenu.svg';


export default function SelectionMenu() {
    
    const [open,setOpen] = useState(false);

    let menuRef = useRef();

    //click outside the dropdown menu to close it
    useEffect(()=>{
        let handler = (e)=>{
            if(!menuRef.current.contains(e.target)){
            setOpen(false);
            }
        }
        document.addEventListener("mousedown",handler)

    });

    return (
        <div className={styles.ProductSelectionContainer} ref={menuRef}>
            <div className={styles.ProductSelection}>
                <DropdownItem text={"ALL ITEMS"} href={"/allitems"} class={styles.ListItem}/>
                <DropdownItem text={"DRINKS"} href={"/allitems"} class={styles.ListItem}/>
                <DropdownItem text={"SWEETS"} href={"/allitems"} class={styles.ListItem}/>
                <DropdownItem text={"SNACKS"} href={"/allitems"} class={styles.ListItem}/>
                <DropdownItem text={"FOOD"} href={"/allitems"} class={styles.ListItem}/>
                <DropdownItem text={"BUNDLES"} href={"/allitems"} class={styles.ListItem}/>
            </div>
            <button className={styles.MenuTrigger} onClick={()=>{setOpen(!open)}}>
                    {/* <img src={MenuIcon} alt="Menu Icon" className="Menu-icon"/> */}
            </button>

            <div className={`${styles.DropdownMenu} ${open ? styles.active : styles.inactive}`}>
                    <ul>
                        <DropdownItem text={"ALL ITEMS"} href={"/allitems"} class={styles.DropdownItem}/>
                        <DropdownItem text={"DRINKS"} href={"/allitems"} class={styles.DropdownItem}/>
                        <DropdownItem text={"SWEETS"} href={"/allitems"} class={styles.DropdownItem}/>
                        <DropdownItem text={"SNACKS"} href={"/allitems"} class={styles.DropdownItem}/>
                        <DropdownItem text={"FOOD"} href={"/allitems"} class={styles.DropdownItem}/>
                        <DropdownItem text={"BUNDLES"} href={"/allitems"} class={styles.DropdownItem}/>
                    </ul>
            </div>
        </div>
    );
}
function DropdownItem(props){
    return (
        <li className = {props.class} href={props.href}>
            {props.text}
        </li>
    );
}