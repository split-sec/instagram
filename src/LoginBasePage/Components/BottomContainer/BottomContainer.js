import styles from './BottomContainer.module.scss';

export default function BottomContainer() {
    return (
        <div className={`${styles.bottom_container} flex flex-col`}>
            <div>Bottom 1</div>
            <div>Bottom 2</div>
        </div>
    )
}