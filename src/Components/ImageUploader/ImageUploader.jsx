import React, { useState } from "react";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";
import "./ImageUploader.css";

export default function ImageUploader({ onFileSelect }) {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No selected file");

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setImage(URL.createObjectURL(file));
      onFileSelect(file);
    }
  };

  return (
    <div>
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

        {image ? (
          <img className="uploaded-image" src={image} alt={fileName} />
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
          <h5 style={{ margin: "0rem 1rem" }}>{fileName}</h5>
        </div>
        <span className="upload-content">
          <MdDelete
            className="delete-btn"
            onClick={() => {
              setFileName("No selected File");
              setImage(null);
              onFileSelect(null); // Notify parent component about image removal
            }}
          />
        </span>
      </section>
    </div>
  );
}
