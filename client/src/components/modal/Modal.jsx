import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ message, onConfirm, onCancel }) => {
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <p>{message}</p>
                <div className={styles.modalButtons}>
                    <button onClick={onConfirm}>Yes</button>
                    <button onClick={onCancel}>No</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;