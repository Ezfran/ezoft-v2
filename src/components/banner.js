'use client'
import Header from './header';
import { usePathname } from 'next/navigation'; // Updated import
import Image from "next/image";
import Link from 'next/link';
export default function Banner() {

    const pathname = usePathname();
    const title = pathname === '/' ? 'Home' : pathname === '/services' ? 'Servicios' : pathname === '/about-us' ? 'Nosotros' : 'Work';
    
    return (
            
        <div className='bg-img pb-6'>

            <header>
                <Header/>
            </header>
            
            <main className='h-[45vh] px-[15vw]'>

                <section className='flex flex-col justify-center items-center h-full relative'>
                    <h5 className='text-5xl font-semibold -translate-y-3'>
                        {title}
                    </h5>
                    <div>
                        <p className='absolute left-0 bottom-0 text-lg font-medium opacity-60'>
                            <Link href="/">Home //</Link> {title}
                        </p>
                    </div>
                </section>

            </main>

        </div>
        
    );
  }
  