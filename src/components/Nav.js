import logo from '../assets/images/logo-bg.png';
import Account from "./Account";
import classes from './Styles/Nav.module.css';

export default function Nav() {
    return (
        <nav className={classes.nav}>
            <ul>
                <li>
                    <a href="index.html" className={classes.brand}>
                        <img src={logo} alt="" />
                        <h3>Learn with Sumit</h3>
                    </a>
                </li>
            </ul>
            <Account />
        </nav>

    );
}