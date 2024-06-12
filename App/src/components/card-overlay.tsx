import React from 'react';

interface CardOverlayProps {
  onDelete: () => void;
}

const CardOverlay: React.FC<CardOverlayProps> = ({ onDelete }) => {
  return (
    <div className="absolute inset-0 bg-gray-400 bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center space-y-4">
      <div className="relative flex flex-col items-center">
        <button onClick={onDelete} className="text-white bg-transparent border-white border-4 rounded-sm bg-opacity-50 p-2 w-36 hover:bg-white hover:text-black transition-all duration-300">
          <div className="flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <img src="/public/remove_black.png" alt="Delete Icon" className="h-8 w-8" />
            <p className="pl-5">Remove</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default CardOverlay;
