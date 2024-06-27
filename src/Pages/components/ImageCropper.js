import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";

const ImageCropper = ({ imageSrc, onCropComplete, onCancel, onCrop }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="relative w-3/5 h-4/5 m-10 bg-white p-4">
        <Cropper
          image={imageSrc}
          crop={crop}
          zoom={zoom}
          aspect={4 / 3}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={onCropComplete}
        />
        <button
          onClick={onCrop}
          className="absolute bottom-4 left-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Crop
        </button>
        <button
          onClick={onCancel}
          className="absolute bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ImageCropper;
