import { useState } from "react";

function Account() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <>
      <div className="flex justify-center  mt-16 mb-10">
        <div className=" flex flex-col w-[1300px] border-2 border-gray-300 shadow-lg px-5 py-3 rounded-xl">
          <div className=" fixed w-[500px] flex flex-col items-center justify-center ">
            <label
              htmlFor="file-upload"
              className="relative cursor-pointer bg-gray-200 rounded-lg p-4"
            >
              <span className=" text-lg font-semibold"> Upload Picture</span>
              <input
                id="photo"
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
            {selectedFile && (
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="Uploaded"
                className="mt-4 rounded-lg"
              />
            )}
            {/* picture */}
            {/* Name */}

            <p> Email</p>
          </div>
          <div className=" border-l h-full border-black px-4"></div>
          <div className=" h-[600px]"></div>
        </div>
      </div>
    </>
  );
}

export default Account;
