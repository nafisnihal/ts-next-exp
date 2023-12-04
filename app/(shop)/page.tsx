import Link from "next/link";

export default function Shop() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Link href="/trending" className="bg-white text-black border-2">
        Trending
      </Link>
    </div>
  );
}
