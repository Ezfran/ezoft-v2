import Banner from '../../../components/banner';
import Image from 'next/image';
import Footer from '../../../components/footer';

export default function Services() {
    return (
    <div>

        <header>
            <Banner/>
        </header>

        <main className='py-28'>

            <header className='text-center flex flex-col gap-2 px-8'>
                <h1 className='text-3xl lg:text-4xl font-bold'>
                    Nuestros Servicios
                </h1>
                <p className='opacity-50 font-semibold'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, amet.
                </p>
            </header>

            <section className='px-7 flex flex-wrap justify-center items-center text-center gap-8 gap-y-16 xl:h-80 mt-12'>
                <article className='overflow-hidden pt-3 h-32 flex flex-col gap-2 items-center border-x-2 border-black border-opacity-20 w-64 hover:shadow-xl servicios-hover'>
                    <div>
                         <Image
                            src='/images/web-programming.png'
                            width={64}
                            height={64}
                            alt='Desarrollo Web'
                        />
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold'>Desarrollo Web
                            <span className='block text-[12px] -translate-y-1'>
                                &darr; Detalles &darr;
                            </span>
                        </h3>
                        <ul className='flex flex-col gap-2 mt-2'>
                            <li className='opacity-50'>Sitios Web a Medida</li>
                            <li className='opacity-50'>WordPress</li>
                            <li className='opacity-50'>Tiendas Online</li>
                        </ul>
                    </div>
                </article>
                <article className='overflow-hidden pt-3 h-32 flex flex-col gap-2 items-center border-x-2 border-black border-opacity-20 w-64 hover:shadow-xl servicios-hover'>
                    <div>
                        <Image
                            src='/images/edit-tools.png'
                            width={64}
                            height={64}
                            alt='Diseño'
                        />
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold'>Diseño
                            <span className='block text-[12px] -translate-y-1'>
                                &darr; Detalles &darr;
                            </span>
                        </h3>
                        <ul className='flex flex-col gap-2 mt-2'>
                            <li className='opacity-50'>Diseño Web</li>
                            <li className='opacity-50'>Renders en 3D</li>
                            {/* <li className='opacity-50'>Diseño de Software</li> */}
                        </ul>
                    </div>
                </article>
                <article className='overflow-hidden pt-3 h-32 flex flex-col gap-2 items-center border-x-2 border-black border-opacity-20 w-64 hover:shadow-xl servicios-hover'>
                    <div>
                         <Image
                            src='/images/scrum.png'
                            width={64}
                            height={64}
                            alt='SCRUM'
                        />
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold'>Soporte & Mantenimiento
                            <span className='block text-[12px] -translate-y-1'>
                                &darr; Detalles &darr;
                            </span>
                        </h3>
                        <ul className='flex flex-col gap-2 mt-2'>
                            <li className='opacity-50'>SEO</li>
                            <li className='opacity-50'>Optimización</li>
                            <li className='opacity-50'>Soporte Perzonalizado</li>
                        </ul>
                    </div>
                </article>
                <article className='overflow-hidden pt-3 h-32 flex flex-col gap-2 items-center border-x-2 border-black border-opacity-20 w-64 hover:shadow-xl servicios-hover'>
                    <div>
                         <Image
                            src='/images/sketch.png'
                            width={64}
                            height={64}
                            alt='Diseño de Software'
                        />
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold'>Software a Medida
                            <span className='block text-[12px] -translate-y-1'>
                                &darr; Detalles &darr;
                            </span>
                        </h3>
                        <ul className='flex flex-col gap-2 mt-2'>
                            <li className='opacity-50'>Aplicaciones Web</li>
                            <li className='opacity-50'>Aplicaciones Móviles</li>
                            <li className='opacity-50'>Aplicaciones de Escritorio</li>
                        </ul>
                    </div>
                </article>
            </section>

            <section className='flex flex-col items-center gap-10 text-center mt-12'>

                <header className='flex flex-col justify-center items-center gap-4'>
                    <h3 className='text-4xl lg:text-5xl font-extrabold px-3'>
                        ¡Haz crecer tu marca!
                    </h3>
                    <p className='w-7/12 text-center'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam in et rerum molestiae totam!
                    </p>
                    <a href='#' className='bg-black text-white w-52 py-3 text-center rounded-[4px]'>
                        Inicia Ahora
                    </a>
                </header>
                <article>
                    <Image
                        src='/images/engineering_team.svg'
                        width={300}
                        height={300}
                        alt='Control'
                    />
                </article>

            </section>

            <section className='flex justify-center items-center mt-28 px-[15vw]'>
                <div className='text-center border-y-2 border-black border-opacity-20 w-full flex md:flex-row flex-col gap-x-14 gap-y-3 justify-center items-center h-40 sm:h-32 md:h-24'>
                    <h3 className='text-2xl font-semibold'>
                        ¿Estás buscando algo más?
                    </h3>
                    <a href="#" className="px-3 md:px-6 py-2 bg-black text-white text-sm md:text-lg rounded-[4px]">
                        ¡Escríbanos!
                    </a> 
                </div>
            </section>



        </main>



        <footer>
            <Footer/>
        </footer>
    </div>
    );
  }
  