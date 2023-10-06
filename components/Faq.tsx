"use client";

import { useState } from "react";
import FaqItem from "./FaqItem";
import { AiOutlineSearch } from "react-icons/ai";

const qa = [
  {
    question: "Let the dead bury the dead",
    answer:
      "Dead Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam vel impedit cupiditate reiciendis consectetur? Repudiandae neque dolor a repellat minima laboriosam maiores assumenda! Quia iure eaque repellendus at molestias ipsam.",
  },
  {
    question: "Sin",
    answer:
      "Sin Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam vel impedit cupiditate reiciendis consectetur? Repudiandae neque dolor a repellat minima laboriosam maiores assumenda! Quia iure eaque repellendus at molestias ipsam.",
  },
  {
    question: "The Sabbath",
    answer:
      "Sabb Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam vel impedit cupiditate reiciendis consectetur? Repudiandae neque dolor a repellat minima laboriosam maiores assumenda! Quia iure eaque repellendus at molestias ipsam.",
  },
  {
    question: "Everyone is you pushed out",
    answer:
      "Everyone Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam vel impedit cupiditate reiciendis consectetur? Repudiandae neque dolor a repellat minima laboriosam maiores assumenda! Quia iure eaque repellendus at molestias ipsam.",
  },
];

const Faq = () => {
  const [open, setOpen] = useState<any>(false);
  const [query, setQuery] = useState<string>("");

  const toggle = (index: any) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  return (
    <div className="flex flex-col gap-y-16">
      <div className="relative">
        <input
          type="text"
          placeholder="Search term"
          className="py-4 px-7 border-gray-500 border bg-transparent placeholder:text-gray-300 rounded-full w-full absolute top-0 left-0"
          onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())}
        />
        <AiOutlineSearch className="w-5 h-5 absolute right-5 top-5" />
      </div>

      <div className="flex flex-col gap-y-4 mt-6">
        {qa
          .filter((searchData) => searchData.question.toLocaleLowerCase().includes(query))
          .map((qa: { question: String; answer: String }, index) => {
            return (
              <FaqItem qa={qa} open={open === index} toggle={() => toggle(index)} key={index} />
            );
          })}
      </div>
    </div>
  );
};

export default Faq;
