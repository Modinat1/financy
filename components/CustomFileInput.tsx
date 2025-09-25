'use client';

import React, { useState } from 'react';
import { TbBookUpload } from "react-icons/tb";

const CustomFileInput = () => {
  const [image, setImage] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <h2 className="text-[#797979] text-sm font-bold">Your Profile Picture</h2>
      <label
        htmlFor="file-upload"
        className="border-dashed border-2 border-gray-300 rounded-lg w-40 h-40 flex flex-col items-center justify-center cursor-pointer hover:border-gray-400"
      >
        {image ? (
          <img
            src={URL.createObjectURL(image)}
            alt="Preview"
            className="w-full h-full object-cover rounded-lg"
          />
        ) : (
          <div className="flex flex-col items-center text-gray-400">
            <TbBookUpload size={40}/>
            <p>Upload your photo</p>
          </div>
        )}
      </label>
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default CustomFileInput;
