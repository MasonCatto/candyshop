import React,{useState, useEffect} from 'react';
import './SelectionNavigation.css'

function SelectionNavigation() {
    //if width smaller, or is 600, dropdown is set to true
    const [isDropdown, setIsDropdown] = useState(window.innerWidth<=600);
    //[state, setState] = useState(initialState)
    //useState returns an array with two values, the current state, which during the first render
    //will be equal to the initial state, that is passed
    //the set function that lets you update the state to a different value 
    //and trigger a rerender setState->state
    const [selected, setSelected] = useState('');

    const items = [
        'All Products',
        'On Sale',
        'Drinks',
        'Candy',
        'Snacks',
        'Food',
        'Bundles'
    ]
    
    const handleResize = () => {
        setIsDropdown(window.innerWidth<=600);
    }

    useEffect(() => {
        //resizing is called on render
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    },[]);

    const handleChange = (event) => {
        setSelected(event.target.value);
    }

    const handleClick = (event, item) => {
        event.preventDefault();
        setSelected(item);
    }

    return (
        <div className="Product-selection-container">
            {isDropdown ? (
            <select 
                className="Selection-dropdown"
                value={selected}
                onChange={handleChange}
            >
                <option value="" disabled> <img src="" alt="Category"></img></option>
                {items.map((item, index) => (
                    <option key={index} value={item}>
                        {item}
                    </option>
                ))}
            </select>
            ) : ( 
            <ul className="Selection-list">
                <li className="list2">
                    {items.map((item, index) => (
                        <a
                            key={index}
                            href="#"
                            className={`Selection-attribute ${selected === item ? 'selected' : ''}`}
                            onClick={(event) => handleClick(event, item)}
                        >
                            {item}
                        </a>
                    ))}
                </li>
            </ul>
            )}
        </div>
    );
}
export default SelectionNavigation;