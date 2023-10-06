import { BsArrowRight } from "react-icons/bs";

const Home = () => {
  return (
    <>
      <section className="pt-44 pb-36 text-center">
        <h1 className="font-lora font-bold 2xl:text-9xl text-7xl text-center mx-auto max-w-4xl 2xl:leading-[150px] text-gray-400">
          Manifest your <span className="font-extrabold text-gray-50">dream life</span> with Neville
        </h1>
        <p className="text-xl mx-auto max-w-4xl mt-8 leading-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing. Quasi recusandae expedita numquam
          porro consequuntur reiciendis sed cum ex doloremque consectetur!
        </p>
        <button className="px-32 py-5 rounded-full mt-16 bg-gradient-to-r from-prim1 to-orange-600 text-white">
          <div className="flex items-center gap-x-4">
            <span className=" text-xl font-semibold tracking-wide">Start your journey here</span>
            <BsArrowRight className="w-7 h-7" />
          </div>
        </button>
      </section>
      <section>
        <ul className="flex flex-col gap-y-10 text-xl font-medium text-center">
          <li>
            <h3>Burning desire</h3>
            <p>God speak to men through the medium of his basic desires.</p>
          </li>

          <li>
            {" "}
            <h3> Metaphysics</h3>
          </li>
          <li>
            {" "}
            <h3> The old man</h3>
          </li>
          <li>
            {" "}
            <h3> Define objectives</h3>
          </li>
          <li>
            {" "}
            <h3> Be doer of the word</h3>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Home;
