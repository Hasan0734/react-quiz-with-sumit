import image from '../assets/images/3.jpg'
import classes from './Styles/Video.module.css'
export default function Video() {
    return (
        <a href="#video">
            <div className={classes.video}>
                <img src={image} alt="Video" />
                <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
                <div className={classes.qmeta}>
                    <p>10 Questions</p>
                    <p>Score: Not taken yet</p>
                </div>
            </div>
        </a>
    )
}