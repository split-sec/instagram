import { Navigate } from 'react-router-dom';
import styles from './BlueButton.module.scss';

export default function BlueButton({placeholderText}) {
    let url = '';
    return (
        //
        <button className={`${styles.container} flex`} >
            { placeholderText }
        </button>
    );
}