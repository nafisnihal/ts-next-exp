import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen gap-4">
      <Link href="/counter" className="px-4 py-2 bg-white text-black ">
        Go to Counter
      </Link>
      <Link href="/shop" className="px-4 py-2 bg-white text-black ">
        Go to Shop
      </Link>
    </div>
  );
}
