import styles from './BottomContainer.module.scss';

export default function BottomContainer() {
    return (
        <div className={`${styles.bottom_container} flex flex-col`}>
            <div className={`flex`}>
                <div href="#" className={`${styles.login_hyperlink}`}>Meta</div>
                <div href="#" className={`${styles.login_hyperlink}`}>About</div>
                <div href="#" className={`${styles.login_hyperlink}`}>Blog</div>
                <div href="#" className={`${styles.login_hyperlink}`}>Jobs</div>
                <div href="#" className={`${styles.login_hyperlink}`}>Help</div>
                <div href="#" className={`${styles.login_hyperlink}`}>API</div>
                <div href="#" className={`${styles.login_hyperlink}`}>Privacy</div>
                <div href="#" className={`${styles.login_hyperlink}`}>Terms</div>
                <div href="#" className={`${styles.login_hyperlink}`}>Top accounts</div>
                <div href="#" className={`${styles.login_hyperlink}`}>Locations</div>
                <div href="#" className={`${styles.login_hyperlink}`}>Instagram Lite</div>
                <div href="#" className={`${styles.login_hyperlink}`}>Contact uploading and non-users</div>
                <div href="#" className={`${styles.login_hyperlink}`}>Meta Verified</div>
            </div>
            <div className={`${styles.bottom_section_2} flex`}>
                <div className={`${styles.language_button}`}>English (UK)</div>
                <div>© 2023 Instagram from Meta</div>
            </div>
        </div>
    );
}