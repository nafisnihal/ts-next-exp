"use client";
import { useEffect, useState } from "react";
import Timer from "../components/Timer";
// counter app
export default function Counter() {
  const [count, setCount] = useState(0);
  const [random1, setRandom1] = useState(0);
  const [random2, setRandom2] = useState(0);
  const [trigger, setTrigger] = useState(0);
  const [time, setTime] = useState(60);

  useEffect(() => {
    const randomNumber1 = Math.floor(Math.random() * 80);
    const randomNumber2 = Math.floor(Math.random() * 80);
    setTimeout(() => {
      setRandom1(randomNumber1);
      setRandom2(randomNumber2);
      setTrigger((prev) => prev + 1);
    }, 600);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger]);

  return (
    <>
      <Timer time={time} setTime={setTime} />
      {time > 0 && (
        <div className="flex items-center justify-center h-screen relative cursor-pointer">
          <div
            className={`p-1 w-24 md:p-0 md:h-32 md:w-32 bg-white absolute text-black flex items-center justify-center flex-col rounded cursor-grab`}
            style={{
              top: `${random1}%`,
              left: `${random2}%`,
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
              }  md:w-42 text-center text-xl md:text-5xl`}
            >
              {count}
            </h1>
            <p>If You Can</p>
          </div>
        </div>
      )}
      {time === 0 && (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1
            className={`px-4 py-2 bg-white ${
              count >= 20
                ? "text-green-600"
                : count >= 10
                ? "text-yellow-400"
                : "text-red-500"
            } text-5xl text-center`}
          >
            {`Your Score: ${count}`}
          </h1>
          <p className="mt-2">
            {count >= 20
              ? "You are a Pro!"
              : count >= 10
              ? "You are a Beginner!"
              : "You can do better!"}
          </p>
          <button
            className="px-3 py-2 bg-white text-black rounded mt-10"
            onClick={() => {
              setCount(0);
              setTime(60);
            }}
          >
            Lets start once more!
          </button>
        </div>
      )}
    </>
  );
}
