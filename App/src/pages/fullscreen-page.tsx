import { useState } from "react";
import ViewScreen from "../components/view-screen";

const FullScreenPage: React.FC = () => {
  const [currentImage, setCurrentImage] = useState<string>("");

  const handleImageChange = (image: string) => {
    setCurrentImage(image);
  };

  return (
    <div className="w-full h-screen relative">
      <ViewScreen onImageChange={handleImageChange} />
      <div className="hidden absolute top-0 left-0 m-4"></div>
    </div>
  );
};

export default FullScreenPage;
