import Card1 from "./Card1";

function InventorySection_() {
  return (
    <>
      <div className="my-5 ">
        <div>
          <div className="mx-6">
            <p className="text-3xl pl-10 font-semibold">
              Motorcycles Available
            </p>
          </div>
        </div>
        <div className="my-6 flex flex-wrap gap-y-10 justify-evenly min-h-screen p-2">
          <div className=" ">
            <Card1 />
            {/* item 1*/}
          </div>
          <div className=" ">
            <Card1 />
            {/* item 1*/}
          </div>
          <div className="">
            <Card1 />
            {/* item 1*/}
          </div>
          <div className=" ">
            <Card1 />
            {/* item 1*/}
          </div>
          <div className=" ">
            <Card1 />
            {/* item 1*/}
          </div>
          <div className=" ">
            <Card1 />
            {/* item 1*/}
          </div>
        </div>
      </div>
    </>
  );
}

export default InventorySection_;
