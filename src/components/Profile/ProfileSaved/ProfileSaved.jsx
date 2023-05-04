import { NoPostsContent } from '../NoPostsContent/NoPostsContent';
import styles from './ProfileSaved.module.scss';
import { useState, useEffect } from 'react';

export default function ProfilePosts() {
    const [result, setResult] = useState([]);

    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.content}`}>
                Only you can see what you've saved
            </div>
            <NoPostsContent />
        </div>
    );
}