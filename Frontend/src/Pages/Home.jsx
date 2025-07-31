import React, { useCallback, useState } from 'react'
import Navbar from '../components/Navbar'

import { useDropzone } from "react-dropzone";
import DragDrop from '@/components/DragDrop';


const Home = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  return (
    <div className="w-full flex  flex-col justify-center items-center gap-4 my-5 ">
      <div className="flex flex-col justify-center items-center">
        <div className="lg:text-4xl px-2 text-2xl pb-4 font-semibold text-center">
          Generate Quizzes from your PDF's.
        </div>
        <div className="text-center">
          Upload any PDF document and our AI will automatically generate
          engaging
        </div>
        <div className="text-center">
          multiple- choice questions to test comprehension.
        </div>
      </div>
      <div className="lg:w-3/4 bg-zinc-700  rounded-lg m-8 lg:p-10 p-4">
        <div
          className={`border border-dashed border-gray-400 p-4 rounded-xl flex justify-center items-center gap-4 flex-col m-3`}
        >
          <div className='w-full'>
             <DragDrop/>
         </div>
         
          <div className="flex flex-col items-center gap-2">
            <div className="text-2xl font-semibold">Uploaf your PDF</div>
            <div className="text-lg text-gray-300 text-center">
              Drag and drop PDF file here, or click here to browse
            </div>
          </div>
          <div>
            <button className="btn btn-sm md:btn-md lg:btn-lg xl:btn-xl btn-soft btn-primary">
              Upload
            </button>
          </div>
          <div className="flex flex-col items-center text-center text-gray-300 ">
            <div>Supported format : PDF (upto 50MB)</div>
            <div>Recommended : Text-based pdf works the best.</div>
          </div>
        </div>
        <hr className="mt-10 text-gray-400" />
        <div className="mx-3 pt-9 ">
          <span className="text-lg font-semibold">Quiz Settings</span>
          <div className="flex lg:flex-row flex-col items-center justify-around">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
              <legend className="fieldset-legend">Number of Questions</legend>
              <input
                type="text"
                className="input"
                placeholder="Enter number of questions"
              />
              <p className="label">Quiz will be generated on the based input</p>
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
              <legend className="fieldset-legend">Difficulty Level</legend>
              <select defaultValue="Pick a color" className="select w-3xs">
                <option className="w-xs" disabled={true}>
                  Choose difficulty level
                </option>
                <option className="w-3xs">Easy</option>
                <option className="w-3xs">Medium</option>
                <option className="w-3xs">Hard</option>
              </select>
              <p className="label">
                Quiz will be generated based on the selected level
              </p>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home
