const Contact_Us = () => {
  return (
    <>
      <div className="  border-2 border-gray-300 shadow-lg mx-16 my-12 rounded-xl ">
        <p className=" my-12 text-4xl text-center tracking-wide font-semibold">
          Reach Us
        </p>
        <div className="  ">
          <div className=" max-w-[800px] mt-8 mx-40 grid grid-cols-[230px,1fr]">
            <div className="mb-10">
              <img src="src/assets/Account/icons8-email-48.png"></img>
            </div>
            <div className=" flex items-center mb-10">
              <p className=" font-medium text-xl text-blue-500">
                keyraya.info@gmail.com
              </p>
            </div>
            <div className="mb-10">
              <img src="src/assets/Account/icons8-phone-52.png"></img>
            </div>
            <div className=" flex items-center mb-10">
              <p className=" font-medium text-xl text-blue-500">
                +91-7969760909/+91-9163672088
              </p>
            </div>
            <div className="mb-10">
              <img src="src/assets/icons8-location-64.png"></img>
            </div>
            <div className=" flex items-center mb-10">
              <p className=" font-medium text-xl">
                Keyraya Nagasandra,<br></br> near Tumkur Road,<br></br>{" "}
                Bengaluru, Karnataka 560073
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact_Us;
