import { useState, useEffect } from 'react';
import image3 from "../img/BarberHDWall-05.jpg"; 

function Home() {
    const [image, setImage] = useState("/Sakra_barber.png");
    const [image2, setImage2] = useState("/BarberHDWall.jpg");

    return (
        <div class="min-h-screen flex items-center justify-center bg-gray py-12 px-4 sm:px-6 lg:px-8" 
            style={{ 
                backgroundImage:`url(${image3})`,
                backgroundRepeat:"no-repeat",
                backgroundSize: "contain"
                }}>
            <div class="container my-24 px-6 mx-auto">
                {/* DIV disini nnt ya */}
                    <section className="relative ">
                        {/* Illustration behind hero content */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
                            <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
                                    <stop stopColor="#FFFF00" offset="0%" />
                                    <stop stopColor="#AA6C39" offset="75.402%" />
                                    <stop stopColor="#5A5A5A" offset="100%" />
                                </linearGradient>
                                </defs>
                                <g fill="url(#illustration-01)" fillRule="evenodd">
                                <circle cx="1232" cy="128" r="128" />
                                <circle cx="155" cy="443" r="64" />
                                </g>
                            </svg>
                        </div>

                        <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        {/* Hero content */}
                        <div className="pt-32 pb-12 md:pt-0 md:pb-20">
                            {/* Section header */}
                            <div class="block rounded-lg shadow-lg px-20 py-12 md:px-12 lg:-mr-14 backdrop-blur-lg"
                                style={{
                                    background: 'hsla(0, 0 %, 100 %, 0.55)'
                                }}>
                                <div class="text-center pb-12 md:pb-7">
                                    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-200 leading-tighter tracking-tighter mb-8" data-aos="zoom-y-out">Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-800">SAKRA BARBERSHOP</span></h1>
                                    <div className="max-w-3xl mx-auto">
                                        <p className="text-xl text-gray-200 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Barbershop that provides haircut services according to your wishes. Find a haircut that suits your face shape and your desires</p>
                                        <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                                        <div class="flex flex-col justify-between p-4 leading-normal">
                                            <a class="inline-flex place-items-stretch px-3 py-2 text-sm font-medium text-center text-white bg-blue-900 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" href="/login">Let's Explore</a>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        </div>
                    </section>

                <section class="mb-32 text-gray-800">
                        <div class="container mx-auto xl:px-32 text-center lg:text-left">
                            <div class="grid lg:grid-cols-2 flex items-center">
                                <div class="mb-12 lg:mb-0">
                                    <div class="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14 backdrop-blur-2xl"
                                        style={{
                                            background: 'hsla(0, 0 %, 100 %, 0.55)'
                                        }}>
                                        <h2 class="text-3xl font-bold mb-6">Sakra Barbershop</h2>
                                        <p class="text-gray-500 mb-6 pb-2 lg:pb-0">
                                            Sakra is one of the best barbershop in the country. We provide the best service for you.
                                        </p>
                                        <div class="flex flex-col md:flex-row md:justify-around lg:justify-between mb-6 mx-auto">
                                            <p class="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 mr-2">
                                                    <path fill="currentColor"
                                                        d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                                                    </path>
                                                </svg>
                                                Best team
                                            </p>
                                            <p class="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 mr-2">
                                                    <path fill="currentColor"
                                                        d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                                                    </path>
                                                </svg>
                                                Best quality
                                            </p>
                                            <p class="flex items-center mb-2 lg:mb-0 mx-auto md:mx-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 mr-2">
                                                    <path fill="currentColor"
                                                        d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                                                    </path>
                                                </svg>
                                                Best experience
                                            </p>
                                        </div>
                                        <p class="text-black-500 mb-0">
                                            Sakra Barbershop website was created to help barbers out there to more easily connect with customers.
                                            This website was created as a forum that bridges customers to find out what hairstyles are currently
                                            trending, hairstyles that suit their face shape, and choose the best barbers.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <img src={image} class="w-full rounded-lg shadow-lg"
                                        alt="" />
                                </div>
                            </div>
                        </div>
                </section >
            </div>
        </div>

    );

}
export default Home;