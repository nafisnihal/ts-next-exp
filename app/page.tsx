import Image from "next/image";
import Link from "next/link";
import avatar from "../public/avatar.png";

export default function Home() {
  return (
    <div className="flex flex-col items-center px-1 mt-20 md:mt-0 justify-center md:h-screen gap-4">
      <h1 className="text-4xl text-center">
        Welcome to the Crazy Counter Game
      </h1>
      <Image src={avatar} alt="avatar" className="w-80 " />
      <Link
        href="/catch"
        className="px-4 py-2 bg-white text-black rounded font-semibold"
      >
        {`Let's Start`}
      </Link>
    </div>
  );
}
