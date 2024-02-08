import Banner from '../../../components/banner';
import Image from 'next/image';
import Footer from '../../../components/footer';

export default function Work() {
    return (
        <div>

            <header>
                <Banner />
            </header>

            <main className='py-28'>

                <header className='text-center flex flex-col gap-2 px-8'>
                    <h1 className='text-3xl lg:text-4xl font-bold'>
                        Conoce nuestro trabajo
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
                    <article className='effect -mt-5'>
                        <Image
                            src='/images/programmer.svg'
                            width={300}
                            height={300}
                            alt='Control'
                            className='wave-img'
                        />
                    </article>

                </section>

                <section className='mt-28'>
                    <header className='text-center flex flex-col gap-2 relative'>
                        <h1 className='text-3xl lg:text-4xl font-bold'>
                            Trabajos realizados
                        </h1>
                        <p className='opacity-60 font-semibold'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum commodi autem voluptas deserunt.
                        </p>
                    </header>
                </section>  

                <section className='text-white px-[5vw] md:px-[10vw] flex flex-wrap justify-center items-center gap-5 mt-10'>
                    <article className='pt-36 bg-black w-[100%] md:w-[330px] border-[rgba(0,0,0,0.2)] border rounded-[4px] overflow-hidden relative'>
                        <div className='absolute w-full h-52 sm:h-60 top-0 p-2'>
                            <Image
                                src="/bg-1.jpg"
                                width={700}
                                height={0}
                                className='w-full h-full object-cover rounded-sm -z-50'
                            />
                        </div>
                        <div className='w-full transparent bg-[rgba(0,0,0,0.67)] backdrop-blur-sm z-50 p-3 pt-4 relative'>
                            <article className='h-auto sm:h-20 md:h-40'>
                                <h1 className="text-xl tracking-wider">CannaLitoral</h1>
                                <p className="mt-2 opacity-70 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptatum rerum nisi, dolores enim excepturi suscipit consectetur illo accusamus aliquam!</p>
                            </article>

                            <article className="my-8 flex gap-3 text-center flex-wrap">
                                <p className="bg-black text-sm font-light border-white duration-500 border-2 border-transparent py-1 px-4 rounded-[4px] hover:bg-white hover:text-black hover:border-black">
                                    Angular
                                </p>
                                <p className="bg-black text-sm font-light border-white duration-500 border-2 border-transparent py-1 px-4 rounded-[4px] hover:bg-white hover:text-black hover:border-black">
                                    Tailwind
                                </p>
                            </article>

                            <article>
                                <section className="flex sm:flex-col flex-row gap-5">
                                    <div className="">
                                        <p className="text-sm">
                                            Ubicación del cliente
                                            <span className="text-md block">España</span>
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-sm">
                                            Tipo de proyecto
                                            <span className="text-md block">Remoto</span>
                                        </p>
                                    </div>
                                </section>
                            </article>
                        </div>
                    </article>
                    <article className='pt-36 bg-black w-[100%] md:w-[330px] border-[rgba(0,0,0,0.2)] border rounded-[4px] overflow-hidden relative'>
                        <div className='absolute w-full h-52 sm:h-60 top-0 p-2'>
                            <Image
                                src="/bg-1.jpg"
                                width={700}
                                height={0}
                                className='w-full h-full object-cover rounded-sm -z-50'
                            />
                        </div>
                        <div className='w-full transparent bg-[rgba(0,0,0,0.67)] backdrop-blur-sm z-50 p-3 pt-4 relative'>
                            <article className='h-auto sm:h-20 md:h-40'>
                                <h1 className="text-xl tracking-wider">CannaLitoral</h1>
                                <p className="mt-2 opacity-70 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptatum rerum nisi, dolores enim excepturi suscipit consectetur illo accusamus aliquam!</p>
                            </article>

                            <article className="my-8 flex gap-3 text-center flex-wrap">
                                <p className="bg-black text-sm font-light border-white duration-500 border-2 border-transparent py-1 px-4 rounded-[4px] hover:bg-white hover:text-black hover:border-black">
                                    Angular
                                </p>
                                <p className="bg-black text-sm font-light border-white duration-500 border-2 border-transparent py-1 px-4 rounded-[4px] hover:bg-white hover:text-black hover:border-black">
                                    Tailwind
                                </p>
                            </article>

                            <article>
                                <section className="flex sm:flex-col flex-row gap-5">
                                    <div className="">
                                        <p className="text-sm">
                                            Ubicación del cliente
                                            <span className="text-md block">España</span>
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-sm">
                                            Tipo de proyecto
                                            <span className="text-md block">Remoto</span>
                                        </p>
                                    </div>
                                </section>
                            </article>
                        </div>
                    </article>
                    <article className='pt-36 bg-black w-[100%] md:w-[330px] border-[rgba(0,0,0,0.2)] border rounded-[4px] overflow-hidden relative'>
                        <div className='absolute w-full h-52 sm:h-60 top-0 p-2'>
                            <Image
                                src="/bg-1.jpg"
                                width={700}
                                height={0}
                                className='w-full h-full object-cover rounded-sm -z-50'
                            />
                        </div>
                        <div className='w-full transparent bg-[rgba(0,0,0,0.67)] backdrop-blur-sm z-50 p-3 pt-4 relative'>
                            <article className='h-auto sm:h-20 md:h-40'>
                                <h1 className="text-xl tracking-wider">CannaLitoral</h1>
                                <p className="mt-2 opacity-70 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptatum rerum nisi, dolores enim excepturi suscipit consectetur illo accusamus aliquam!</p>
                            </article>

                            <article className="my-8 flex gap-3 text-center flex-wrap">
                                <p className="bg-black text-sm font-light border-white duration-500 border-2 border-transparent py-1 px-4 rounded-[4px] hover:bg-white hover:text-black hover:border-black">
                                    Angular
                                </p>
                                <p className="bg-black text-sm font-light border-white duration-500 border-2 border-transparent py-1 px-4 rounded-[4px] hover:bg-white hover:text-black hover:border-black">
                                    Tailwind
                                </p>
                            </article>

                            <article>
                                <section className="flex sm:flex-col flex-row gap-5">
                                    <div className="">
                                        <p className="text-sm">
                                            Ubicación del cliente
                                            <span className="text-md block">España</span>
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-sm">
                                            Tipo de proyecto
                                            <span className="text-md block">Remoto</span>
                                        </p>
                                    </div>
                                </section>
                            </article>
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
