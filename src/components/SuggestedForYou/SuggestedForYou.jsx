import { Link } from 'react-router-dom';

import styles from './SuggestedForYou.module.scss';
import SuggestedProfile from '../SuggestedProfile/SuggestedProfile';

export default function SuggestedForYou() {
    return (
        <div className={ `${styles.boxContainer}` }>
            <div className={ `${styles.topContainer} flex` }>
                <p className={ `${styles.suggested}` }>Suggestions for you</p>
                <Link className={ `${styles.seeAll}` } to='/explore'>See all</Link>
            </div>

            <div className={ `${styles.bottomContainer} flex` }>
                <SuggestedProfile />
                <SuggestedProfile />
            </div>
        </div>
    );
}