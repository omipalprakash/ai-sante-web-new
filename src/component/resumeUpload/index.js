import { icons } from '@/utility/image';
import Image from 'next/image';
import { useState } from 'react';

const ResumeUpload = () => {
  const [dragOver, setDragOver] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  const handleFiles = (files) => {
    Array.from(files).forEach((file) => {
      if (file.size <= 10 * 1024 * 1024) {
        alert(`File uploaded: ${file.name}`);
      } else {
        alert(`Error: ${file.name} exceeds 10 MB limit!`);
      }
    });
  };

  const handleFileSelect = (e) => {
    const files = e.target.files;
    handleFiles(files);
  };

  return (
    <div className="w-full max-w-2xl p-6  ">
      <label className="flex text-lg font-medium text-gray-700 mb-4 justify-center">
        Resume/CV <span className="text-red-500">*</span>
      </label>
      <div
        className={`border-2 rounded-lg p-6 text-center ${
          dragOver
            ? 'border-blue-500 bg-blue-50'
            : 'border-dashed border-gray-400'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="flex justify-center items-center flex-col">
          <Image
            src={icons.uploadIcon}
            width={60}
            height={60}
            className="m-2"
          />
        </div>
        <p className="text-gray-600 mb-2">
          Drag your file(s) here or{' '}
          <span className="text-blue-500 font-medium cursor-pointer">
            browse
          </span>
        </p>
        <p className="text-sm text-gray-500">Max 10 MB files are allowed.</p>
        <input
          type="file"
          className="hidden"
          accept=".pdf,.doc,.docx,.txt,.rtf"
          onChange={handleFileSelect}
        />
      </div>
      <p className="mt-4 text-sm text-gray-500">
        Only support: pdf, doc, docx, txt, rtf
      </p>
    </div>
  );
};

export default ResumeUpload;
