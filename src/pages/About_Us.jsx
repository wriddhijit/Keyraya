

const About_Us = () => {
  return (
    <>
      
      <div className=" flex flex-col ">
        <div className="relative bg-black ">
          <img
            className=" h-[500px] w-[1850px] opacity-40"
            src="src/assets/aboutus.jpg"
          ></img>
          <div className=" absolute bottom-16 left-0 right-0  text-white text-center p-2 ">
            <div className="flex items-center justify-center ">
              <div className=" border-4 border-t border-white w-36 rounded-2xl"></div>
              <div className="mx-4 ">
                <p className="font-bold text-6xl">We are KEYRAYA</p>
              </div>
              <div className=" border-4 border-t border-white w-36 rounded-2xl"></div>
            </div>
          </div>
        </div>

        <div className="px-12">
          <p className="mt-8 mb-4 text-2xl font-semibold leading-tight ">
            The roar of an engine, the breeze on your head, the earth lying out
            ahead of you – that pretty much sums up what motorcycling is all
            about. We are more than just a rental company; we are your ticket to
            unforgettable journeys. Let us satisfy your craving for travel with
            a well-cared-for motorcycle and a promise of endless possibilities
          </p>
          <p>
            <ul className=" list-disc text-lg font-semibold">
              <li className="py-2">
                Our knowledgeable team is dedicated to making your rental
                experience smooth and enjoyable. From choosing the right bike to
                planning your route, we're here to help you make unforgettable
                memories.
              </li>
              <li className="py-2">
                Browse our diverse selection of motorcycles, from classic
                cruisers and nimble sportbikes to comfortable touring machines
                and off-road adventure bikes. We have something for every rider
                and every ride.
              </li>
              <li className="py-2">
                Your safety is our priority. All our motorcycles are rigorously
                maintained to the highest standards and come equipped with
                essential safety gear. Ride with confidence, knowing we've got
                your back.
              </li>
              <li className="py-2">
                We're not just about renting motorcycles; we're about fostering
                a community of passionate riders. Connect with like-minded
                adventurers, discover new routes, and share your love for the
                open road.
              </li>
            </ul>
          </p>
          <p className="mt-6 mb-6 font-semibold text-3xl">
            The rumble of an engine, the wind in your hair, the world unfurling
            before you – that's the essence of motorcycling. We're more than
            just a rental company; we're your gateway to unforgettable
            adventures. Let us fuel your wanderlust with a meticulously
            maintained motorcycle and the promise of endless possibilities.
            Browse our diverse selection of motorcycles, from classic cruisers
            and nimble sportbikes to comfortable touring machines and off-road
            adventure bikes. We have something for every rider and every ride.
          </p>
          <p>
            <ul className=" list-disc text-lg font-semibold">
              <li className="py-2">
                We are here to help you create never-to-be-forgotten
                experiences.
              </li>

              <li className="py-2">
                Our selection is extensive and includes various kinds of
                motorcycles such as traditional motorbikes, sporty bikes that
                can make sharp turns easily, comfortable bikes for long distance
                traveling and off-road bikes. We have all types of motorcycles
                for different riders and rides.
              </li>

              <li className="py-2">
                Your safety is very important to us. All our motorbikes are
                maintained strictly in compliance with the highest standards and
                are equipped with mandatory protective equipment. You’ll be
                secure knowing we’re always behind your back.
              </li>

              <li className="py-2">
                Motorcycles rent gets us going on a passion trail; it brings
                like-minded adventure seekers together where they can establish
                new paths and talk about their love for the open road.
              </li>
            </ul>
          </p>
        </div>
      </div>
      
    </>
  );
};

export default About_Us;
