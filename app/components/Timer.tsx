import { useEffect } from "react";

interface TimerProps {
  time: number;
  setTime: (time: number) => void;
}

export default function Timer({ time, setTime }: TimerProps) {
  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time]);
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-black font-semibold bg-white px-2 py-1 mt-5 rounded">
        {`00:${time < 10 ? "0" + time : time}`}
      </h1>
      {time === 0 && (
        <h1 className="text-red-500 font-semibold bg-white px-2 py-1 mt-2 rounded">
          {`Time's Up!`}
        </h1>
      )}
    </div>
  );
}
