import Link from "next/link";

export default function Warning() {
  return (
    <div className="w-full border border-yellow-500 rounded-xl h-32 p-4 flex flex-col justify-between pb-5">
      <p className="text-yellow-400 font-semibold">
        Tugas kamu akan hilang saat kamu refresh halaman. Agar tugas-tugasmu
        tersimpan,
      </p>
      <div className="">
        <Link href="/login">
          <a className="py-2 px-4 rounded-full border-indigo-500 border text-indigo-500 hover:text-white hover:bg-indigo-500 transition-all duration-300 font-bold ">
            Login Sekarang
          </a>
        </Link>
      </div>
    </div>
  );
}
