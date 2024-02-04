import Image from "next/image";
import Link from "next/link";
export default function Footer() {
    return (
      <footer className="bg-slate-600">
          <section>
            <article>
              <h3>
                Contato
              </h3>
              <ul>
                <li>
                  Venezuela - España - Argentina
                </li>
                <li>
                  <a href="#">
                    ezfranquijada@gmail.com
                  </a>
                </li>
                <li>
                  <a href="#">
                    +58 04128658140
                  </a>
                  <a href="#">
                    +34 943 4382 1
                  </a>
                </li>
              </ul>
            </article>
            <article>
              <h3>
                Enlaces
              </h3>
              <ul>
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
              <h3>
                ¡Envíanos un Email!
              </h3>
              <form action="#">
                <input type="text" />
                <button type="button">
                  Enviar
                </button>
              </form>
            </article>
            <article>
              <h3>Trabajos Recientes</h3>
              <div>
                <div>
                  Imagen
                </div>
                <div>
                  <h4>
                    Quiebratech
                  </h4>
                </div>
              </div>
              <div>
                <div>
                  Imagen
                </div>
                <div>
                  <h4>
                    Quiebratech
                  </h4>
                </div>
              </div>
            </article>
          </section>
          <article>
            <div>
              <Image
                alt="logo"
                src="/logo.png"
                width={80}
                height={80}
              />
            </div>
            <ul>
              <Link href="#">Inicio</Link>
              <Link href="#">Nosotros</Link>
              <Link href="#">Trabajo</Link>
              <Link href="#">Contacto</Link>
            </ul>
          </article>
      </footer>
    );
  }
  