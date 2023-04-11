import PostTopContainer from './PostTopContainer/PostTopContainer';
import PostImageContainer from './PostImageContainer/PostImageContainer';

import styles from './Posts.module.scss';

export default function Posts() {
    return (
        <div className={`${styles.container} flex flex-col`}>
            <PostTopContainer />
            <PostImageContainer />
        </div>
    );
}