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
          <li>Call to adventure</li>
          <li>Metaphysics</li>
          <li>The old man</li>
          <li>Define objectives</li>
          <li>Be doer of the word</li>
        </ul>
      </section>
    </>
  );
};

export default Home;
