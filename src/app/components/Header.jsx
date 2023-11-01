// "use client"
// import React from 'react'
// import Image from 'next/image'
// import { TypeAnimation } from 'react-type-animation'
// import Link from 'next/link'

// const Header = () => {
//     return (
//         <section className="lg:py-16">
//             <div className='grid grid-cols-1 sm:grid-cols-12'>
//                 <div className='col-span-7 place-self-center text-center sm:text-left'>
//                     <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
//                         <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
//                             Hello, I'm
//                         </span>
//                         <br />
//                         <TypeAnimation
//                             sequence={[
//                                 'Rimsha',
//                                 1000,
//                                 'Full Stack developer',
//                                 1000,
//                                 'Backend Developer',
//                                 1000,
//                                 'Software Developer',
//                                 1000
//                             ]}
//                             wrapper="span"
//                             speed={50}
//                             repeat={Infinity}
//                         />
//                     </h1>
//                     <p className='text-[#ADB7BE] text-base mb-6 sm:text-lg lg:text-xl'>As a passionate developer, I am driven by the thrill of tackling new challenges, constantly expanding my skill set, and embracing the endless possibilities of technology.</p>
//                     <div>
//                         <Link
//                             href="https://drive.google.com/file/d/1ycZ7PV7SgihbYBWAB_nB9NzTL5idfX2z/view" target="_blank"
//                             className="px-6 py-3 rounded-full w-full sm:w-fit hover:bg-slate-200 text-white mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"
//                         >
//                             Download CV
//                         </Link>

//                     </div>
//                 </div>

//                 <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
//                     <div className='rounded-full bg-[#181818] w-[200px] h-[200px] lg:w-[350px] lg:h-[350px]  relative'>
//                         <Image src="/images/cute girl.png" alt='image' className='rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' width= {200} height={200} />
//                     </div>
//                 </div>

//             </div>
//         </section>
//     )
// }

// export default Header

"use client"
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

const Header = () => {
    return (
        <section className="lg:py-16">
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-4'>
                <div className='lg:col-span-7 place-self-center text-center lg:text-left'>
                    <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                            Hello, I'm
                        </span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                'Rimsha',
                                1000,
                                'Full Stack developer',
                                1000,
                                'Backend Developer',
                                1000,
                                'Software Developer',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='text-[#ADB7BE] text-base mb-6 sm:text-lg lg:text-xl'>As a passionate developer, I am driven by the thrill of tackling new challenges, constantly expanding my skill set, and embracing the endless possibilities of technology.</p>
                    <div className="flex justify-center lg:justify-start">
                        <Link
                            href="https://drive.google.com/file/d/1ycZ7PV7SgihbYBWAB_nB9NzTL5idfX2z/view"
                            target="_blank"
                            className="px-6 py-3 rounded-full sm:w-fit hover:bg-slate-200 text-white mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"
                        >
                            Download CV
                        </Link>
                    </div>
                </div>

                <div className='lg:col-span-5 place-self-center mt-4 lg:mt-0'>
                    <div className='flex justify-center'>
                        <div className='lg:max-w-[350px] lg:max-h-[350px] rounded-full overflow-hidden'>
                            <Image src="/images/cute girl.png" alt='image' width={350} height={350} layout="responsive" objectFit="cover" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;
