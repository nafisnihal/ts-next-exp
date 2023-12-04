"use client";
import { useState } from "react";
// counter app
export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex items-center justify-center h-screen">
      <button
        onClick={() => setCount(count - 1)}
        className="p-2 bg-white text-black border border-black text-2xl"
      >
        -
      </button>
      <h1 className="px-4 py-2 bg-white text-black w-52 text-center text-5xl">
        {count}
      </h1>
      <button
        onClick={() => setCount(count + 1)}
        className="p-2 bg-white text-black border border-black text-2xl"
      >
        +
      </button>
    </div>
  );
}
