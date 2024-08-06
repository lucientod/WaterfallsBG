import { useState } from "react";

export default function useModal() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClickModal = () => {
        setIsModalOpen(true);
    };

    const handleConfirmModal = () => {
        
        setIsModalOpen(false);
    };

    const handleCancelModal = () => {
        setIsModalOpen(false);
    };


    return {
        handleClickModal,
        handleConfirmModal,
        handleCancelModal,
        isModalOpen,
    }
}