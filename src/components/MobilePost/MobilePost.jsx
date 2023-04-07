import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

import FollowTextButton from '../FollowTextButton/FollowTextButton';
import { likeUnfilledSvg, likeFilledSvg, commentSvg, sendSvg, savedUnfilledSvg } from '../assets/Icons';
import CommentMobile from '../CommentMobile/CommentMobile';

import styles from './MobilePost.module.scss';

export default function MobilePost() {
    //This can be a state or prop - refer response
    const [audio, setAudio] = useState("prolly my spookiest beat ever");

    //This can be a state or prop - refer response
    //This part has a API call to be done
    const [followed, setFollowed] = useState(true);
    
    //This can be a state or prop 
    //Username will be received from API call
    const username = "notshyamvenkatesh";

    //This can be a state or prop 
    //Likes will be received from API call
    const likes = 10;

    //This can be a state or prop 
    //Verified will be received from API call
    const isVerified = true;

    //This can be a state or prop 
    //Post content will be received from API call
    const postContent = "This is a description about the post provided by the user during the creation of post. This must be diplayed to anyone viewing this.";

    //This can be a state or prop 
    //Comment count will be received from API call
    const commentCount = 365;

    //This can be a state or prop 
    //URL will be received from API call
    const url = "http://res.cloudinary.com/dkl52nx7z/image/upload/v1680784486/Instagram/post/img/kax56fpa4wwoyton6p9x.jpg";

    //Sample comment
    const comment = "This is a sample comment";

    return (
        <div className={`${styles.container} flex flex-col`}>
            <div className={`${styles.topContainer} flex`}>
                <div className={`${styles.profilePictureContainer}`}>

                    <div className={`${styles.storyAnimation}`}>
                        <div className={`${styles.profilePicture}`}></div>
                    </div>

                </div>

                <div className={`${styles.contentContainer} flex flex-col`}>
                    <div className={`${styles.usernameContainer} flex`}>
                        <div className={`${styles.usernameText} flex`}> 
                            <div>{username}</div> 
                            {isVerified ? <div className={`${styles.verified}`}></div> : <></>}
                            <div>{<FollowTextButton followed={followed} setFollowed={setFollowed} />}</div>
                        </div>
                    </div>
                    <div className={`${styles.audioText}`}>
                        { audio }
                    </div>
                </div>

                <div className={`${styles.optionsContainer}`}>
                    <svg aria-label="More Options" class="_ab6-" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24">
                        <circle cx="12" cy="12" r="1.5"></circle>
                        <circle cx="6" cy="12" r="1.5"></circle>
                        <circle cx="18" cy="12" r="1.5"></circle>
                    </svg>
                </div>
            </div>

            <img src={url} className={`${styles.photo}`}></img>

            <div className={`${styles.bottomContainer} flex flex-col`}>
                <div className={`${styles.activityContainer} flex`}>
                    <div className={`${styles.leftContainer} flex`}>
                        <div className={`${styles.logoContainer}`}>
                            {likeUnfilledSvg()}
                        </div>
                        <div className={`${styles.logoContainer}`}>
                            {commentSvg()}
                        </div>
                        <div className={`${styles.logoContainer}`}>
                            {sendSvg()}
                        </div>
                    </div>

                    <div className={`${styles.rightContainer} flex`}>
                        <div className={`${styles.logoContainer}`}>
                            {savedUnfilledSvg()}
                        </div>
                    </div>
                </div>

                <div>
                    <Link to="/">
                        <div className={`${styles.likesContainer} flex`}>
                            {likes > 1 ? `${likes} likes` : `${likes} like`}
                        </div>
                    </Link>
                </div>

                <div className={`${styles.postContent}`}>
                    <p>
                        <Link to='/' className={`${styles.usernameText}`}>{username}</Link>
                        <span></span>
                        {postContent}
                    </p>
                </div>

                <div className={`${styles.commentCount}`}>
                    View all {commentCount} comments
                </div>

                <div className={`${styles.comments}`}>
                    <CommentMobile username="anotheruser" comment={comment} like={false} />
                </div>
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />

        </div>
    );
}