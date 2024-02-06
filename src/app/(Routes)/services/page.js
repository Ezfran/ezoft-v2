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

            <section className='px-[5vw] md:px-[15vw] mt-28 mb-16'>
                <article className='w-full bg-black text-white lg:h-96 h-auto'>
                    <header className='flex flex-col gap-y-4 sm:flex-row justify-center sm:justify-between pb-3 border-b-[1px] border-[rgba(255,255,255,.3)] p-5'>
                        <p className='text-2xl'>
                            Plan Personalizado
                        </p>
                        <p className='text-3xl'>
                            300$
                            <span className='block opacity-60 uppercase text-sm'>
                                Lorem, ipsum dolor.
                            </span>
                        </p>
                    </header>
                    <div className='sm:gap-0 gap-4 flex sm:flex-row flex-col justify-center sm:justify-between items-center border-b-[1px] border-[rgba(255,255,255,.3)] p-5'>
                        <ul className='flex flex-col gap-4 w-full sm:w-[50%]'>
                            <li className='flex items-center justify-between pr-[10vw] sm:pr-20'>
                                <p className='font-mono'>
                                    +3 Páginas
                                </p>
                                <i class="fa-solid fa-circle-info"></i>
                            </li>
                            <li className='flex items-center justify-between pr-[10vw] sm:pr-20'>
                                <p className='font-mono'>
                                    Hosting
                                </p>
                                <i class="fa-solid fa-circle-info"></i>
                            </li>
                            <li className='flex items-center justify-between pr-[10vw] sm:pr-20'>
                                <p className='font-mono'>
                                    Optimización
                                </p>
                                <i class="fa-solid fa-circle-info"></i>
                            </li>
                        </ul>
                        <ul className='flex flex-col gap-4 w-full sm:w-[50%]'>
                            <li className='flex items-center justify-between pr-[10vw] sm:pr-20'>
                                <p className='font-mono'>
                                    Mantenimiento
                                </p>
                                <i class="fa-solid fa-circle-info"></i>
                            </li>
                            <li className='flex items-center justify-between pr-[10vw] sm:pr-20'>
                                <p className='font-mono'>
                                    Soporte 24/7
                                </p>
                                <i class="fa-solid fa-circle-info"></i>
                            </li>
                            <li className='flex items-center justify-between pr-[10vw] sm:pr-20'>
                                <p className='font-mono'>
                                    SEO
                                </p>
                                <i class="fa-solid fa-circle-info"></i>
                            </li>
                        </ul>
                    </div>
                    <article className='p-5 flex flex-col md:flex-row lg:gap-16 gap-8 justify-center lg:justify-between lg:items-end items-center w-full'>
                        <div className='w-full lg:w-[50%]'>
                            <p className='text-lg'>
                                Ideal Para:
                            </p>
                            <p className='opacity-60 '>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, ipsam.
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            </p>
                        </div>
                        <a href='#' className='bg-white text-black w-36 sm:w-48 flex items-center justify-center h-10 text-center rounded-[4px]'>
                            Inicia Ahora
                        </a>
                    </article>
                </article>
                <div>
                    <article>

                    </article>
                </div>
            </section>


        </main>



        <footer>
            <Footer/>
        </footer>
    </div>
    );
  }
  