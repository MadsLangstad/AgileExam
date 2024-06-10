import React, { useState, useCallback } from "react";
import axios from "axios";

const UploadButton: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string>("");

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

  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-4 bg-blue-700 rounded-lg shadow-md space-y-4">
      <h1 className="text-2xl font-bold text-white mb-4">File Upload</h1>
      <input
        type="file"
        onChange={handleFileChange}
        className="block w-96 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none"
      />
      <button
        onClick={handleFileUpload}
        className="px-4 py-2 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-gray-100"
      >
        Upload
      </button>
      {uploadStatus && (
        <p
          className={`mt-4 ${uploadStatus.startsWith("Error") ? "text-red-500" : "text-green-500"}`}
        >
          {uploadStatus}
        </p>
      )}
      <div
        className="w-96 h-32 border-2 border-dashed border-gray-300 flex items-center justify-center rounded-lg text-center text-white"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
      >
        <p className="text-sm text-gray-500">
          Drag and drop a file here, or click to select a file
        </p>
      </div>
    </div>
  );
};

export default UploadButton;
