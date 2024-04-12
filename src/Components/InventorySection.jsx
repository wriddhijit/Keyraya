import Card from "./Card";

function InventorySection() {
  return (
    <>
      <div className="my-5 ">
        <div>
          <div>
            <p className="text-xl font-semibold">Motorcycles Available</p>
          </div>
        </div>
        <div className="my-6 grid md:grid-cols-3 grid-cols-2 gap-4 justify-items-center min-h-screen p-2">
          <div className="max-w-md border-2 border-gray-200 shadow-lg  rounded-xl">
            <Card />
            {/* item 1*/}
          </div>
          <div className="max-w-md border-2 border-gray-200 shadow-lg  rounded-xl">
            <Card />
            {/* item 1*/}
          </div>
          <div className=" max-w-md border-2 border-gray-200 shadow-lg  rounded-xl">
            <Card />
            {/* item 1*/}
          </div>
          <div className=" max-w-md border-2 border-gray-200 shadow-lg  rounded-xl">
            <Card />
            {/* item 1*/}
          </div>
        </div>
      </div>
    </>
  );
}

export default InventorySection;
