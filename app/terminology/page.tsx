import Faq from "@/components/Faq";

const Page = () => {
  return (
    <div className="page-margin">
      <div className="text-center max-w-4xl mx-auto">
        <h1>Terminology</h1>
        <p className="mt-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus reiciendis
          doloribus perspiciatis dolorum cupiditate ratione iste repellat, earum autem, consequuntur
          praesentium at, sequi laudantium explicabo quibusdam reprehenderit quo iusto voluptatem?
        </p>
      </div>
      <div className="mt-16 max-w-screen-lg mx-auto">
        <Faq />
      </div>
    </div>
  );
};

export default Page;
