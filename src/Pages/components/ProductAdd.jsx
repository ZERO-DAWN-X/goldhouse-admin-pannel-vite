import React, { useState } from "react";
import CustomDropdown from "./CustomDropdown";

const ProductAdd = ({ onSubmit }) => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    size: "",
    color: "",
    price: "",
    stock: "",
    discount: "",
    category: "",
    images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const updatedImages = [...product.images];
      updatedImages[index] = URL.createObjectURL(file);
      setProduct({ ...product, images: updatedImages });
    }
  };

  const handleImageRemove = (index) => {
    const updatedImages = product.images.filter((_, i) => i !== index);
    setProduct({ ...product, images: updatedImages });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(product);
    setProduct({
      name: "",
      description: "",
      size: "",
      color: "",
      price: "",
      stock: "",
      discount: "",
      category: "",
      images: [],
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-5xl m-auto">
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Product Name"
          className="p-3 border-none rounded-lg bg-gray-200"
        />
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          placeholder="Product Description"
          className="p-3 border-none rounded-lg bg-gray-200"
          style={{
            height: `${
              Math.max(3, Math.ceil(product.description.length / 50)) * 4.8
            }rem`,
          }}
        />
      </div>
      <div className="grid grid-cols-3 font-bold gap-4 my-4">
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
        <CustomDropdown
          label="Material"
          options={[
            { label: "Cotton", value: "cotton" },
            { label: "Polyester", value: "polyester" },
            { label: "Wool", value: "wool" },
            { label: "Silk", value: "silk" },
            { label: "Leather", value: "leather" },
          ]}
          name="category"
          value={product.category}
          onChange={handleChange}
        />
      </div>
      <div className="grid grid-cols-8 gap-5 mt-4">
        <div className="col-span-6 bg-gray-200 p-2 h-full">
          {product.images[0] ? (
            <img
              src={product.images[0]}
              alt="Main product"
              className="w-full h-full object-cover"
            />
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
            <div key={index} className="bg-gray-200 p-2 h-32 relative">
              {product.images[index + 1] ? (
                <img
                  src={product.images[index + 1]}
                  alt={`image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
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
              {product.images[index + 1] && (
                <button
                  onClick={() => handleImageRemove(index + 1)}
                  className="text-red-500 absolute top-1 right-1"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
      <button
        type="submit"
        className="mt-4 px-8 bg-blue-500 text-white rounded-lg"
      >
        Publish Your Listing
      </button>
    </form>
  );
};

export default ProductAdd;
