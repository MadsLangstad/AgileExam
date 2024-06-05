import React, { useState, useEffect } from 'react';

interface AddBirthdayCardModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const AddBirthdayCardModal: React.FC<AddBirthdayCardModalProps> = ({ isVisible, onClose }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [bodyText, setBodyText] = useState('');
  const [background, setBackground] = useState('');

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isVisible]);

  const imageBackgrounds = [
    '/bd-card-1.png',
    '/bd-card-2.png',
    '/bd-card-3.png',
  ];

  const colorBackgrounds = [
    'bg-blue-400',
    'bg-purple-600',
    'bg-teal-500',
  ];

  const handleAddToQueue = () => {
    console.log({
      title,
      date,
      bodyText,
      background,
    });
    onClose();
  };

  const isColorBackground = background.startsWith('bg-');

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 top-17 flex justify-center items-center z-10 bg-gray-800 bg-opacity-50">
      <div className="bg-white p-8 shadow-lg w-full h-full-minus-4.25rem flex flex-col md:flex-row overflow-hidden md:rounded-none relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-gray-800">&times;</button>
        <h2 className="absolute top-24 left-1/2 transform -translate-x-1/2 text-3xl font-bold text-center text-blue-800">Quick Add Birthday Card</h2>
        <div className="flex flex-col md:flex-row w-full h-full items-center justify-center mt-16">
          <div className="w-full md:w-1/2 p-4 flex flex-col items-center">
            <div
              className={`w-4/5 h-96 border ${isColorBackground ? background : 'bg-blue-800'} border-gray-300`}
              style={{ backgroundImage: isColorBackground ? 'none' : `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            ></div>
            <div className="w-4/5">
              <label className="block text-lg text-blue-800 font-bold mt-5 mb-2">Choose a background</label>
              <div className="grid grid-cols-3 gap-4 mb-4">
                {imageBackgrounds.map((bg, index) => (
                  <div
                    key={index}
                    className={`w-[15.2rem] h-24 cursor-pointer border border-gray-300`}
                    style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    onClick={() => setBackground(bg)}
                  />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 w-4/5">
              {colorBackgrounds.map((bg, index) => (
                <div
                  key={index}
                  className={`w-[15.2rem] h-24 cursor-pointer ${bg} border border-gray-300`}
                  onClick={() => setBackground(bg)}
                ></div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4 flex flex-col items-center md:mt-[-4.75rem]">
            <div className="flex flex-col justify-between h-full w-4/5">
              <div className="mb-12 w-full">
                <label className="block text-lg font-medium text-blue-800 mb-2">Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full p-3 border rounded-md"
                  placeholder="..."
                />
              </div>
              <div className="mb-12 w-full">
                <label className="block text-lg font-medium text-blue-800 mb-2">Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-1/3 p-3 border rounded-md"
                />
              </div>
              <div className="mb-12 w-full flex-grow">
                <label className="block text-lg font-medium text-blue-800 mb-2">Body Text</label>
                <textarea
                  value={bodyText}
                  onChange={(e) => setBodyText(e.target.value)}
                  className="w-full p-3 border rounded-md h-full"
                  placeholder="..."
                  rows={5}
                />
              </div>
              <div className="flex justify-center w-full mt-8">
                <button
                  onClick={handleAddToQueue}
                  className="w-40 bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600"
                >
                  Add To Queue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBirthdayCardModal;
