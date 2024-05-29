import UploadButton from "../upload/UploadButton";

const uploadModal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="flex flex-col h-[900px] w-[600px] gap-2">
      <button
        onClick={onClose}
        className="h-10 w-10 text-3xl font-semibold text-slate-600 hover:text-gray-800 p-1 bg-slate-400 rounded-md"
      >
        X
      </button>
      <UploadButton />
    </div>
  );
};

export default uploadModal;
