import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";

interface AddMediaCardModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const AddMediaCardModal: React.FC<AddMediaCardModalProps> = ({ isVisible, onClose }) => {
  const [file, setFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string>("");

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

  useEffect(() => {
    if (uploadStatus) {
      const timer = setTimeout(() => {
        setUploadStatus('');
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [uploadStatus]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFile = e.target.files[0];
      validateFile(selectedFile);
    }
  };

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files) {
      const selectedFile = e.dataTransfer.files[0];
      validateFile(selectedFile);
    }
  }, []);

  const validateFile = (selectedFile: File) => {
    const validTypes = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "image/bmp",
      "image/webp",
      "image/svg+xml",
      "image/tiff",
      "image/x-icon",
      "video/mp4",
      "video/mpeg",
      "video/quicktime",
      "video/x-msvideo",
      "video/x-matroska",
      "video/webm",
      "video/ogg",
      "video/3gpp",
      "video/x-flv",
    ];
    if (!validTypes.includes(selectedFile.type)) {
      setUploadStatus("Invalid file type. Only images and videos are allowed.");
      setFile(null);
      return;
    }
    setFile(selectedFile);
    setUploadStatus("");
  };

  const handleFileUpload = async () => {
    if (!file) {
      setUploadStatus("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:5017/api/upload/upload?userId=1", // Include the userId
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setUploadStatus(`File uploaded successfully: ${response.data.filePath}`);
      setFile(null); 
    } catch (error) {
      const errorMessage =
        error.response?.data || "An error occurred while uploading the file.";
      setUploadStatus(`Error uploading file: ${errorMessage}`);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const renderFilePreview = () => {
    if (!file) return null;
    return <p className="mt-4 text-white">{file.name}</p>;
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 top-17 flex justify-center items-center z-10 bg-gray-800 bg-opacity-50">
      <div className="bg-white p-8 shadow-lg w-full h-full-minus-4.25rem flex flex-col items-center justify-center md:rounded-none relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-blue-800 text-4xl">&times;</button>
        <div className="w-full h-full flex flex-col items-center">
          <h1 className="text-4xl font-bold text-center text-blue-800 mb-20">Quick Add Media Card</h1>
          <div className="w-4/6 h-5/6 p-8 flex flex-col items-center justify-center">
            <div
              className="w-full h-5/6 border-gray-300 flex flex-col items-center justify-center rounded-lg bg-blue-600 text-white text-lg"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
            ><p className="text-3xl mb-10">Drag image or video into box</p>
              <div className="text-center border-2 border-dashed h-2/6 w-3/6 rounded-lg p-4 bg-blue-500">
                <img src="/public/AddImage.png" alt="Upload Icon" className="mx-auto mt-14" />
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                />
                {renderFilePreview()}
              </div>
              <label htmlFor="file-upload" className="cursor-pointer mt-4">
                <div className="bg-blue-500 w-72 text-center text-white p-3 rounded-lg text-lg">
                    Click to upload file
                </div>
              </label>
            </div>
            
            <button
              onClick={handleFileUpload}
              className="w-40 bg-blue-800 text-white py-3 rounded-lg font-semibold hover:bg-blue-900 mt-8"
            >
              Add To Queue
            </button>
            {uploadStatus && (
              <p
                className={`mt-4 text-center ${uploadStatus.startsWith("Error") ? "text-red-500" : "text-green-500"}`}
              >
                {uploadStatus}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMediaCardModal;
