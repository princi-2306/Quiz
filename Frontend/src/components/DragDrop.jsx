import React, { useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FaCloudUploadAlt } from "react-icons/fa";
import * as pdfjsLib from "pdfjs-dist";

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;
function DragDrop(props) {
    const { required, name, onTextExtracted } = props;
  const [isUploaded, setIsUploaded] = useState(false);
   const [error, setError] = useState(null);
  const [text, setText] = useState("")
  const [isProcessing, setIsProcessing] = useState(false);
    const hiddenInputRef = useRef(null);

  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    accept: { 'application/pdf': ['.pdf'] },
    maxFiles : 1,
      onDrop: async (incomingFiles) => {
        try {
          setIsProcessing(true);
          setError(null);
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
          const extractedText = await extractTextFromPDF(incomingFiles[0]);
          console.log(incomingFiles);
          if (onTextExtracted) {
            onTextExtracted(extractedText);
          }
        } catch (error) {
          setError("Failed to process PDF file");
          console.error("PDF processing error:", err);
        } finally {
          setIsProcessing(false);
        }
      },
    });

    const files = acceptedFiles.map((file) => (
      <li key={file.path}>
        {file.path} - {file.size} bytes
      </li>
    ));
  
  const extractTextFromPDF = async (file) => {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;
    let fullText = "";

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      const pageText = textContent.items.map((item) => item.str).join(" ");
      fullText += pageText + "\n";
    }

    // setText(fullText);
      return fullText;
  };

  //  const handleFileChange = (event) => {
  //    const file = event.target.files[0];
  //    if (file) {
  //      extractTextFromPDF(file);
  //    }
  //  };


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
            accept=".pdf"
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
  };

export default DragDrop;
