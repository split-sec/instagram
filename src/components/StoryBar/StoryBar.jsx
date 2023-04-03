import styles from './StoryBar.module.scss';
import Story from '../Story/Story';

export default function StoryBar() {
    return (
        <div className={`${styles.storyBar}`}>
            <Story />
        </div>
    )
}