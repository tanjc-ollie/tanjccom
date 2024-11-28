"use client";

import AboutMe from "@/components/about-me";
import ContactMe from "@/components/contact-me";
import Experience from "@/components/experience";
import MyCats from "@/components/my-cats";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Fragment, useRef } from "react";

const MacbookScene = dynamic(() => import("@/components/models/macbook"), {
  ssr: false,
});

export default function Home() {
  const myCatsParentRef = useRef();

  return (
    <Fragment>
      <div className="flex flex-col justify-center my-8 md:my-22">
        <MacbookScene></MacbookScene>
        <span className="italic text-xs text-center">
          (This is my new Macbook Air, cool huh? Try giving it a spin!)
        </span>
      </div>
      <div className="flex flex-col justify-center items-center align-middle space-y-10 md:space-y-12 p-5 sm:p-0 min-h-[calc(100vh-40px-56px)] mt-12">
        <div className="flex flex-col justify-center items-center align-middle sm:flex-row space-x-5 space-y-10 sm:space-y-0 mt-4 md:mt-12 mb-12">
          <Image
            src="/me.jpg"
            alt="ollie_tan_avatar"
            width={128}
            height={128}
            className="rounded-full"
          ></Image>
          <div className="space-y-5">
            <h4 className="text-2xl">Hi, I am Ollie.</h4>
            <h2 className="text-4xl font-bold">Building products & brands.</h2>
          </div>
        </div>

        <div className="rounded-md shadow-md bg-gray-800 p-5 flex flex-col space-y-5 w-full md:w-[600px]">
          <AboutMe></AboutMe>
        </div>

        <div
          //@ts-ignore
          ref={myCatsParentRef}
          className="rounded-md shadow-md bg-gray-800 p-5 flex flex-col space-y-5 w-full md:w-[600px]"
        >
          <MyCats parentRef={myCatsParentRef}></MyCats>
        </div>

        {/* <div className="rounded-md shadow-md bg-gray-800 p-5 flex flex-col space-y-5 w-full md:w-[600px]">
          <Experience></Experience>
        </div> */}

        <div className="rounded-md shadow-md bg-gray-800 p-5 flex flex-col space-y-5 w-full md:w-[600px]">
          <ContactMe></ContactMe>
        </div>
      </div>
    </Fragment>
  );
}
