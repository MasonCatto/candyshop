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
                <DropdownItem text={"ALL ITEMS"} href={"/allitems"}/>
                <DropdownItem text={"DRINKS"}/>
                <DropdownItem text={"SWEETS"}/>
                <DropdownItem text={"SNACKS"}/>
                <DropdownItem text={"FOOD"}/>
                <DropdownItem text={"BUNDLES"}/>
            </div>
            <button className="Menu-trigger" onClick={()=>{setOpen(!open)}}>
                    <img src={MenuIcon} alt="Menu Icon" className="Menu-icon"/>
            </button>
            <div className={`Dropdown-menu ${open? 'active' : 'inactive'}`}>
                    <ul>
                        <DropdownItem text={"All items"}/>
                    </ul>
                </div>
        </div>
    );
}
function DropdownItem(props){
    return (
        <li className = "Dropdown-item">
        <a href={props.href}>{props.text}</a>
        </li>
    );
}

export default SelectionNavigation;