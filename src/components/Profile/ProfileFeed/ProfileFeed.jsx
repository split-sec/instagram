import { NoPostsContent } from '../NoPostsContent/NoPostsContent';
import styles from './ProfileFeed.module.scss';
import { useState, useEffect } from 'react';

export default function ProfilePosts() {
    const [result, setResult] = useState([]);

    return (
        <NoPostsContent />
    );
}