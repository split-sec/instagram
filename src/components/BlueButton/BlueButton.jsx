import styles from './BlueButton.module.scss';

export default function BlueButton() {
    return (
        <button className={`${styles.container} flex`}>
            Get the Instagram app
        </button>
    );
}