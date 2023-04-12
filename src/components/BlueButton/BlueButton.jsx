import { Link } from 'react-router-dom';
import styles from './BlueButton.module.scss';

export default function BlueButton({placeholderText, style, handleClick}) {
    return (
        <button className={`${styles.container} flex`} style={style} onClick={handleClick}>
            { placeholderText }
        </button>
    );
}