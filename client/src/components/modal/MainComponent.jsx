// MainComponent.js
import React, { useState } from 'react';
import Modal from './Modal';
import styles from './MainComponent.module.css'; // Adjust the path according to your structure

const MainComponent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDeleteClick = () => {
        setIsModalOpen(true);
    };

    const handleConfirmDelete = () => {
        // Perform the delete operation here
        console.log('Article deleted');
        setIsModalOpen(false);
    };

    const handleCancelDelete = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={styles.container}>
            <button onClick={handleDeleteClick}>Delete Article</button>

            {isModalOpen && (
                <Modal
                    message="Are you sure you want to delete this article?"
                    onConfirm={handleConfirmDelete}
                    onCancel={handleCancelDelete}
                />
            )}
        </div>
    );
};

export default MainComponent;