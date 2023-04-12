import BlueButton from '../../BlueButton/BlueButton';
import TopNavBackWithLink from '../../TopNavWithBackLink/TopNavWithBackLink';
import styles from './RegisterBirthdayMobile.module.scss';

export default function RegisterBirthdayMobile() {
    const monthArray = ["January", "February", "March",
                        "April", "May", "June", "July",
                        "August", "September", "October",
                        "November", "December"];
    const monthItems = monthArray.map((item, index) => <option value={index+1}>{item}</option>)

    const dateArray = [];
    for(let i = 1; i <= 31; i++) {
        dateArray.push(i);
    }
    const dateItems = dateArray.map(i => <option value={i}>{i}</option>);

    const yearArray = [];
    for(let i = 2023; i >= 1919; i--) {
        yearArray.push(i);
    }
    const yearItems = yearArray.map((i) => <option value={i}>{i}</option>)

    return (
        <div>
            <TopNavBackWithLink middleText={"Register"} rightLogo={<></>} options={false}/>

            <div className={`${styles.container} flex flex-col`}>
                <div className={`${styles.imagePlaceholder} flex`}>
                    <div className={`${styles.image}`}></div>
                </div>

                <div className={`${styles.boldText}`}>Add your date of birth</div>

                <div className={`${styles.info} flex flex-col`}>
                    <div>This won't be part of your public profile.</div>
                    <div className={`${styles.linkText}`}>Why do I need to provide my date of birth?</div>
                </div>

                <div className={`${styles.dateSelectorSection} flex flex-col`}>
                    <div className={`${styles.infoContainer} flex`}>
                        <select className={`${styles.selectTag}`}>
                            {monthItems}
                        </select>

                        <select className={`${styles.selectTag}`}>
                            {dateItems}
                        </select>

                        <select className={`${styles.selectTag}`}>
                            {yearItems}
                        </select>
                    </div>
                    <div className={`${styles.info} ${styles.infoSmall}`}>
                        You need to enter the date you were born on
                    </div>
                </div>

                <div className={`${styles.info} ${styles.infoSmall}`}>
                    Use your own date of birth, even if this account is for a business, pet or something else.
                </div>

                <div className={`${styles.forMargin}`}>
                    <BlueButton placeholderText={"Next"} />
                </div>
            </div>
        </div>
    );
}