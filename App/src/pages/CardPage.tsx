import { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";

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

    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate("/dashboard"); // Replace with your actual route
    };

    return (
        <button className="w-full h-full overflow-hidden flex justify-center items-center object-cover"
                style={{ border: "none", padding: 0, background: "none"}}
                onClick={handleOnClick}
        >
            <img
                src={currentImg}
                className="object-cover w-full h-full"
                alt="Full screen"
            />
        </button>
    );
};

export default CardPage;