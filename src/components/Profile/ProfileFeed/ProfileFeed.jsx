import { NoPostsContent } from '../NoPostsContent/NoPostsContent';
import styles from './ProfileFeed.module.scss';
import { useState, useEffect } from 'react';

export default function ProfilePosts() {
    const [result, setResult] = useState([]);

    const imgStyle =  {
        background: "url('https://static.cdninstagram.com/rsrc.php/v3/yV/r/6JqvJ6H_bFT.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "440px 411px",
        backgroundPosition: "-63px -288px",
        height: "62px",
        width: "62px",
    }

    return (
        <NoPostsContent 
            header="Share photos"
            content="When you share photos, they will appear on your profile."
            styles={imgStyle}
            link={true}
        />
    );
}