import classes from './Styles/Account.module.css';

export default function Account() {
    return (
        <div className={classes.account}>
            <span class="material-icons-outlined" title="Account">
                account_circle
            </span>
            <a href="/signup">Signup</a>
            {/* <span title="Logout" className="material-icons-outlined">
                logout
            </span>  */}
        </div>
    );
}