import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Collapse } from "react-collapse";

type PropTypes = {
  qa: { question: String; answer: String };
  toggle: any;
  open: any;
};

const FaqItem = ({ qa, open, toggle }: PropTypes) => {
  return (
    <>
      <div
        className={`${
          open ? "bg-gray-600" : "bg-gray-700"
        } transition-all rounded-[13px] px-6 py-5 cursor-pointer shadow-xl`}
        onClick={toggle}
      >
        <div className="flex items-center justify-between">
          <h4>{qa.question}</h4>
          {open ? <AiOutlineMinus className="w-6 h-6" /> : <AiOutlinePlus className="w-6 h-6" />}
        </div>

        <Collapse isOpened={open}>
          <p
            className={`${
              open ? "bg-gray-600" : "bg-gray-700"
            } transition-all rounded-large pt-4 cursor-pointer`}
          >
            {qa.answer}
          </p>
        </Collapse>
      </div>
    </>
  );
};

export default FaqItem;
