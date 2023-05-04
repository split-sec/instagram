import { NoPostsContent } from '../NoPostsContent/NoPostsContent';
import styles from './ProfileSaved.module.scss';
import { useState, useEffect } from 'react';

export default function ProfilePosts() {
    const [result, setResult] = useState([]);

    const imgStyle =  {
        background: "url('https://static.cdninstagram.com/rsrc.php/v3/yV/r/6JqvJ6H_bFT.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "440px 411px",
        backgroundPosition: "-126px -288px",
        height: "62px",
        width: "62px",
    }

    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.content}`}>
                Only you can see what you've saved
            </div>
            <NoPostsContent 
                header="Save"
                content="Save photos and videos that you want to see again. No one is notified, and only you can see what you've saved."
                styles={imgStyle}
                link={false}
            />
        </div>
    );
}