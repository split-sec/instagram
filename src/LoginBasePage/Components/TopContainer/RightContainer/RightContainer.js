import styles from './RightContainer.module.scss';
import Box from "../../Box/Box";
import LoginForm from "./LoginForm/LoginForm";

export default function RightContainer() {
    return (
        <div>
            <LoginForm />
            <Box>
                Don't have an account? <span>Sign up</span>
            </Box>
            <div>Get the app.</div>
            <div>
                <img src='https://static.cdninstagram.com/rsrc.php/v3/yt/r/Yfc020c87j0.png' className={`${styles.button}`} alt='app store button'></img>
                <img src='https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png' className={`${styles.button}`} alt='play store button'></img>
            </div>
        </div>
    );
}