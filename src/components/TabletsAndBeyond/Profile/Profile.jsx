import Navbar from '../../Navbar/Navbar';
import styles from './Profile.module.scss';

export default function Profile() {
    return (
        <div className='flex'>
            <Navbar />
            
            <div className={`${styles.container}`}>
                <div className={`${styles.topContainer} flex flex-col`}>
                    <div className={`${styles.header} flex`}>
                        <div className={`${styles.headerLeft} flex`}>
                            <div className={`${styles.picturePlaceholder}`}>

                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.bottomContainer}`}>
                    footer text
                </div>
            </div>
        </div>
    );
}