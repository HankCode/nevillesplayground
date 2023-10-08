import { BsArrowRight } from "react-icons/bs";

const Home = () => {
  return (
    <>
      <section className="xmargin 2xl:pt-16 lg:pt-12 md:mt-16 pb-36 text-center md:max-w-5xl sm:max-w-xl sm:pt-20 2xl:max-w-4xl mx-auto max-w-[475px] pt-32">
        <h1 className="font-lora font-bold 2xl:text-9xl lg:text-8xl lg:leading-[110px] md:text-7xl md:leading-[95px] sm:leading-[70px] sm:text-6xl text-center mx-auto 2xl:leading-[150px] text-gray-400 text-5xl leading-[60px]">
          Manifest your <span className="font-extrabold text-gray-50">dream life</span> with Neville
        </h1>
        <p className="lg:text-xl 2xl:text-2xl lg:max-w-2xl md:text-lg md:max-w-3xl text-base mx-auto 2xl:max-w-4xl 2xl:mt-8 md:mt-6 sm:mt-4 lg:leading-8 sm:max-w-lg max-w-sm mt-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing. Quasi recusandae expedita numquam
          porro consequuntur reiciendis sed cum ex doloremque consectetur!
        </p>
        <button className="mt-10 sm:px-16 sm:py-2.5 2xl:px-32 2xl:py-5 py-2.5 px-12 lg:px-24 lg:py-4 md:px-20 md:py-3.5 rounded-full 2xl:mt-16 md:mt-10 lg:mt-12 bg-gradient-to-r from-prim1 to-orange-600 text-white">
          <div className="flex items-center gap-x-4">
            <span className="2xl:text-xl md:text-lg font-semibold tracking-wide">
              Start your journey here
            </span>
            <BsArrowRight className="lg:w-7 lg:h-7 w-5 h-5" />
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
