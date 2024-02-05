"use client";
import { useEffect, useState } from "react";
// counter app
export default function Counter() {
  const [count, setCount] = useState(0);
  const [random1, setRandom1] = useState(0);
  const [random2, setRandom2] = useState(0);

  const randomNumber1 = Math.floor(Math.random() * 600);

  const randomNumber2 = Math.floor(Math.random() * 1500);

  const string1 = random1.toString();

  const string2 = random2.toString();

  useEffect(() => {
    setTimeout(() => {
      setRandom1(randomNumber1);
      setRandom2(randomNumber2);
    }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [random1]);

  return (
    <div className="flex items-center justify-center h-screen relative cursor-pointer">
      <div
        className={`h-52 w-52 bg-white absolute text-black flex items-center justify-center flex-col rounded cursor-grab`}
        style={{
          top: `${string1}px`,
          left: `${string2}px`,
          userSelect: "none",
        }}
        onClick={() => setCount(count + 1)}
      >
        <p>Catch Me!</p>
        <h1
          className={`px-4 py-2 bg-white ${
            count >= 20
              ? "text-green-600"
              : count >= 10
              ? "text-yellow-400"
              : "text-red-500"
          }  w-52 text-center text-5xl`}
        >
          {count}
        </h1>
        <p>If You Can</p>
      </div>
    </div>
  );
}
