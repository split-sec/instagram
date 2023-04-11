import styles from './PostImageContainer.module.scss';

export default function PostImageContainer() {
    return (
        <div>
            <img 
                src='https://images.freeimages.com/images/large-previews/ddf/tour-d-eiffel-1447025.jpg' 
                className={`${styles.image}`}
            />
        </div>
    );
}