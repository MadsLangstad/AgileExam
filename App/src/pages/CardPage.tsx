import { useState, useEffect } from 'react';

const CardPage = () => {
    // Array of image paths
    const images = [
        "/public/DrikkVannCard.png",
        "/public/5OmDagenCard.png",
        "/public/TogetherForBetterCard.png"
    ];

    // State to hold the current image index
    const [currentIndex, setCurrentIndex] = useState(0);

    // Effect to change the image every 30 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 30000); // 30000 milliseconds = 30 seconds

        // Clear the interval on component unmount
        return () => clearInterval(interval);
    }, [images.length]);

    // Select the current image based on the current index
    const currentImg = images[currentIndex];

    return (
        <div className="w-screen h-screen overflow-hidden flex justify-center items-center">
            <img
                src={currentImg}
                className="object-cover w-full h-full"
                alt="Full screen"
            />
        </div>
    );
};

export default CardPage;
