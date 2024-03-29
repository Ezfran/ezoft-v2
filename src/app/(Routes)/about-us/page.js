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
                    ¿Quiénes somos?
                </h1>
                <p className='opacity-60 font-semibold'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, amet.
                </p>
            </header>


            <section className='px-[5vw] md:px-[15vw] mt-20 flex xl:flex-row flex-col gap-4'>

                <article className='flex flex-col justify-center gap-3 w-full xl:w-[50%] py-8 rounded-[4px] border-[1px] border-[rgba(0,0,0,.3)] px-5'>
                    <h1 className='text-xl'>
                        Hacemos crecer tu negocio con las últimas técnologias para que obtenga la mayor y mejor presencia en Internet
                    </h1>
                    <p className='leading-7'>
                        Somos un equipo de profesionales en constante evolución. Nos apasiona el desarrollo de soluciones innovadoras y eficientes. Con una comunicación transparente y un enfoque en el usuario final. Estamos aquí para apoyarte en cada etapa del camino, brindando asesoramiento y soporte continuo incluso después de la finalización de tu proyecto.
                    </p>
                    <a href='#' className='bg-black text-white w-36 mt-4 flex items-center justify-center h-10 text-center rounded-[4px] border-2 hover:bg-white hover:border-black hover:text-black transition-all duration-500'>
                        Inicia Ahora
                    </a>
                </article>

                <div className='xl:w-[50%] w-full h-auto flex flex-col gap-4 text-white'>
                    <article className='flex flex-col gap-3 bg-black w-full h-auto py-10 px-5 rounded-[4px] '>
                        <div>
                            <p className='font-bold text-lg font-mono w-8 h-8 flex items-center justify-center bg-white text-black rounded-full'>
                                ¶¶
                            </p>
                        </div>
                        <section className='flex flex-col gap-4'>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sit similique consequatur et, praesentium illo in aliquam doloremque asperiores rem.
                            </p>
                            <footer>
                                <p className='font-bold'>
                                    Miguel Yesan
                                </p>
                            </footer>
                        </section>
                    </article>
                    <article className='flex flex-col gap-3 bg-black w-full h-auto py-10 px-5 rounded-[4px] '>
                        <div>
                            <p className='font-bold text-lg font-mono w-8 h-8 flex items-center justify-center bg-white text-black rounded-full'>
                                ¶¶
                            </p>
                        </div>
                        <section className='flex flex-col gap-4'>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sit similique consequatur et, praesentium illo in aliquam doloremque asperiores rem.
                            </p>
                            <footer>
                                <p className='font-bold'>
                                    Lucas Emmanuel
                                </p>
                            </footer>
                        </section>
                    </article>
                </div>

            </section>


            <section className='mt-16'>
                <header className='text-center flex flex-col gap-2 relative'>
                    <h1 className='text-2xl font-bold'>
                        ¿Por qué elegirnos?
                    </h1>
                    <p className='opacity-60 font-semibold'>
                        Somos un equipo de desarrolladores capacitados y experimentados, apasionados por llevar tus ideas a la realidad. 
                    </p>
                </header>
                <div className='px-7 flex flex-wrap justify-center items-center text-center gap-8 gap-y-16 mt-12'>
                    <article className='p-3 flex flex-col items-center border-x-2 border-black border-opacity-20 w-64'>
                        <div>
                            <h3 className='text-4xl font-medium'>
                                28+
                                <span className='text-sm uppercase tracking-wider block font-normal mt-2'>
                                    Clientes Satisfechos
                                </span>
                            </h3>
                        </div>
                    </article>
                    <article className='p-3 flex flex-col items-center border-x-2 border-black border-opacity-20 w-64'>
                        <div>
                            <h3 className='text-4xl font-medium'>
                                3+
                                <span className='text-sm uppercase tracking-wider block font-normal mt-2'>
                                    Años de Experiencia
                                </span>
                            </h3>
                        </div>
                    </article>
                    <article className='p-3 flex flex-col items-center border-x-2 border-black border-opacity-20 w-64'>
                        <div>
                            <h3 className='text-4xl font-medium'>
                                32+
                                <span className='text-sm uppercase tracking-wider block font-normal mt-2'>
                                    Proyectos realizados
                                </span>
                            </h3>
                        </div>
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
  