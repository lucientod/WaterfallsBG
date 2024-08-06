import Modal from './Modal.jsx';
import useModal from '../../hooks/useModal.js';

export default function Example() {
    
    const {handleClickModal,handleConfirmModal,handleCancelModal, isModalOpen} = useModal()
    return (
        <div >
            <button onClick={handleClickModal}>Test modal</button>

            {isModalOpen && (
                <Modal
                    message="Are you sure you want to delete this article?"
                    onConfirm={handleConfirmModal}
                    onCancel={handleCancelModal}
                />
            )}
        </div>
    );
};