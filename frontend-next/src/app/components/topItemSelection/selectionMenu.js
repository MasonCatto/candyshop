import {useState, useEffect, useRef} from 'react';
import styles from'./selectionMenu.module.css'
import DropdownMenu from './../../utility/dropdown/dropdown';
// import MenuIcon from '../../../../public/Assets/SelectionMenu/MenuIcon.svg';


export default function SelectionMenu() {
    

    let menuRef = useRef();

    //click outside the dropdown menu to close it
    // useEffect(()=>{
    //     let handler = (e)=>{
    //         if(!menuRef.current.contains(e.target)){
    //         setOpen(false);
    //         }
    //     }
    //     document.addEventListener("mousedown",handler)

    // });

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

            <DropdownMenu passDropdownClass={styles.DropdownMenu} buttonClass={styles.menuTrigger} ref={menuRef} />
            {/* <div className={`${styles.DropdownMenu} ${open ? styles.active : styles.inactive}`}> */}
                    {/* <ul>
                        <DropdownItem text={"ALL ITEMS"} href={"/allitems"} class={styles.DropdownItem}/>
                        <DropdownItem text={"DRINKS"} href={"/allitems"} class={styles.DropdownItem}/>
                        <DropdownItem text={"SWEETS"} href={"/allitems"} class={styles.DropdownItem}/>
                        <DropdownItem text={"SNACKS"} href={"/allitems"} class={styles.DropdownItem}/>
                        <DropdownItem text={"FOOD"} href={"/allitems"} class={styles.DropdownItem}/>
                        <DropdownItem text={"BUNDLES"} href={"/allitems"} class={styles.DropdownItem}/>
                    </ul>
            </div> */}
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