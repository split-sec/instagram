import { Outlet, NavLink } from 'react-router-dom';

import TopNavWithBackLink from '../../TopNavWithBackLink/TopNavWithBackLink.jsx';
import { miniDownChevronSvg } from '../../assets/Icons.jsx';
import BlueButton from '../../BlueButton/BlueButton.jsx';

import styles from './NewSignUpPage.module.scss';

export default function NewSignUpPage() {
    let activeStatus = false;
    const myStyles = {
        backgroundPostion: "-364px -329px",
        backgroundSize: "440px 411px",
        height: "16px",
        width: "16px",
        marginRight: "8px",
    }

    return (
        <div className={`${styles.container} flex flex-col`}>
            <TopNavWithBackLink middleText={"Register"} rightLogo={<></>} options={false}/>

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

                <div className={`${styles.forMargin}`}>
                    <Outlet />
                </div>
            </div>


            <div className={`${styles.bottomContainer}`}>
                <BlueButton placeholderText={
                    <>
                        <img src="https://static.cdninstagram.com/rsrc.php/v3/yV/r/6JqvJ6H_bFT.png" 
                            style={myStyles}
                        />
                        <p>Sign Up with Facebook</p>
                    </>
                }/>
            </div>
        </div>
    );
}