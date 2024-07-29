import Link from 'next/link';
import style from './topNavigation.module.css';

export default function TopNavigation() {
    return (
        <nav className={style.TopNavContainer}>
                <Link href="/">
                    {/* <a>
                        <img className='Top-nav-logo' src={WebsiteLogo} alt="logo"/>
                    </a> */}
                </Link>
                {/* <Link className={style.CartAttribute} href="/cart"> */}
                    {/* <a className="Cart-attribute">
                    </a> */}
                {/* </Link> */}
                <Link href="/login"className={style.LoginAttribute} > Login
                    {/* <a className="Login-attribute">Login</a> */}
                </Link>
        </nav>
    )
}