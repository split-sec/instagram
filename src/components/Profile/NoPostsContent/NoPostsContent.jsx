import styles from './NoPostsContent.module.scss';

export function NoPostsContent(props) {
    return (
        <div className={`${styles.container}`}>
            <div style={props.styles}></div>

            <div className={`${styles.header}`}>{props.header}</div>

            <div className={`${styles.content}`}>{props.content}</div>

            {props.link ? <div className={`${styles.buttonText}`}>Share your first photo</div> : <></>}
        </div>
    );
}