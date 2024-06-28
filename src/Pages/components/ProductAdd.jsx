import React, { useState, useCallback } from "react";
import CustomDropdown from "./CustomDropdown";
import Cropper from "react-easy-crop";
import { AiFillCloseCircle } from "react-icons/ai";

const ProductAdd = ({ onSubmit }) => {
  const [product, setProduct] = useState({
    title: "",
    category: "",
    price: "",
    description: "",
    stock: "",
    metal: "",
    weight: "",
    length: "",
    width: "",
    ringSize: "",
    color: "",
    stone: "",
    gender: "",
    review: "",
    style: "",
    images: [null, null, null, null], // Initialize with placeholders for 4 image slots
  });
  const [cropping, setCropping] = useState(false);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [imageIndex, setImageIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = async (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImageSrc(reader.result);
        setImageIndex(index);
        setCropping(true);
      };
    }
  };

  const handleImageRemove = (e, index) => {
    e.stopPropagation();
    e.preventDefault();
    const updatedImages = [...product.images];
    updatedImages[index] = null; // Set the specific index to null instead of splicing
    setProduct({ ...product, images: updatedImages });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(product);
    setProduct({
      title: "",
      category: "",
      price: "",
      description: "",
      stock: "",
      metal: "",
      weight: "",
      length: "",
      width: "",
      ringSize: "",
      color: "",
      stone: "",
      gender: "",
      review: "",
      style: "",
      images: [null, null, null, null],
    });
  };

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const getCroppedImg = async (imageSrc, croppedAreaPixels) => {
    const image = new Image();
    image.src = imageSrc;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = croppedAreaPixels.width;
    canvas.height = croppedAreaPixels.height;

    ctx.drawImage(
      image,
      croppedAreaPixels.x,
      croppedAreaPixels.y,
      croppedAreaPixels.width,
      croppedAreaPixels.height,
      0,
      0,
      croppedAreaPixels.width,
      croppedAreaPixels.height
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          reject(new Error("Canvas is empty"));
          return;
        }
        const fileUrl = URL.createObjectURL(blob);
        resolve(fileUrl);
      }, "image/jpeg");
    });
  };

  const handleCrop = async () => {
    try {
      const croppedImageUrl = await getCroppedImg(imageSrc, croppedAreaPixels);
      const updatedImages = [...product.images];
      updatedImages[imageIndex] = croppedImageUrl;
      setProduct({ ...product, images: updatedImages });
      setCropping(false);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      {cropping && (
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
              onClick={handleCrop}
              className="absolute bottom-4 left-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Crop
            </button>
            <button
              onClick={() => setCropping(false)}
              className="absolute bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit} className="max-w-5xl m-auto">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          <div className="grid grid-cols-3 md:grid-cols-3 gap-6">
            <input
              type="text"
              name="title"
              value={product.title}
              onChange={handleChange}
              placeholder="Product Name"
              className="p-3 border-none rounded-lg bg-gray-200"
            />
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              placeholder="Price"
              className="p-3 border-none rounded-lg bg-gray-200"
            />
            <input
              type="number"
              name="review"
              value={product.review}
              onChange={handleChange}
              placeholder="Review"
              className="p-3 border-none rounded-lg bg-gray-200"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1">
            <textarea
              name="description"
              value={product.description}
              onChange={handleChange}
              placeholder="Product Description"
              className="p-3 border-none rounded-lg bg-gray-200"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 font-bold gap-4 my-4">
          <input
            type="number"
            name="stock"
            value={product.stock}
            onChange={handleChange}
            placeholder="Stock"
            className="p-3 border-none rounded-lg bg-gray-200"
          />
          <CustomDropdown
            label="Category"
            options={[
              { label: "Tops", value: "tops" },
              { label: "Bottoms", value: "bottoms" },
              { label: "Dresses", value: "dresses" },
              { label: "Accessories", value: "accessories" },
            ]}
            name="category"
            value={product.category}
            onChange={handleChange}
          />
          <CustomDropdown
            label="Weight"
            options={[
              { label: "100g", value: "100g" },
              { label: "200g", value: "200g" },
              { label: "300g", value: "300g" },
              { label: "400g", value: "400g" },
              { label: "500g", value: "500g" },
            ]}
            name="weight"
            value={product.weight}
            onChange={handleChange}
          />
          <CustomDropdown
            label="Length"
            options={[
              { label: "100cm", value: "100cm" },
              { label: "200cm", value: "200cm" },
              { label: "300cm", value: "300cm" },
              { label: "400cm", value: "400cm" },
              { label: "500cm", value: "500cm" },
            ]}
            name="length"
            value={product.length}
            onChange={handleChange}
          />
          <CustomDropdown
            label="Width"
            options={[
              { label: "100cm", value: "100cm" },
              { label: "200cm", value: "200cm" },
              { label: "300cm", value: "300cm" },
              { label: "400cm", value: "400cm" },
              { label: "500cm", value: "500cm" },
            ]}
            name="width"
            value={product.width}
            onChange={handleChange}
          />
          <CustomDropdown
            label="Ring Size"
            options={[
              { label: "5", value: "5" },
              { label: "6", value: "6" },
              { label: "7", value: "7" },
              { label: "8", value: "8" },
              { label: "9", value: "9" },
            ]}
            name="ringSize"
            value={product.ringSize}
            onChange={handleChange}
          />
          <CustomDropdown
            label="Stone"
            options={[
              { label: "Diamond", value: "diamond" },
              { label: "Ruby", value: "ruby" },
              { label: "Sapphire", value: "sapphire" },
              { label: "Emerald", value: "emerald" },
              { label: "Topaz", value: "topaz" },
            ]}
            name="stone"
            value={product.stone}
            onChange={handleChange}
          />

          <CustomDropdown
            label="Metal"
            options={[
              { label: "Gold", value: "gold" },
              { label: "Silver", value: "silver" },
              { label: "Platinum", value: "platinum" },
              { label: "Titanium", value: "titanium" },
              { label: "Rose Gold", value: "rose gold" },
            ]}
            name="metal"
            value={product.metal}
            onChange={handleChange}
          />
          <CustomDropdown
            label="Style"
            options={[
              { label: "Modern", value: "modern" },
              { label: "Vintage", value: "vintage" },
              { label: "Classic", value: "classic" },
              { label: "Retro", value: "retro" },
              { label: "Bohemian", value: "bohemian" },
            ]}
            name="style"
            value={product.style}
            onChange={handleChange}
          />
          <CustomDropdown
            label="Gender"
            options={[
              { label: "Male", value: "M" },
              { label: "Female", value: "F" },
            ]}
            name="gender"
            value={product.gender}
            onChange={handleChange}
          />
          <CustomDropdown
            label="Size"
            options={[
              { label: "Small", value: "S" },
              { label: "Medium", value: "M" },
              { label: "Large", value: "L" },
              { label: "Extra Large", value: "XL" },
              { label: "XXL", value: "XXL" },
            ]}
            name="size"
            value={product.size}
            onChange={handleChange}
          />
          <CustomDropdown
            label="Color"
            options={[
              { label: "Red", value: "red" },
              { label: "Green", value: "green" },
              { label: "Blue", value: "blue" },
            ]}
            name="color"
            value={product.color}
            onChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-8 gap-5 mt-4">
          <div className="col-span-6 bg-gray-200 p-2 h-full">
            {product.images[0] ? (
              <div className="relative h-full">
                <img
                  src={product.images[0]}
                  alt="Main product"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={(e) => handleImageRemove(e, 0)}
                  className="text-red-500 absolute top-1 right-1"
                >
                  <AiFillCloseCircle size={24} />
                </button>
              </div>
            ) : (
              <label
                htmlFor="main-image-upload"
                className="cursor-pointer h-full w-full flex items-center justify-center"
              >
                <div className="py-1 px-3 bg-blue-500 text-white rounded-md">
                  + Select Image
                </div>
              </label>
            )}
            <input
              type="file"
              onChange={(e) => handleImageChange(e, 0)}
              className="hidden"
              id="main-image-upload"
            />
          </div>
          <div className="col-span-2 flex flex-col gap-5">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="bg-gray-200 p-2 h-full relative">
                {product.images[index + 1] ? (
                  <div className="relative h-full">
                    <img
                      src={product.images[index + 1]}
                      alt={`image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={(e) => handleImageRemove(e, index + 1)}
                      className="text-red-500 absolute top-1 right-1"
                    >
                      <AiFillCloseCircle size={24} />
                    </button>
                  </div>
                ) : (
                  <label
                    htmlFor={`image-upload-${index + 1}`}
                    className="cursor-pointer text-blue-500 h-full w-full flex items-center justify-center"
                  >
                    <div className="py-1 px-3 bg-blue-500 text-white rounded-md">
                      + Select Image
                    </div>
                  </label>
                )}
                <input
                  type="file"
                  onChange={(e) => handleImageChange(e, index + 1)}
                  className="hidden"
                  id={`image-upload-${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 px-8 bg-blue-500 text-white rounded-lg"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default ProductAdd;
