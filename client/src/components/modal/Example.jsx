import Modal from './Modal.jsx';
import useModal from './useModal.js';

export default function Example() {
    
    const {handleClick,handleConfirm,handleCancel, isModalOpen} = useModal()
    return (
        <div >
            <button onClick={handleClick}>Test modal</button>

            {isModalOpen && (
                <Modal
                    message="Are you sure you want to delete this article?"
                    onConfirm={handleConfirm}
                    onCancel={handleCancel}
                />
            )}
        </div>
    );
};