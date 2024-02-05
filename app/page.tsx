import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-4xl">Welcome to the Crazy Counter Game</h1>
      <Link href="/counter" className="px-4 py-2 bg-white text-black ">
        Start
      </Link>
    </div>
  );
}
