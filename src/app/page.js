import Banner from '@/components/banner';
import Image from 'next/image';
import Footer from '@/components/footer';
export default function Services() {
    return (
    <div>

        <header>
            <Banner/>
        </header>

        <main className='py-28'>

            <header className='text-center flex flex-col gap-2 relative'>
                <h1 className='text-3xl lg:text-4xl font-bold'>
                  Desarrolla con nosotros
                </h1>
                <p className='opacity-50 font-semibold'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, in.
                </p>
            </header>

            <section className='mt-20 flex flex-col flex-wrap justify-center gap-10 w-full'>
                <div className='flex flex-wrap justify-center items-start gap-20 gap-y-16'>
                    <article className='w-11/12 sm:w-[75%] lg:text-start text-center lg:w-[440px] flex flex-col gap-3 border-x-2 px-8'>
                        <header>
                            <h3 className='text-lg font-semibold'>
                                One Code Application for Web
                            </h3>
                        </header>
                        <div>
                            <p className='ml-5'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, cum. Distinctio facilis quasi labore similique fugit. Fugit dolores perspiciatis vel sed repellendus sequi accusantium hic.
                            </p>
                        </div>
                    </article>
                    <article className='w-11/12 sm:w-[75%] lg:text-start text-center lg:w-[440px] flex flex-col gap-3 border-x-2 px-8'>
                        <header>
                            <h3 className='text-lg font-semibold'>
                                Agile Iterative Development
                            </h3>
                        </header>
                        <div>
                            <p className='ml-5'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, cum. Distinctio facilis quasi labore similique fugit. Fugit dolores perspiciatis vel sed repellendus sequi accusantium hic.
                            </p>
                        </div>
                    </article>
                </div>
                <div className='flex flex-wrap justify-center items-start gap-20'>
                    <article className='w-11/12 sm:w-[75%] lg:text-start text-center lg:w-[440px] flex flex-col gap-3 border-x-2 px-8'>
                        <header>
                            <h3 className='text-lg font-semibold'>
                                Hire Us
                            </h3>
                        </header>
                        <div>
                            <p className='ml-5'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, cum. Distinctio facilis quasi labore similique fugit. Fugit dolores perspiciatis vel sed repellendus sequi accusantium hic.
                            </p>
                        </div>
                    </article>
                    <article className='w-11/12 sm:w-[75%] lg:text-start text-center lg:w-[440px] flex flex-col gap-3 border-x-2 px-8'>
                        <header>
                            <h3 className='text-lg font-semibold'>
                                Single Page Application Development
                            </h3>
                        </header>
                        <div>
                            <p className='ml-5'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, cum. Distinctio facilis quasi labore similique fugit. Fugit dolores perspiciatis vel sed repellendus sequi accusantium hic.
                            </p>
                        </div>
                    </article>
                </div>
            </section>

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

            <div className='px-[5vw] md:px-[15vw] mt-12 mb-24'>
                <section className='bg-black h-auto md:py-0 py-10 md:h-[400px] rounded-[4px] text-white flex flex-col items-start justify-center'>
                    <div className='px-8 w-[100%] lg:w-[60%] flex flex-col gap-6'>
                        <h2 className='text-4xl lg:text-5xl font-extrabold'>
                            ¿Quieres subir tu proyecto a internet?
                        </h2>
                        <p className=''>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus voluptate aliquam possimus magni?
                        </p>
                        <a href='#' className='bg-white text-black w-52 py-3 text-center rounded-[4px]'>
                            Inicia Ahora
                        </a>
                    </div>
                </section>
            </div>
          

        </main>

        <footer>
            <Footer/>
        </footer>

    </div>
    );
  }
  