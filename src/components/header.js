import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <nav className="w-full z-50 flex items-center justify-between pt-6 px-6 md:px-[15vw]">

        <div className="">
            <Image
              src='/ezoft.png'
              width={110}
              height={105}
            />
        </div>


        <section className="flex items-center gap-4 md:gap-10">

          <a href="#" className="px-3 md:px-6 py-2 bg-black text-white text-sm md:text-lg rounded-[4px]">
            ¡Contactenos!
          </a>

          <button>
            <div className="flex flex-col gap-2">
              <div className="h-0.5 w-8 bg-black"></div>
              <div className="h-0.5 w-8 bg-black"></div>
              <div className="h-0.5 w-4 bg-black self-end"></div>
            </div>
          </button>

        </section>

    </nav>
  );
}
