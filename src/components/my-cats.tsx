"use client";

import Image from "next/image";
import { Fragment, MutableRefObject, useEffect, useState } from "react";

export default function MyCats({
  parentRef,
}: {
  parentRef: MutableRefObject<undefined>;
}) {
  const [cats, setCats] = useState<string[]>([]);
  //@ts-ignore
  const [parentWidth, setParentWidth] = useState(0);

  const onResize = () => {
    setParentWidth(() => {
      //@ts-ignore
      return parentRef.current.offsetWidth - 40; // padding 20 x 2
    });
  };

  useEffect(() => {
    const numbers = Array.from({ length: 12 }, (_, i) => i + 1);

    for (let i = numbers.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[randomIndex]] = [numbers[randomIndex], numbers[i]];
    }

    setCats(() => {
      return numbers.map((num) => `cat_${num}.png`);
    });

    onResize();

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <Fragment>
      <h1 className="text-4xl font-semibold">My cats</h1>
      <div className="grid grid-cols-3">
        {cats.map((cat, index) => {
          return (
            <Image
              key={index}
              src={`/${cat}`}
              alt={`${cat}`}
              width={parentWidth / 3}
              height={parentWidth / 3}
            ></Image>
          );
        })}
      </div>
    </Fragment>
  );
}
