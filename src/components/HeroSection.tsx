import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
    return (
        <div>
            <div className="max-w-full mx-auto mb-8">
                <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
                    <div className="lg:col-span-3">
                        <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl">Welcome to my blogs</h1>
                        <p className="mt-3 text-lg text-gray-800">Find the latest and trending blogs on the latest tech and trends.</p>

                        <div className="mt-6 lg:mt-12">
                            <span className="text-xs font-medium text-gray-800 uppercase">Follow me on:</span>

                            <div className="mt-4 flex gap-x-8">
                                <a href="#">
                                    <Image
                                        src="/LinkedIn_icon.svg.png"
                                        alt="LinkedIn"
                                        width={28}
                                        height={28}
                                        className="hover:scale-110 transition-all duration-300"
                                    />
                                </a>
                                <a href="#">
                                    <Image
                                        src="/Instagram_logo_2016.svg.webp"
                                        alt="Instagram"
                                        width={28}
                                        height={28}
                                        className="hover:scale-110 transition-all duration-300"
                                    />
                                </a>
                            </div>
                        </div>

                    </div>


                    <div className="lg:col-span-4 mt-10 lg:mt-0">
                        <Image
                            src="/photo-1625416360482-1f219bf855ae.avif"
                            alt="Hero Image"
                            width={500}
                            height={500}
                            className="w-full rounded-xl"
                        />
                    </div>

                </div>

            </div>

        </div>
    )
}

export default HeroSection
