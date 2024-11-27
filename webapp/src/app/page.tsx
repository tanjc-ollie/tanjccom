import Image from "next/image";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <div className="flex flex-col justify-center items-center align-middle space-y-24 p-5 sm:p-0 min-h-[calc(100vh-40px-56px)]">
        <div className="flex flex-col justify-center items-center align-middle sm:flex-row space-x-5 space-y-5 sm:space-y-0 mt-10 md:mt-48">
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

        <div className="my-5"></div>

        <div className="rounded-md shadow-md bg-gray-800 p-5 flex flex-col space-y-5 max-w-[600px]">
          <h1 className="text-4xl font-semibold">About me</h1>
          <div className="">
            <p>
              Welcome to my little corner of the internet! I’m Ollie, a curious
              soul from Toronto, Canada, where I find joy in peaceful cities
              filled with delicious food, shopping malls, and streets aglow with
              light. These places not only feel like home but also spark my
              creativity and curiosity.
            </p>
            <p>
              When I’m not working, you’ll find me exploring my passions—playing
              Nintendo Switch games like Legend of Zelda, wandering through
              malls and night streets, capturing the world through photography,
              or immersing myself in the magic of art galleries. These
              activities feed my love for exploration and detail.
            </p>
            <p>
              One of my most cherished memories is traveling solo to Singapore
              in 2019, a journey that not only expanded my horizons but also
              deepened my understanding of myself. I’m constantly inspired by
              the interplay of people, art, and animals, all of which fuel my
              passion for creativity and connection.
            </p>
            <p>
              What makes me uniquely me? My deep self-awareness, a quality that
              helps me navigate life and relationships with authenticity. Right
              now, I’m excited to work on meaningful projects and find a career
              that I can truly devote myself to.
            </p>
            <p>
              Thanks for stopping by—I’d love to connect and share stories,
              ideas, or inspirations!
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
