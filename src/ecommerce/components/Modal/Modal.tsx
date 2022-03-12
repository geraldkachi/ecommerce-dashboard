
import React, { useEffect, useRef } from 'react';
import styles from './modal.module.css';

export const Button = ({ style, onClick, className, children }: any): any => (
    <button onClick={onClick} {...{ style }} {...{ className }}>{children}</button>
)

const Modal = ({ modalStyle, children, show, onClose, backdropStyle }: any) => {
    const modalRef = useRef<HTMLDivElement | any>(null);
    useEffect(() => {
        if (show) {
            modalRef.current.classList.add(styles.visible);
        }
        else {
            modalRef.current.classList.remove(styles.visible);
        }
    },
        [show]);
    return (
        <>
            <div ref={modalRef} style={backdropStyle} className={`${styles.modal__wrap}`}>
                <Button
                    onClick={onClose}
                    style={{ width: 60, height: 40, position: 'absolute', top: 0, right: 0, margin: '1rem' }}
                    className={styles.close__btn}
                >
                    <i className="fa fa-times close__icon" style={{height:"20px", width:"20px"}} 
                    // className={"close__icon"} 
                    ></i>
                </Button>
                <div style={modalStyle} className={styles.modal}>
                    {children}
                </div>
            </div>
        </>
    );
};

export default Modal;
