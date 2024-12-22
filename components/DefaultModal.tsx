import React from 'react'
import { LiaTimesSolid } from "react-icons/lia";

type DefaultModalProps= {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
}

const DefaultModal = ({isOpen, onClose, title, children}: DefaultModalProps) => {
    if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-auto p-6 relative">
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none"
        onClick={onClose}
      >
        <LiaTimesSolid size={20}/>
      </button>
      
      {/* Modal Title */}
      {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
      
      {/* Modal Content */}
      <div className='flex flex-col items-center justify-center mx-auto mt-5'>{children}</div>
    </div>
  </div>
  )
}

export default DefaultModal