import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface AddEventCardModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const AddEventCardModal: React.FC<AddEventCardModalProps> = ({ isVisible, onClose }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [time, setTime] = useState('');
  const [duration, setDuration] = useState<number | null>(null);
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

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

  const handleAddToQueue = async () => {
    if (!title || !date || !time || !location || !description || duration === null) {
      setStatusMessage('All fields are required');
      setIsSuccess(false);
      setTimeout(() => setStatusMessage(''), 3000);
      return;
    }

    const newCard = {
      title,
      date,
      time: new Date(`${date}T${time}`).toISOString(),
      duration,
      location,
      description,
      userId: 1,
    };

    try {
      const cardResponse = await axios.post('http://localhost:5017/api/EventCard', newCard);

      const eventCardId = cardResponse.data.eventCardId;
      console.log('Added event card:', cardResponse.data);

      const newQueueItem = {
        cardType: 'event',
        eventCardId,
        startDate: date,
        endDate: date,
        durationMinutes: duration,
        durationHours: 0,
      };

      await axios.post('http://localhost:5017/api/Queue', newQueueItem);

      setIsSuccess(true);
      setStatusMessage('Event card added successfully');
      setTitle('');
      setDate(new Date().toISOString().slice(0, 10));
      setTime('');
      setDuration(null);
      setLocation('');
      setDescription('');
      setTimeout(() => setStatusMessage(''), 3000);

    } catch (error) {
      console.error("Error adding event card: ", error);
      setIsSuccess(false);
      setStatusMessage(`Error adding event card: ${error.response?.data?.message || error.message}`);
      setTimeout(() => setStatusMessage(''), 3000);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 top-17 flex justify-center items-center z-10 bg-gray-800 bg-opacity-50">
      <div className="bg-white p-8 shadow-lg w-full h-full-minus-4.25rem flex flex-col items-center justify-center md:rounded-none relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-blue-800 text-4xl">&times;</button>
        <div className="w-full flex flex-col items-center">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Quick Add Event Card</h2>
          <div className="w-full max-w-md p-4 flex flex-col items-center justify-center">
            <div className="mb-6 w-full">
              <label className="block text-lg font-medium text-blue-800 mb-2">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-3 border rounded-md"
                placeholder="..."
              />
            </div>
            <div className="mb-6 w-full">
              <label className="block text-lg font-medium text-blue-800 mb-2">Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full p-3 border rounded-md"
              />
            </div>
            <div className="mb-6 w-full">
              <label className="block text-lg font-medium text-blue-800 mb-2">Time</label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full p-3 border rounded-md"
              />
            </div>
            <div className="mb-6 w-full">
              <label className="block text-lg font-medium text-blue-800 mb-2">Duration (hours)</label>
              <input
                type="number"
                value={duration !== null ? duration : ''}
                onChange={(e) => setDuration(e.target.value ? parseInt(e.target.value) : null)}
                className="w-full p-3 border rounded-md"
                placeholder="..."
              />
            </div>
            <div className="mb-6 w-full">
              <label className="block text-lg font-medium text-blue-800 mb-2">Location</label>
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full p-3 border rounded-md"
                placeholder="..."
              />
            </div>
            <div className="mb-6 w-full">
              <label className="block text-lg font-medium text-blue-800 mb-2">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-3 border rounded-md"
                placeholder="..."
                rows={4}
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
            <div className={`w-full mt-4 text-center ${isSuccess === null ? '' : isSuccess ? 'text-green-500' : 'text-red-500'}`}>
              {statusMessage}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEventCardModal;
