import Link from "next/link";
import Image from "next/image";
import React, { useState } from 'react';

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>

      <nav className="w-full z-50 flex items-center justify-between pt-6 px-6 md:px-[15vw]">

      <div className="">
          <Image
            src='/ezoft.png'
            width={110}
            height={105}
            alt="logo"
          />
      </div>

      <section className="flex items-center gap-4 md:gap-10">

        <a href="#" className="px-3 md:px-6 py-2 bg-black text-white text-sm md:text-lg rounded-[4px]">
          ¡Contactenos!
        </a>

        <button onClick={() => setIsActive(!isActive)}>
          <div className="flex flex-col gap-2">
            <div className="h-0.5 w-8 bg-black"></div>
            <div className="h-0.5 w-8 bg-black"></div>
            <div className="h-0.5 w-4 bg-black self-end"></div>
          </div>
        </button>

      </section>

      </nav>

      <div className={isActive ? "fixed w-full sm:w-[400px] !h-[100vh] left-0 top-0 bg-[rgba(0,0,0,0.7)] backdrop-blur-sm text-white py-16 px-10 z-50 translate-x-0 transition-all duration-700" : "transition-all duration-1000 absolute h-[100vh] top-0 w-[80%] -translate-x-[400px]"}>
        <div className="absolute top-0 right-0 py-8 px-10 block sm:hidden">
          <button onClick={() => setIsActive(!isActive)}>
            <div className="flex flex-col gap-2">
              <div className="h-0.5 w-8 bg-white"></div>
              <div className="h-0.5 w-8 bg-white"></div>
              <div className="h-0.5 w-4 bg-white self-end"></div>
            </div>
          </button>
        </div>
        <ul className="flex flex-col items-start gap-10 uppercase tracking-wider font-light ">
          <div className="flex gap-4 items-center">
            <div className="w-5">
              <i class="fa-solid fa-house"></i>
            </div>
            <Link href='#'>Inicio</Link>
          </div>
          <div className="flex gap-4 items-center">
            <div className="w-5">
              <i class="fa-solid fa-user-tie"></i>
            </div>
            <Link href='#'>Nosotros</Link>
          </div>
          <div className="flex gap-4 items-center">
            <div className="w-5">
              <i class="fa-solid fa-briefcase"></i>
            </div>
            <Link href='#'>Trabajo</Link>
          </div>
          <div className="flex gap-4 items-center">
            <div className="w-5">
              <i class="fa-solid fa-comments"></i>
            </div>
            <Link href='#'>Contacto</Link>
          </div>
          <div className="flex gap-4 items-center">
            <div className="w-5">
              <i class="fa-solid fa-bullhorn"></i>
            </div>
            <Link href='#'>Blog</Link>
          </div>
          <div className="flex gap-8 items-start">
            <button>
              <i class="fa-solid fa-language text-2xl"></i>
            </button>
            <button>
              <i class="fa-solid fa-circle-half-stroke text-[23px]"></i>
            </button>
          </div>
        </ul>
        <footer className="fixed bottom-0 left-0 flex justify-between w-full py-8 px-10 items-center text-center sm:flex-row flex-col gap-y-4">
          <div>
            <Image
              src='/ezoft-white.png'
              width={90}
              height={0}
              alt="logo"
            />
          </div>
          <p className="text-sm">Derechos Reservados @2024</p>
        </footer>
      </div>

    </div>
  );
}
