import signupSVG from '../assets/images/signup.svg'
import classes from '../components/Styles/Illustration.module.css'
export default function Illustration() {
    return (
        <div className={classes.illustration}>
            <img src={signupSVG} alt="" />
        </div>
    )
}