import Button from '../Button';
import CheckBox from '../CheckBox';
import From from '../Form';
import Illustration from '../Illustration';
import classes from '../Styles/Signup.module.css';
import TextInput from '../TextInput';
export default function Signup() {
    return (
        <>
            <h1>Create an account</h1>
            <div className="column">
                <Illustration />
                <From className={classes.signup} >

                    <TextInput type="text" placeholder="Enter name" icon="person" />
                    <TextInput type="text" placeholder="Enter Email" icon="alternate_email" />
                    <TextInput type="password" placeholder="Enter password" icon="lock" />
                    <TextInput type="password" placeholder="Confirm password" icon="lock_clock" />
                    <CheckBox text="I agre to the Terms &amp; Conditions" />
                    <Button>Submit Now</Button>
                    <div className="info">
                        Already have an accout?
                        <a href="/login"> Login</a>  instead.

                    </div>
                </From>
            </div>
        </>
    )
}