import styles from './Footer.module.scss';

export default function Footer() {
    const arr1 = ["Meta", "About", "Blog", "Jobs", "Help", "API", "Privacy"];
    const arr2 = ["Terms", "Top accounts", "Locations", "Instagram Lite"];
    const arr3 = ["Contact uploading and non-users", "Meta Verified"];

    return (
        <div className={`${styles.footerContainer} flex flex-col`}>
            <div className={`${styles.row} flex`}>
                {
                    arr1.map((item) => {
                        return (
                            <div className={`${styles.footerTag}`}> {item} </div>
                        );
                    })
                }
            </div>

            <div className={`${styles.row} flex`}>
                {
                    arr2.map((item) => {
                        return (
                            <div className={`${styles.footerTag}`}> {item} </div>
                        );
                    })
                }
            </div>

            <div className={`${styles.row} flex`}>
                {
                    arr3.map((item) => {
                        return (
                            <div className={`${styles.footerTag}`}> {item} </div>
                        );
                    })
                }
            </div>
        </div>
    );
}