// react
import React, {useRef} from 'react';
// hooks
import {useOutsideClick} from '../../hooks/useClickOutside';
// styles
import styles from './styles.module.scss';


const ModalLayout = ({setIsOpen, children}) => {
    const logOutRef = useRef();

    const closeModal = () => {
        setIsOpen(false)
    }

    useOutsideClick(logOutRef, closeModal);

    return(
        <div className={styles.layout} >
            <div className={styles.layout__modal} ref={logOutRef}>
                {children}
            </div>
        </div>
    )
}

export default ModalLayout;