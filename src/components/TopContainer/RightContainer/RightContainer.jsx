import styles from './RightContainer.module.scss';
import LoginForm from "../../LoginForm/LoginForm.jsx";

export default function RightContainer() {
    return (
        <div className={`${styles.loginContainer} flex flex-col`}>
            <LoginForm />
            <div className={`${styles.box} flex`}>
                <p className={`${styles.cta}`}>Don't have an account? <a className={`${styles.ctaLink}`}>Sign up</a></p>
            </div>
            <div>Get the app.</div>
            <div>
                <img className={`${styles.button}`} src='https://static.cdninstagram.com/rsrc.php/v3/yt/r/Yfc020c87j0.png' alt='app store button'></img>
                <img className={`${styles.button}`} src='https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png' alt='play store button'></img>
            </div>
        </div>
    );
}