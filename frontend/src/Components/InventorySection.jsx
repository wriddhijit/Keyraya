import Card from "./Card";

function InventorySection() {
  return (
    <>
      <div className="my-5 ">
        <div>
          <div className="mx-6">
            <p className="text-xl pl-10 font-semibold">Motorcycles Available</p>
          </div>
        </div>
        <div className="my-6 flex flex-wrap gap-y-10 justify-evenly min-h-screen p-2">
          <div className="">
            <Card />
            {/* item 1*/}
          </div>
          <div className="">
            <Card />
            {/* item 1*/}
          </div>
          <div className="">
            <Card />
            {/* item 1*/}
          </div>
          <div className="">
            <Card />
            {/* item 1*/}
          </div>
          <div className="">
            <Card />
            {/* item 1*/}
          </div>
          <div className="">
            <Card />
            {/* item 1*/}
          </div>
        </div>
      </div>
    </>
  );
}

export default InventorySection;
