"use client";

import AboutMe from "@/components/about-me";
import ContactMe from "@/components/contact-me";
import Experience from "@/components/experience";
import MyCats from "@/components/my-cats";
import { motion, useAnimate } from "motion/react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Fragment, useEffect, useRef, useState } from "react";

const MacbookScene = dynamic(() => import("@/components/models/macbook"), {
  ssr: false,
});

const VERBS = [
  "Building",
  "Designing",
  "Developing",
  "Implementing",
  "Leading",
  "Transforming",
  "Engineering",
  "Transforming",
];
const NAMES = [
  "Products",
  "Brands",
  "Solutions",
  "Modern UIs",
  "Services",
  "Platforms",
  "Features",
  "Systems",
  "Tools",
];

const getRandomItem = (items: string[], curr: string[]) => {
  let new_word = items[Math.floor(Math.random() * items.length)];
  while (curr.includes(new_word)) {
    new_word = items[Math.floor(Math.random() * items.length)];
  }
  return new_word;
};

export default function Home() {
  const [hydrated, setHydrated] = useState(false);
  const [verb, setVerb] = useState(VERBS[0]);
  const [word1, setWord1] = useState(NAMES[0]);
  const [word2, setWord2] = useState(NAMES[1]);

  const [verbScope, animateVerb] = useAnimate();

  const myCatsParentRef = useRef();

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setVerb((prev) => {
        return getRandomItem(VERBS, [prev]);
      });

      let new_word_1 = getRandomItem(NAMES, [word1]);
      let new_word_2 = getRandomItem(NAMES, [word2]);
      while (new_word_1 == new_word_2) {
        new_word_1 = getRandomItem(NAMES, [word1]);
        new_word_2 = getRandomItem(NAMES, [word2]);
      }
      setWord1(new_word_1);
      setWord2(new_word_2);
    }, 3 * 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [hydrated]);

  return (
    <Fragment>
      <div className="flex flex-col justify-center my-8 md:my-22 min-h-[22rem]">
        <MacbookScene></MacbookScene>
      </div>

      <div className="flex flex-col justify-center items-center align-middle space-y-6 md:space-y-8 p-5 sm:p-0 min-h-[calc(100vh-40px-56px)] mt-12">
        <div className="flex flex-col justify-center items-center align-middle space-y-16 mt-6 md:mt-12 mb-12">
          <motion.div
            initial={{ scale: 1, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeIn", delay: 0.5 }}
            whileInView={{ scale: 1.3, opacity: 1 }}
          >
            <Image
              src="/me.jpg"
              alt="ollie_tan_avatar"
              width={128}
              height={128}
              className="rounded-full"
            ></Image>
          </motion.div>

          <div className="space-y-8 text-center">
            <motion.h4
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeIn", delay: 0.5 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="text-3xl"
            >
              Hi, I am Ollie.
            </motion.h4>
            {hydrated ? (
              <motion.h2
                initial={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeIn", delay: 0.5 }}
                whileInView={{ x: 0, opacity: 1 }}
                className="text-3xl md:text-6xl font-bold leading-relaxed"
              >
                <span ref={verbScope}>{verb}</span> {word1} & {word2}.
              </motion.h2>
            ) : (
              <Fragment></Fragment>
            )}
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
