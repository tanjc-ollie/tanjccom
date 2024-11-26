import Image from "next/image";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <div className="flex flex-col justify-center items-center align-middle space-y-24 p-3 sm:p-0 min-h-[calc(100vh-40px-56px)]">
        <div className="flex flex-col sm:flex-row space-x-5 space-y-5 sm:space-y-0">
          <Image
            src="/images/me.jpg"
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
          <h1 className="text-4xl font-semibold">About me</h1>
          <div className="">
            <p>
              I have been working as a software developer specializing in
              full-stack web development.
            </p>
            <p>
              Graduated with a bachelor in Information Technology in 2017, I
              sought my dream in software development.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
