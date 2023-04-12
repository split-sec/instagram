import { Link } from 'react-router-dom';
import styles from './BlueButton.module.scss';

export default function BlueButton({placeholderText, style}) {
    let url = '';
    return (
        <button className={`${styles.container} flex`} style={style}>
            { placeholderText }
        </button>
    );
}