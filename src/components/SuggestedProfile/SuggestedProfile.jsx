import styles from './SuggestedProfile.module.scss';

export default function SuggestedProfile() {
    return (
        <div className={ `${styles.container} flex flex-col` }>
            <div className={ `${styles.imgContainer}` }></div>
            <div className={ `${styles.profileName}` }>sampleusername</div>
            <div className={ `${styles.followedBy}` }>
                followed by a really really long name
            </div>            
        </div>
    );
}