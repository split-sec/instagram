import { Link } from 'react-router-dom';

import { commentLikeUnfilledSvg, commentLikeFilledSvg } from '../assets/Icons';

import styles from './CommentMobile.module.scss';

export default function CommentMobile({username, comment, like}) {
    return (
        <div className={`${styles.commentContainer} flex`}>
            <div className={`${styles.comment}`}>
                <p>
                    <Link to='/' className={`${styles.usernameText}`}>{username}</Link>
                    <span></span>
                    {comment}
                </p>
            </div>
                {like ? commentLikeFilledSvg() : commentLikeUnfilledSvg()}
            <div>

            </div>
        </div>
    )
}