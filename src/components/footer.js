import Image from "next/image";
import Link from "next/link";
export default function Footer() {
    return (
      <footer className="bg-[#2b2b2b] flex flex-col px-[5vw] xl:px-[15vw] pb-5">

          <section className="text-white py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 md:justify-start justify-center lg:text-start text-center">
            <article className="">
              <h3 className="text-md">
                Contato
              </h3>
              <ul className="opacity-60 font-extralight flex flex-col gap-3 mt-4 text-sm">
                <li>
                  <a href="#">
                    ezfranquijada@gmail.com
                  </a>
                </li>
                <li className="">
                  <a href="#">
                    +58 0412 865 81 40
                  </a>
                </li>
                <li>
                  <a href="#">
                    +34 943 4382 13 1
                  </a>
                </li>
              </ul>
            </article>
            <article>
              <h3 className="text-md">
                Enlaces
              </h3>
                <ul className="opacity-60 font-extralight flex flex-col gap-3 mt-4 text-sm">
                <li>
                  <a href="#">
                    Términos y condiciones
                  </a>
                </li>
                <li>
                  <a href="#">
                    Politicas y privacidad
                  </a>
                </li>
                <li>
                  <a href="#">
                    Nuestros Servicios
                  </a>
                </li>
              </ul>
            </article>
            <article>
              <h3 className="text-md">
                Trabajos Recientes
              </h3>
              <section className="mt-4 flex flex-col lg:items-start items-center gap-4">
                <div className="flex gap-4">
                  <div>
                    <Image
                      alt="logo"
                      src="/ezoft-white.png"
                      width={80}
                      height={60}
                    />
                  </div>
                  <div>
                    <h4 className="text-sm">
                      Quiebratech
                      <span className="block text-xs opacity-60 mt-1">
                        27 Enero 2024
                      </span>
                    </h4>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div>
                    <Image
                      alt="logo"
                      src="/ezoft-white.png"
                      width={80}
                      height={60}
                    />
                  </div>
                  <div>
                    <h4 className="text-sm">
                      Quiebratech
                      <span className="block text-xs opacity-60 mt-1">
                        27 Enero 2024
                      </span>
                    </h4>
                  </div>
                </div>
              </section>
            </article>
            <article className="">
              <h3>
                ¡Envía tu Email!
              </h3>
              <form action="#" className="mt-4 flex flex-col items-center lg:items-start">
                <input type="text" className="bg-[rgba(48,48,48,255)] px-2 py-2 text-[rgba(255,255,255,0.5)] placeholder-[rgba(255,255,255,0.5)] w-64 sm:w-72 lg:w-full" placeholder="Email"/>
                <button type="button" className="bg-white mt-3 py-1.5 text-[#2b2b2b] uppercase text-sm font-semibold w-64 sm:w-72 lg:w-full">
                  Enviar
                </button>
              </form>
            </article>
          </section>

          <article className="flex sm:flex-row flex-col items-center gap-y-5 justify-between pt-5 border-t-[1px] border-[rgba(255,255,255,.2)]">
            <div>
              <Image
                alt="logo"
                src="/ezoft-white.png"
                width={80}
                height={80}
              />
            </div>
            <ul className="text-white flex sm:flex-row flex-col gap-6 items-center">
              <Link href="/">Inicio</Link>
              <Link href="#">Nosotros</Link>
              <Link href="/services">Servicios</Link>
              <Link href="#">Trabajo</Link>
              <Link href="#">Contacto</Link>
            </ul>
          </article>

      </footer>
    );
  }
  