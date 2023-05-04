import styles from './NoPostsContent.module.scss';

export function NoPostsContent() {
    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.cameraImg}`}></div>

            <div className={`${styles.header}`}>Share photos</div>

            <div className={`${styles.content}`}>When you share photos, they will appear on your profile.</div>

            <div className={`${styles.buttonText}`}>Share your first photo</div>
        </div>
    );
}