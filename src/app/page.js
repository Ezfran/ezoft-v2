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
                    ¡Desarrolla con Nosotros!
                </h1>
                <p className='opacity-60 font-semibold'>
                    Creamos soluciones digitales personalizadas para impulsar tu negocio al siguiente nivel.
                </p>
            </header>

            <section className='mt-20 flex flex-col flex-wrap justify-center gap-10 w-full'>
                <div className='flex flex-wrap justify-center items-start gap-20 gap-y-16'>
                    <article className='info-hover hover:shadow-lg py-6 w-11/12 sm:w-[75%] lg:text-start text-center lg:w-[440px] flex flex-col gap-3 border-x-2 px-8'>
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
                    <article className='info-hover hover:shadow-lg py-6 w-11/12 sm:w-[75%] lg:text-start text-center lg:w-[440px] flex flex-col gap-3 border-x-2 px-8'>
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
                    <article className='info-hover hover:shadow-lg py-6 w-11/12 sm:w-[75%] lg:text-start text-center lg:w-[440px] flex flex-col gap-3 border-x-2 px-8'>
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
                    <article className='info-hover hover:shadow-lg py-6 w-11/12 sm:w-[75%] lg:text-start text-center lg:w-[440px] flex flex-col gap-3 border-x-2 px-8'>
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


            <div className='px-[5vw] md:px-[15vw] mt-32 mb-16'>
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

            <section className='px-[5vw] md:px-[15vw] mt-28'>
                <header className='text-center flex flex-col gap-2 relative'>
                    <h1 className='text-3xl lg:text-4xl font-bold'>
                        Procesos del Desarrollo
                    </h1>
                    <p className='opacity-60 font-semibold'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi harum quos natus molestiae magnam.
                    </p>
                </header>
                <div className='mt-24 flex lg:flex-row flex-col gap-10 gap-y-16 lg:border-l-0 border-l-2 border-t-0 lg:border-t-2 h-full lg:py-0 py-6 mx-5 lg:mx-0'>
                    <article className='flex flex-col gap-4'>
                            <header className='flex lg:flex-col flex-row lg:items-start items-center'>
                                <p className='lg:-translate-x-0 -translate-x-5 -translate-y-0 lg:-translate-y-5 z-50 bg-black text-white rounded-full w-10 h-10 flex justify-center items-center'>
                                    1
                                </p>
                                <h2 className='text-lg font-semibold'>
                                    Análisis
                                </h2>
                            </header>
                            <div className='lg:ml-0 ml-5'>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet nemo nostrum ipsam ut totam nobis beatae illum ullam ratione quis?
                                </p>
                            </div>
                    </article>
                    <article className='flex flex-col gap-4'>
                        <header className='flex lg:flex-col flex-row lg:items-start items-center'>
                            <p className='lg:-translate-x-0 -translate-x-5 -translate-y-0 lg:-translate-y-5 z-50 bg-black text-white rounded-full w-10 h-10 flex justify-center items-center'>
                                2
                            </p>
                            <h2 className='text-lg font-semibold'>
                                Diseño y Desarrollo
                            </h2>
                        </header>
                        <div className='lg:ml-0 ml-5'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet nemo nostrum ipsam ut totam nobis beatae illum ullam ratione quis?
                            </p>
                        </div>
                    </article>
                    <article className='flex flex-col gap-4'>
                        <header className='flex lg:flex-col flex-row lg:items-start items-center'>
                            <p className='lg:-translate-x-0 -translate-x-5 -translate-y-0 lg:-translate-y-5 z-50 bg-black text-white rounded-full w-10 h-10 flex justify-center items-center'>
                                3
                            </p>
                            <h2 className='text-lg font-semibold'>
                                Testing Completo
                            </h2>
                        </header>
                        <div className='lg:ml-0 ml-5'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet nemo nostrum ipsam ut totam nobis beatae illum ullam ratione quis?
                            </p>
                        </div>
                    </article>
                    <article className='flex flex-col gap-4'>
                        <header className='flex lg:flex-col flex-row lg:items-start items-center'>
                            <p className='lg:-translate-x-0 -translate-x-5 -translate-y-0 lg:-translate-y-5 z-50 bg-black text-white rounded-full w-10 h-10 flex justify-center items-center'>
                                4
                            </p>
                            <h2 className='text-lg font-semibold'>
                                Implementación
                            </h2>
                        </header>
                        <div className='lg:ml-0 ml-5'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet nemo nostrum ipsam ut totam nobis beatae illum ullam ratione quis?
                            </p>
                        </div>
                    </article>
                </div>
            </section>

            <section className='flex lg:flex-row flex-col px-[5vw] md:px-[15vw] mt-28'>
                <div className='w-full lg:w-[50%] text-center'>
                    <article className='flex justify-center items-center flex-col gap-4 bg-[rgba(0,0,0,.02)] h-80'>
                        <h3>
                            Lorem, ipsum.
                        </h3>
                        <p className='flex items-center flex-col'>
                            Lorem ipsum dolor sit amet.
                            <span className='block border-b-4 border-[rgba(0,0,0,1)] w-[20%] mt-6'>
                                
                            </span>
                        </p>
                        <p className='w-[80%] font-bold'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, nulla.
                        </p>
                        <Image
                            src='/images/programmer.svg'
                            width={50}
                            height={50}
                            alt='scrum'
                            className='mt-4'
                        />
                    </article>
                    <article className='grid place-content-center w-full h-auto lg:h-80'>
                        <Image
                            src='/bg-1.jpg'
                            width={700}
                            height={0}
                            alt='scrum'
                            className='-z-10 w-full h-full'
                        />
                    </article>
                    <article className='flex justify-center items-center flex-col gap-4 bg-[rgba(0,0,0,.02)] h-80'>
                        <h3>
                            Lorem, ipsum.
                        </h3>
                        <p className='flex items-center flex-col'>
                            Lorem ipsum dolor sit amet.
                            <span className='block border-b-4 border-[rgba(0,0,0,1)] w-[20%] mt-6'>
                                
                            </span>
                        </p>
                        <p className='w-[80%] font-bold'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, nulla.
                        </p>
                        <Image
                            src='/images/programmer.svg'
                            width={50}
                            height={50}
                            alt='scrum'
                            className='mt-4'
                        />
                    </article>
                </div>
                <div className='w-full lg:w-[50%] text-center'>
                    <article className='bg-[rgba(0,0,0,0.605)] grid place-content-center h-auto lg:h-80'>
                        <Image
                            src='/bg-1.jpg'
                            width={700}
                            height={0}
                            alt='scrum'
                            className='-z-10 w-full h-full'
                        />
                    </article>
                    <article className='flex justify-center items-center flex-col gap-4 bg-black text-white h-80'>
                        <h3>
                            Lorem, ipsum.
                        </h3>
                        <p className='flex items-center flex-col'>
                            Lorem ipsum dolor sit amet.
                            <span className='block border-b-4 border-[rgba(255,255,255,1)] w-[20%] mt-6'>
                                
                            </span>
                        </p>
                        <p className='w-[80%] font-bold'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, nulla.
                        </p>
                        <Image
                            src='/images/programmer.svg'
                            width={50}
                            height={50}
                            alt='scrum'
                            className='mt-4'
                        />
                    </article>
                    <article className='bg-[rgba(0,0,0,0.605)] grid place-content-center h-auto lg:h-80'>
                        <Image
                            src='/bg-1.jpg'
                            width={700}
                            height={320}
                            alt='scrum'
                            objectFit='cover'
                            className='-z-10 w-full h-full'
                        />
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
  