import React from 'react';

interface AnnouncementModalProps {
  isVisible: boolean;
  announcement: string;
  targetRef: React.RefObject<HTMLDivElement>;
  backgroundColor: string; // Add background color prop
}

const AnnouncementModal: React.FC<AnnouncementModalProps> = ({ isVisible, announcement, targetRef, backgroundColor }) => {
  if (!isVisible || !targetRef.current) return null;

  const { top, left, width } = targetRef.current.getBoundingClientRect();

  return (
    <div 
      className={`fixed shadow-lg rounded p-4 z-50 ${backgroundColor}`}
      style={{
        top: top + 20, // Position the box closer to the top
        left: left + width / 2,
        transform: 'translateX(-50%)', // Center horizontally
        maxWidth: '450px',
        width: '100%',
      }}
    >
      <div className="text-lg font-bold text-white text-center break-words">{announcement}</div>
    </div>
  );
};

export default AnnouncementModal;
