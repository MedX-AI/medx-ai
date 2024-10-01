import React, { useState, useCallback } from 'react';

const ImageUploader = () => {
  const [images, setImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  const onDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const onDragLeave = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const onDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    handleFiles(files);
  }, []);

  const handleFiles = (files) => {
    const validImageTypes = ['image/jpeg', 'image/png', 'image/gif'];
    const selectedFiles = Array.from(files).filter(file => 
      validImageTypes.includes(file.type)
    );

    selectedFiles.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImages(prevImages => [...prevImages, { file, preview: e.target.result }]);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleFileInput = (e) => {
    const files = e.target.files;
    handleFiles(files);
  };

  const removeImage = (index) => {
    setImages(prevImages => prevImages.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <div
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        className={`border-2 border-dashed rounded-lg p-8 text-center ${
          isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
        }`}
      >
        <input
          type="file"
          accept="image/*"
          onChange={handleFileInput}
          className="hidden"
          id="fileInput"
          multiple
        />
        <label
          htmlFor="fileInput"
          className="cursor-pointer text-blue-500 hover:text-blue-600"
        >
          Click to upload
        </label>
        <span className="text-gray-500"> or drag and drop</span>
        <p className="mt-2 text-sm text-gray-500">PNG, JPG, GIF up to 10MB</p>
      </div>

      {images.length > 0 && (
        <div className="mt-8 grid grid-cols-2 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image.preview}
                alt={`Uploaded ${index + 1}`}
                className="w-full h-40 object-cover rounded-lg"
              />
              <button
                onClick={() => removeImage(index)}
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600 focus:outline-none"
              >
                &times;
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageUploader;