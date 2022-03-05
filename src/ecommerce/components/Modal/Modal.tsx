
import React, { useEffect, useRef } from 'react';
// import Button from '../button/Button';
// import CloseIcon from '../CloseIcon';
// import styles from './modal.module.css';
import "./modal.css"


export const Button = ({ style, onClick, className, children }: any): any => (
    <button onClick={onClick} {...{ style }} {...{ className }}>{children}</button>
)

const Modal = ({ modalStyle, children, show, onClose, backdropStyle }: any) => {
    const modalRef = useRef<HTMLDivElement | any>(null);
    useEffect(() => {
        if (show) {
            modalRef.current.classList.add("visible");
        }
        else {
            modalRef.current.classList.remove("visible");
        }
    },
        [show]);
    return (
        <>
            <div ref={modalRef} style={backdropStyle} className={`modal__wrap`}>
                <Button
                    onClick={onClose}
                    style={{ width: 60, height: 40, position: 'absolute', top: 0, right: 0, margin: '1rem' }}
                    className={"close__btn"}
                >
                    <i className="fa fa-times close__icon" style={{height:"20px", width:"20px"}} 
                    // className={"close__icon"} 
                    ></i>
                </Button>
                <div style={modalStyle} className={"modal"}>
                    {children}
                </div>
            </div>
        </>
    );
};

export default Modal;
