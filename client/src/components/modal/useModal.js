import { useState } from "react";

export default function useModal() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClick = () => {
        setIsModalOpen(true);
    };

    const handleConfirm = () => {
        
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };


    return {
        handleClick,
        handleConfirm,
        handleCancel,
        isModalOpen,
    }
}