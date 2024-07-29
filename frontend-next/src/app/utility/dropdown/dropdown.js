import styles from './dropdown.module.css';
import { useState, useEffect, useRef, forwardRef } from 'react';

//component for dropdown i become good programmer
const Dropdown = forwardRef((props, ref) => {
    const [open, setOpen] = useState(false);
    const menuRef = ref || useRef();

    useEffect(() => {
        const handler = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        };
    }, [menuRef]);

    return (
        <div className="flex-column">
            <button className={props.buttonClass} onClick={() => setOpen(!open)}>
       
            </button>
            <div ref={menuRef} className={`${styles.dropdownMenu} ${open ? styles.active : styles.inactive} ${props.passDropdownClass}`}>
                
            </div>
        </div>
    );
});

export default Dropdown;