"use client";
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

interface CloudianryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");

  return (
    <>
      {publicId && (
        <CldImage src={publicId} height={180} width={270} alt="uploadedImage" />
      )}

      <CldUploadWidget
        uploadPreset="nextappdemo"
        options={{
            sources: ['local'],
            multiple: false,
            maxFiles: 1,
        }}
        onSuccess={(result, widget) => {
          if (result.event !== "success") return;
          const info = result.info as CloudianryResult;
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
