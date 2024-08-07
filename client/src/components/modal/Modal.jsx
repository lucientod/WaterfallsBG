import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ message, onConfirm, onCancel }) => {
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <p>{message}</p>
                <div className={styles.modalButtons}>
                    <button onClick={onConfirm}>Да</button>
                    <button onClick={onCancel}>Не</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;