function Checkout() {
  return (
    <>
      <div className="flex justify-center my-16">
        <div className=" w-[1200px] h-[600px] border-2 border-gray-300 shadow-xl rounded-xl">
          <div>
            <p className=" text-4xl text-balance pl-[160px] py-6">Checkout</p>
          </div>
          <div className="grid grid-cols-[500px,700px]">
            <div className="flex flex-col items-center pl-2">
              <img src="https://th.bing.com/th/id/OIP.4oi5fQiZUJmoTLK-2OuYGAHaFS?rs=1&pid=ImgDetMain"></img>
              <p className="pt-4 text-2xl">
                {" "}
                Royal Enfield Continental GT 650 {/* Bike Name */}
              </p>
            </div>
            <div className=" flex flex-col pl-2 pr-8 justify-evenly">
              <div className="flex felx-row justify-evenly">
                <div>
                  {/* FromTIme */}
                  fromtime
                </div>
                <div className=" p-2 w-8 h-8 rounded-full border-2 border-gray-200 shadow-lg bg-white">
                  {/* TO */}
                  <img src="https://th.bing.com/th/id/R.0673093bbfcecc10fc43a2e61243415c?rik=qmA2sEFmCjuKWQ&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2ftransparent-arrow-image%2ftransparent-arrow-image-3.png&ehk=q1%2b6xULlNSs6PGgvTMuuC9MdpzUXg186xJS2kWhEoj8%3d&risl=&pid=ImgRaw&r=0"></img>
                </div>
                <div>{/* ToTIme */} To time</div>
              </div>
              <div className="border-b border-black"></div>
              <div>
                <div className="flex flex-row justify-between">
                  <div>
                    <p className="text-xl">
                      {" "}
                      Base Fare:
                      {/* Time Duration */}{" "}
                    </p>
                  </div>
                  <div>{/* Base price */}</div>
                </div>
                <div>
                  <p> Excess KM Charges: {/* Extra KM */}</p>
                </div>
              </div>

              <div className="flex flex-row justify-between">
                <div>
                  <p className="text-4xl ">Total</p>
                </div>
                <div>{/* Total price */}</div>
              </div>
              <div className="flex justify-center mt-">
                <button className="bg-red-600 w-[600px] text-white text-xl tracking-wider px-4 py-2 rounded-lg hover:bg-red-800">
                  Make Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Checkout;