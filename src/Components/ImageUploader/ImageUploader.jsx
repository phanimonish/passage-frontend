import React, { useState, useEffect } from "react";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";
import "./ImageUploader.css";

export default function ImageUploader({ previousImageUrl, onFileSelect }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");

  // Display the previous image if it exists
  useEffect(() => {
    if (previousImageUrl) {
      setImagePreviewUrl(`http://localhost:5000/${previousImageUrl}`);
    }
  }, [previousImageUrl]);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      onFileSelect(file); // Send the selected file to the parent component
      setImagePreviewUrl(URL.createObjectURL(file)); // Update preview with the new image
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setImagePreviewUrl(""); // Clear the preview
    onFileSelect(null); // Notify parent component about image removal
  };

  return (
    <div className="image-uploader">
      <form
        className="image-uploader-container"
        onClick={() => document.querySelector(".input-field").click()}
      >
        <input
          type="file"
          accept="image/*"
          className="input-field"
          hidden
          onChange={handleFileSelect}
        />

        {imagePreviewUrl ? (
          <img className="uploaded-image" src={imagePreviewUrl} alt="Preview" />
        ) : (
          <>
            <MdCloudUpload color="#000" size={60} />
            <p>Browse Files to upload</p>
          </>
        )}
      </form>

      <section className="uploaded-row">
        <div className="uploaded-row-left">
          <AiFillFileImage color="#000" />
          <h5 style={{ margin: "0rem 1rem" }}>
            {selectedImage ? selectedImage.name : "No selected file"}
          </h5>
        </div>
        {imagePreviewUrl && (
          <span className="upload-content">
            <MdDelete className="delete-btn" onClick={handleRemoveImage} />
          </span>
        )}
      </section>
    </div>
  );
}
