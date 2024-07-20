import React,{useState, useEffect, useRef} from 'react';
import './SelectionNavigation.css'
import MenuIcon from '../../Assets/SelectionContainer/SelectionMenu.svg';


function SelectionNavigation() {
    
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
        <div className="Product-selection-container" ref={menuRef}>

            <div className="Product-selection">
                <DropdownItem text={"ALL ITEMS"} href={"/allitems"} class={"List-item"}/>
                <DropdownItem text={"DRINKS"} href={"/allitems"} class={"List-item"}/>
                <DropdownItem text={"SWEETS"} href={"/allitems"} class={"List-item"}/>
                <DropdownItem text={"SNACKS"} href={"/allitems"} class={"List-item"}/>
                <DropdownItem text={"FOOD"} href={"/allitems"} class={"List-item"}/>
                <DropdownItem text={"BUNDLES"} href={"/allitems"} class={"List-item"}/>
            </div>
            <button className="Menu-trigger" onClick={()=>{setOpen(!open)}}>
                    <img src={MenuIcon} alt="Menu Icon" className="Menu-icon"/>
            </button>

            <div className={`Dropdown-menu ${open? 'active' : 'inactive'}`}>
                    <ul>
                        <DropdownItem text={"ALL ITEMS"} href={"/allitems"} class={"Dropdown-item"}/>
                        <DropdownItem text={"DRINKS"} href={"/allitems"} class={"Dropdown-item"}/>
                        <DropdownItem text={"SWEETS"} href={"/allitems"} class={"Dropdown-item"}/>
                        <DropdownItem text={"SNACKS"} href={"/allitems"} class={"Dropdown-item"}/>
                        <DropdownItem text={"FOOD"} href={"/allitems"} class={"Dropdown-item"}/>
                        <DropdownItem text={"BUNDLES"} href={"/allitems"} class={"Dropdown-item"}/>
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

export default SelectionNavigation;