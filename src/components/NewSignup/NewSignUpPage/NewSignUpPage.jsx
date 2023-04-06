import { Outlet, NavLink } from 'react-router-dom';

import TopNavWithBackLink from '../../TopNavWithBackLink/TopNavWithBackLink.jsx';
import { miniDownChevronSvg } from '../../assets/Icons.jsx';
import BlueButton from '../../BlueButton/BlueButton.jsx';

import styles from './NewSignUpPage.module.scss';

export default function NewSignUpPage() {
    let activeStatus = false;

    return (
        <div className={`${styles.container} flex flex-col`}>
            <TopNavWithBackLink />

            <div className={`${styles.languageContainer} flex`}>
                <button className={`${styles.optionsContainer}`}>
                    <div className={`${styles.options}`}></div>
                </button>

                <div className={`${styles.topNav} flex`}>
                    <p>English (UK)</p>
                    <div className={`${styles.downArrow}`}>{ miniDownChevronSvg() }</div>
                </div>
            </div>

            <div className={`${styles.formContainer}`}>
                <div className={`${styles.boxContainer} flex flex-col`}>
                    <div className={`${styles.topContainer} flex`}>
                        <NavLink className={`${styles.optionLink}`} to='/accounts/signup/phone'>
                            {({isActive}) => isActive ? 
                                <div className={`${styles.optionActive} flex`}>
                                    PHONE
                                </div>

                                : 
                                
                                <div className={`${styles.option} flex`}>
                                    PHONE
                                </div>
                            }
                        </NavLink>
                        <NavLink className={`${styles.optionLink}`} to='/accounts/signup/email'>
                            {({isActive}) => isActive ? 
                                <div className={`${styles.optionActive} flex`}>
                                    EMAIL
                                </div>

                                : 
                                
                                <div className={`${styles.option} flex`}>
                                    EMAIL
                                </div>
                            }
                        </NavLink>
                    </div>
                </div>

                <Outlet />
            </div>


            <div className={`${styles.bottomContainer}`}>
                <BlueButton />
            </div>
        </div>
    );
}