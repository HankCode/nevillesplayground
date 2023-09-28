"use client";

import React, { useState, useRef } from "react";
import { AiFillInstagram, AiFillFacebook, AiFillYoutube } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setTimeout(() => {
      console.log("Hello world!");
    }, 2000);
    setLoading(false);
  }

  return (
    <section className="text-center h-screen max-w-[1000px] mx-auto flex items-center justify-center">
      <div className="px-4 pb-32 md:pb-0">
        <div className="md:w-[475px] w-[275px] mx-auto">
          <img src="/np_logo_full_med.png" alt="Nevilles Playground Logotype" />
        </div>
        {/* <div className='md:mt-4 mt-3'>
        <div className='display-1 text-red-500 typewriter'>{quote}</div>
      </div> */}
        <div className="md:text-base text-sm mt-4 md:mt-6 text-gray-400">
          Fill in your e-mail to get news and updates
        </div>
        <div className="rounded-full bg-transparent border-2 border-prim1 md:p-2 p-1 flex items-center gap-x-0 w-full mt-1">
          <input
            required
            name="email"
            type="email"
            className="w-full bg-transparent bg-opacity-50 rounded-full border border-transparent outline-none py-1 px-3 leading-8 
          transition-colors duration-200 ease-in-out text-gray-300 text-base placeholder-gray-500 
          focus:placeholder-transparent focus:ml-5 italic tracking-wide text-center focus:text-left placeholder:text-base"
            placeholder="Fill in your e-mail to get news and updates about the development"
            id="email-input"
            ref={inputRef}
          />

          <button
            className="font-semibold font-sofiapro uppercase md:text-[16px] text-[12px] tracking-wider text-white md:px-5 md:py-3 px-3 py-3 
        bg-gradient-to-b from-prim1 to-prim2 rounded-full whitespace-nowrap hover:text-gray-600 hover:bg-white"
            onClick={handleSubmit}
            disabled={loading === true}
          >
            Sign me up
          </button>
        </div>

        <p className="text-center mx-auto md:mt-6 mt-4 md:text-base text-sm text-gray-400 max-w-3xl md:px-6">
          Nevilles Playground will be a digital platform and a social community with the mission of
          helping individuals find meaning and joy in their lives through implementing the teachings
          of the 20th century mystic Neville Goddard.
        </p>
        <div className="flex items-center justify-center gap-x-3 mt-4 md:mt-6">
          <a href="https://www.instagram.com/nevillesplayground/" target="_blank" rel="noreferrer">
            <div className="md:w-14 md:h-14 h-10 w-10 flex items-center justify-center bg-white rounded-lg">
              <AiFillInstagram
                className="md:text-[45px] text-[30px] hover:text-prim1 cursor-pointer"
                style={{ color: "#833AB4" }}
              />
            </div>
          </a>
          <a
            href="https://www.facebook.com/groups/734730403843670"
            target="_blank"
            rel="noreferrer"
          >
            <div className="md:w-14 md:h-14 h-10 w-10 flex items-center justify-center bg-white rounded-lg">
              <AiFillFacebook
                className="md:text-[45px] text-[30px] hover:text-prim1 cursor-pointer"
                style={{ color: "#3b5998" }}
              />
            </div>
          </a>
          <a
            href="https://www.youtube.com/channel/UCMi_gSy9_D0G5MoT7cYre8A"
            target="_blank"
            rel="noreferrer"
          >
            <div className="md:w-14 md:h-14 h-10 w-10 flex items-center justify-center bg-white rounded-lg">
              <AiFillYoutube
                className="md:text-[45px] text-[30px] hover:text-prim1 cursor-pointer"
                style={{ color: "#c4302b" }}
              />
            </div>
          </a>
        </div>
      </div>
      {/* <div className="pt-6 flex items-center mx-auto justify-center text-gray-400">
        <div className="md:text-lg text-sm">
          If you wan't to contribute to this project, or just connect with our growing community,
          come and chat with us on our:
        </div>
      </div>

      <button className="px-4 py-2 bg-white mx-auto mt-5 rounded-lg flex items-center gap-x-2">
        <BsDiscord className="md:text-4xl text-3xl text-indigo-500 mx-auto" />
        <a href="https://discord.gg/m2TYcGftxS" target="_blank" rel="noreferrer">
          <div className="md:text-lg text-base whitespace-nowrap font-semibold font-sofiapro text-indigo-500 uppercase">
            Discord Server
          </div>
        </a>
      </button> */}
    </section>
  );
}
