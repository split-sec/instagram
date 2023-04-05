import InstaLogo from '../../InstaLogo/InstaLogo';
import styles from './NewSignUpPage.module.scss';

export default function NewSignUpPage() {
    return (
        <div className={`${styles.container} flex flex-col`}>
            <InstaLogo />
        </div>
    );
}