import React, { useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FaCloudUploadAlt } from "react-icons/fa";

function DragDrop(props) {
  const { required, name } = props;
  const [isUploaded, setIsUploaded] = useState(false);
  
  const hiddenInputRef = useRef(null);

  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    onDrop: (incomingFiles) => {
      if (hiddenInputRef.current) {
        // Note the specific way we need to munge the file into the hidden input
        // https://stackoverflow.com/a/68182158/1068446
        const dataTransfer = new DataTransfer();
        incomingFiles.forEach((v) => {
          dataTransfer.items.add(v);
        });
        hiddenInputRef.current.files = dataTransfer.files;
      }
      setIsUploaded(true);
    },
  });

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div className="container w-full flex flex-col items-center justify-center">
      <div {...getRootProps({ className: "dropzone" })}>
        {/*
          Add a hidden file input 
          Best to use opacity 0, so that the required validation message will appear on form submission
        */}
        <input
          type="file"
          name={name}
          required={required}
          style={{ opacity: 0 }}
          ref={hiddenInputRef}
        />
        <input {...getInputProps()} />
        <div>
          {isUploaded ? (
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Adobe-Icon_AcrobatRes_Filetype_PDF.png"
              alt=""
            />
          ) : (
            <FaCloudUploadAlt className="w-40 h-40" />
          )}
        </div>
        <button
          className="btn btn-sm md:btn-md lg:btn-lg xl:btn-xl btn-soft btn-primary"
          type="button"
          onClick={open}
        > 
          Browse files
        </button>
      </div>
      <aside>
        <ul>{files}</ul>
      </aside>
    </div>
  );
}

export default DragDrop;
