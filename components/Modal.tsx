import React, { useState } from 'react';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  onSend: (file: File | null) => void;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, onSend }) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];
    if (selectedFile && (selectedFile.type === 'application/pdf' || selectedFile.type === 'application/msword' || selectedFile.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')) {
      setFile(selectedFile);
    } else {
      alert('Please upload a valid .pdf or .doc file');
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
      <div className="bg-white rounded-lg p-8 w-full max-w-md mx-4 relative border border-dashed border-gray-300">
        <h2 className="text-2xl font-bold mb-4 text-center">Drag and drop or upload CV</h2>
        <p className="text-sm text-center mb-4">Please ensure the file is either a .pdf or .doc</p>
        <div className="flex items-center justify-center mb-4">
          <input
            type="file"
            className="hidden"
            id="file-upload"
            onChange={handleFileChange}
          />
          <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center">
            <svg
              className="w-12 h-12 text-gray-500 mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16V4a4 4 0 018 0v12m4 0H5a2 2 0 01-2-2V10a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2z"
              />
            </svg>
            <span className="text-gray-500">{file ? file.name : 'No file chosen'}</span>
          </label>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
            onClick={onClose}
          >
            Close
          </button>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={() => onSend(file)}
          >
            Send CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
