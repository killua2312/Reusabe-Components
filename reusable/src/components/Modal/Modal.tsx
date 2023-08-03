import {useState} from 'react'

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

function Modal({isOpen, onClose, title, children}: ModalProps) {
    const modalStyle = {
        display: isOpen ? 'block' : 'none',
    };

    return (
        <div className="modal" style={modalStyle}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>
                    &times;
                </span>
                <h2>{title}</h2>
                {children}
            </div>
        </div>
    )
}

export default Modal;