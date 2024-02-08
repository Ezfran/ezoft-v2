import Banner from '../../../components/banner';
import Image from 'next/image';
import Footer from '../../../components/footer';

export default function Services() {
    return (
        <div>

            <header>
                <Banner />
            </header>

            <main className='py-28'>

                <header className='text-center flex flex-col gap-2 px-8'>
                    <h1 className='text-3xl lg:text-4xl font-bold'>
                        ¡Haz crecer tu marca!
                    </h1>
                    <p className='opacity-60 font-semibold'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, amet.
                    </p>
                </header>

                <section className='px-7 flex flex-wrap justify-center items-center text-center gap-8 gap-y-16 xl:h-80 mt-16 lg:mt-0'>
                    <article className='overflow-hidden pt-3 h-32 flex flex-col gap-2 items-center border-x-2 border-black border-opacity-20 w-64 hover:shadow-xl servicios-hover'>
                        <div className='py-4'>
                            <Image
                                src='/images/web-programming.png'
                                width={40}
                                height={40}
                                alt='Desarrollo Web'
                            />
                        </div>
                        <div>
                            <h3 className='text-sm uppercase mt-1 tracking-wider '>Desarrollo Web
                                {/* <span className='block text-[12px] -translate-y-1'>
                                &darr; Detalles &darr;
                            </span> */}
                            </h3>
                            <ul className='flex flex-col gap-2 mt-2'>
                                <li className='opacity-50'>Sitios Web a Medida</li>
                                <li className='opacity-50'>WordPress</li>
                                <li className='opacity-50'>Tiendas Online</li>
                            </ul>
                        </div>
                    </article>
                    <article className='overflow-hidden pt-3 h-32 flex flex-col gap-2 items-center border-x-2 border-black border-opacity-20 w-64 hover:shadow-xl servicios-hover'>
                        <div className='py-4'>
                            <Image
                                src='/images/edit-tools.png'
                                width={40}
                                height={40}
                                alt='Diseño'
                            />
                        </div>
                        <div>
                            <h3 className='text-sm uppercase mt-1 tracking-wider '>Diseño
                                {/* <span className='block text-[12px] -translate-y-1'>
                                &darr; Detalles &darr;
                            </span> */}
                            </h3>
                            <ul className='flex flex-col gap-2 mt-2'>
                                <li className='opacity-50'>Diseño Web</li>
                                <li className='opacity-50'>Renders en 3D</li>
                                {/* <li className='opacity-50'>Diseño de Software</li> */}
                            </ul>
                        </div>
                    </article>
                    <article className='overflow-hidden pt-3 h-32 flex flex-col gap-2 items-center border-x-2 border-black border-opacity-20 w-64 hover:shadow-xl servicios-hover'>
                        <div className='py-4'>
                            <Image
                                src='/images/scrum.png'
                                width={40}
                                height={40}
                                alt='SCRUM'
                            />
                        </div>
                        <div>
                            <h3 className='text-sm uppercase mt-1 tracking-wider '>Soporte & Mantenimiento
                                {/* <span className='block text-[12px] -translate-y-1'>
                                &darr; Detalles &darr;
                            </span> */}
                            </h3>
                            <ul className='flex flex-col gap-2 mt-2'>
                                <li className='opacity-50'>SEO</li>
                                <li className='opacity-50'>Optimización</li>
                                <li className='opacity-50'>Soporte Perzonalizado</li>
                            </ul>
                        </div>
                    </article>
                    <article className='overflow-hidden pt-3 h-32 flex flex-col gap-2 items-center border-x-2 border-black border-opacity-20 w-64 hover:shadow-xl servicios-hover'>
                        <div className='py-4'>
                            <Image
                                src='/images/sketch.png'
                                width={40}
                                height={40}
                                alt='Diseño de Software'
                            />
                        </div>
                        <div>
                            <h3 className='text-sm uppercase mt-1 tracking-wider '>Software a Medida
                                {/* <span className='block text-[12px] -translate-y-1'>
                                &darr; Detalles &darr;
                            </span> */}
                            </h3>
                            <ul className='flex flex-col gap-2 mt-2'>
                                <li className='opacity-50'>Aplicaciones Web</li>
                                <li className='opacity-50'>Aplicaciones Móviles</li>
                                <li className='opacity-50'>Aplicaciones de Escritorio</li>
                            </ul>
                        </div>
                    </article>
                </section>

                <section className='flex flex-col items-center gap-16 text-center mt-12 lg:mt-0'>

                    <header className='flex flex-col justify-center items-center gap-8'>
                        <p className='w-7/12 text-center opacity-60 font-semibold'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam in et rerum molestiae totam!
                        </p>
                        <a href='#' className='bg-black text-white w-36 sm:w-40 flex items-center justify-center h-12 text-center rounded-[4px] border-2 hover:bg-white hover:border-black hover:text-black transition-all duration-500'>
                            Inicia Ahora
                        </a>
                    </header>
                    <article>
                        <Image
                            src='/images/control.svg'
                            width={330}
                            height={330}
                            alt='Control'
                        />
                    </article>

                </section>

                <section className='px-[5vw] md:px-[15vw] mt-32 mb-16 flex flex-col gap-y-5'>
                    <article className='w-full bg-black text-white lg:h-96 h-auto rounded-[4px]'>
                        <header className='flex flex-col gap-y-4 sm:flex-row justify-center sm:justify-between pb-3 border-b-[1px] border-[rgba(255,255,255,.3)] p-5'>
                            <p className='text-2xl'>
                                Plan Personalizado
                            </p>
                            <p className='text-3xl'>
                                299.99$
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
                                    <i className="fa-solid fa-circle-info"></i>
                                </li>
                                <li className='flex items-center justify-between pr-[10vw] sm:pr-20'>
                                    <p className='font-mono'>
                                        Hosting
                                    </p>
                                    <i className="fa-solid fa-circle-info"></i>
                                </li>
                                <li className='flex items-center justify-between pr-[10vw] sm:pr-20'>
                                    <p className='font-mono'>
                                        Optimización
                                    </p>
                                    <i className="fa-solid fa-circle-info"></i>
                                </li>
                            </ul>
                            <ul className='flex flex-col gap-4 w-full sm:w-[50%]'>
                                <li className='flex items-center justify-between pr-[10vw] sm:pr-20'>
                                    <p className='font-mono'>
                                        Mantenimiento
                                    </p>
                                    <i className="fa-solid fa-circle-info"></i>
                                </li>
                                <li className='flex items-center justify-between pr-[10vw] sm:pr-20'>
                                    <p className='font-mono'>
                                        Soporte 24/7
                                    </p>
                                    <i className="fa-solid fa-circle-info"></i>
                                </li>
                                <li className='flex items-center justify-between pr-[10vw] sm:pr-20'>
                                    <p className='font-mono'>
                                        SEO
                                    </p>
                                    <i className="fa-solid fa-circle-info"></i>
                                </li>
                            </ul>
                        </div>
                        <article className='p-5 flex flex-col md:flex-row lg:gap-16 gap-8 justify-center lg:justify-between lg:items-end items-center w-full'>
                            <div className='w-full lg:w-[50%]'>
                                <p className='text-lg'>
                                    Ideal Para:
                                </p>
                                <p className='opacity-60 ml-0 md:ml-4'>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, ipsam.
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                            <a href='#' className='bg-white text-black w-36 sm:w-36 flex items-center justify-center h-10 text-center rounded-[4px] border-2 hover:bg-black hover:border-white hover:text-white transition-all duration-500'>
                                Inicia Ahora
                            </a>
                        </article>
                    </article>
                    <div className='flex flex-col md:flex-row gap-5 items-start justify-center'>

                        <article className='border-[1px] border-[rgba(0,0,0,.3)] w-full md:w-[50%] rounded-[4px]'>
                            <header className='flex flex-col gap-y-4 sm:flex-row justify-center sm:justify-between pb-3 border-b-[1px] border-[rgba(0,0,0,.3)] p-5'>
                                <p className='text-2xl'>
                                    Plan 1
                                </p>
                                <p className='text-3xl'>
                                    199.99$
                                </p>
                            </header>
                            <div className='border-b-[1px] border-[rgba(0,0,0,.3)]'>
                                <ul className='flex flex-col justify-between gap-4 w-full p-5'>
                                    <li className='flex items-center justify-between pr-[10.5vw] sm:pr-10'>
                                        <p className='font-mono'>
                                            +3 Páginas
                                        </p>
                                        <i className="fa-solid fa-circle-info"></i>
                                    </li>
                                    <li className='flex items-center justify-between pr-[10.5vw] sm:pr-10'>
                                        <p className='font-mono'>
                                            Hosting
                                        </p>
                                        <i className="fa-solid fa-circle-info"></i>
                                    </li>
                                    <li className='flex items-center justify-between pr-[10.5vw] sm:pr-10'>
                                        <p className='font-mono'>
                                            Optimización
                                        </p>
                                        <i className="fa-solid fa-circle-info"></i>
                                    </li>
                                </ul>
                            </div>
                            <article className='p-5 flex flex-col gap-8 justify-center items-start w-full'>
                                <div className='w-full'>
                                    <p className='text-lg'>
                                        Ideal Para:
                                    </p>
                                    <p className='opacity-60 ml-0 md:ml-4'>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, ipsam.
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    </p>
                                </div>
                                <a href='#' className='bg-black text-white w-36 sm:w-36 flex items-center justify-center h-10 text-center rounded-[4px] border-2 hover:bg-white hover:border-black hover:text-black transition-all duration-500'>
                                    Inicia Ahora
                                </a>
                            </article>
                        </article>

                        <article className='border-[1px] border-[rgba(0,0,0,.3)] w-full md:w-[50%] rounded-[4px]'>
                            <header className='flex flex-col gap-y-4 sm:flex-row justify-center sm:justify-between pb-3 border-b-[1px] border-[rgba(0,0,0,.3)] p-5'>
                                <p className='text-2xl'>
                                    Plan 1
                                </p>
                                <p className='text-3xl'>
                                    199.99$
                                </p>
                            </header>
                            <div className='border-b-[1px] border-[rgba(0,0,0,.3)]'>
                                <ul className='flex flex-col justify-between gap-4 w-full p-5'>
                                    <li className='flex items-center justify-between pr-[10.5vw] sm:pr-10'>
                                        <p className='font-mono'>
                                            +3 Páginas
                                        </p>
                                        <i className="fa-solid fa-circle-info"></i>
                                    </li>
                                    <li className='flex items-center justify-between pr-[10.5vw] sm:pr-10'>
                                        <p className='font-mono'>
                                            Hosting
                                        </p>
                                        <i className="fa-solid fa-circle-info"></i>
                                    </li>
                                    <li className='flex items-center justify-between pr-[10.5vw] sm:pr-10'>
                                        <p className='font-mono'>
                                            Optimización
                                        </p>
                                        <i className="fa-solid fa-circle-info"></i>
                                    </li>
                                </ul>
                            </div>
                            <article className='p-5 flex flex-col gap-8 justify-center items-start w-full'>
                                <div className='w-full'>
                                    <p className='text-lg'>
                                        Ideal Para:
                                    </p>
                                    <p className='opacity-60 ml-0 md:ml-4'>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, ipsam.
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    </p>
                                </div>
                                <a href='#' className='bg-black text-white w-36 sm:w-36 flex items-center justify-center h-10 text-center rounded-[4px] border-2 hover:bg-white hover:border-black hover:text-black transition-all duration-500'>
                                    Inicia Ahora
                                </a>
                            </article>
                        </article>

                    </div>
                </section>

                <section className='px-[5vw] md:px-[15vw] flex flex-col gap-10'>
                    <article className='flex flex-col gap-5 border-b-[1px] border-[rgba(0,0,0,.3)] pb-10'>
                        <header className='flex gap-y-2 lg:flex-row flex-col items-start justify-between w-full lg:items-center '>
                            <h3 className='text-2xl flex md:flex-row flex-col items-start md:items-center gap-2.5  border-b-[1px] md:border-b-[0px] border-[rgba(0,0,0,.3)]'>
                                <span className='inline-block bg-black text-white uppercase text-sm rounded-[4px] px-3 py-0.5 tracking-wider'>
                                    Estándar
                                </span>
                                Aplicación Movíl
                            </h3>
                            <p className='uppercase font-medium text-sm tracking-wide'>
                                Incluye un Descuento para una Web package
                            </p>
                        </header>
                        <div className='flex gap-y-5 md:flex-row flex-col items-start md:items-center w-full justify-between relative'>
                            <p className='w-full md:w-4/6'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quasi. Ullam laborum quod minus blanditiis perferendis iusto molestiae soluta distinctio.
                            </p>
                            <p className='text-3xl flex items-center gap-2'>
                                1299.99$
                            </p>
                        </div>
                    </article>
                    <article className='flex flex-col gap-5 border-b-[1px] border-[rgba(0,0,0,.3)] pb-10'>
                        <header className='flex gap-y-2 lg:flex-row flex-col items-start justify-between w-full lg:items-center '>
                            <h3 className='text-2xl flex md:flex-row flex-col items-start md:items-center gap-2.5  border-b-[1px] md:border-b-[0px] border-[rgba(0,0,0,.3)]'>
                                <span className='inline-block bg-black text-white uppercase text-sm rounded-[4px] px-3 py-0.5 tracking-wider'>
                                    Completa
                                </span>
                                Aplicación Movíl
                            </h3>
                            <p className='uppercase font-medium text-sm tracking-wide'>
                                Incluye un Descuento para una Web package
                            </p>
                        </header>
                        <div className='flex gap-y-5 md:flex-row flex-col items-start md:items-center w-full justify-between relative'>
                            <p className='w-full md:w-4/6'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quasi. Ullam laborum quod minus blanditiis perferendis iusto molestiae soluta distinctio.
                            </p>
                            <p className='text-3xl '>
                                2299.99$
                            </p>
                        </div>
                    </article>


                    <article>
                        <div className='flex gap-y-5 md:flex-row flex-col items-start md:items-center w-full justify-between relative'>
                            <p className='w-full md:w-4/6'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quasi. Ullam laborum quod minus blanditiis perferendis iusto molestiae soluta distinctio.
                            </p>
                            <div className='md:w-[50%] w-full flex items-start md:items-end justify-start md:justify-end'>
                                <a href="#" className="text-sm px-3 md:px-5 py-2 border-2 border-[rgba(0,0,0,.6)] text-black md:text-base rounded-[4px] hover:bg-black hover:border-white hover:text-white transition-all duration-500">
                                    Elija el mejor para usted
                                </a>
                            </div>
                        </div>
                    </article>

                </section>


                <section className='flex justify-center items-center mt-28 px-[15vw]'>
                    <div className='text-center border-y-2 border-black border-opacity-20 w-full flex md:flex-row flex-col gap-x-14 gap-y-3 justify-center items-center h-40 sm:h-32 md:h-24'>
                        <h3 className='text-2xl font-semibold'>
                            ¿Buscas algo más?
                        </h3>
                        <a href='#' className='bg-black text-white w-36 sm:w-36 flex items-center justify-center h-10 text-center rounded-[4px] border-2 hover:bg-white hover:border-black hover:text-black transition-all duration-500'>
                            ¡Escríbanos!
                        </a>
                    </div>
                </section>






            </main>



            <footer>
                <Footer />
            </footer>
        </div>
    );
}
