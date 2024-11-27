import AboutMe from "@/components/about-me";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Fragment } from "react";

const MacbookScene = dynamic(() => import("@/components/models/macbook"), {
  ssr: false,
});

export default function Home() {
  return (
    <Fragment>
      <div className="flex flex-col justify-center my-8 md:my-16">
        <MacbookScene></MacbookScene>
        <span className="italic text-xs text-center">
          (Yes, this is my new Macbook Air, cool huh?)
        </span>
      </div>
      <div className="flex flex-col justify-center items-center align-middle space-y-24 p-5 sm:p-0 min-h-[calc(100vh-40px-56px)]">
        <div className="flex flex-col justify-center items-center align-middle sm:flex-row space-x-5 space-y-5 sm:space-y-0 mt-4 md:mt-12">
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

        <div className="rounded-md shadow-md bg-gray-800 p-5 flex flex-col space-y-5 max-w-[600px]">
          <AboutMe></AboutMe>
        </div>
      </div>
    </Fragment>
  );
}
