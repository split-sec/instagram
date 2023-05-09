import TopNavBackWithLink from '../../TopNavWithBackLink/TopNavWithBackLink';
import styles from './WhoCanSeeYourContent.module.scss';

export default function WhoCanSeeYourContent() {
    return (
        <TopNavBackWithLink 
            middleText={"Who can see your content"}
            rightLogo={<></>}
        />
    )
}