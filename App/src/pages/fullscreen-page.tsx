import { useState } from "react";
import ViewScreen from "../components/view-screen";
import NowShowing from "../components/now-showing";

const FullScreenPage: React.FC = () => {
  const [currentImage, setCurrentImage] = useState<string>("");

  const handleImageChange = (image: string) => {
    setCurrentImage(image);
  };

  return (
    <div className="w-full h-screen relative">
      <ViewScreen onImageChange={handleImageChange} />
      <div className="hidden absolute top-0 left-0 m-4">
        <NowShowing currentImage={currentImage} />
      </div>
    </div>
  );
};

export default FullScreenPage;
