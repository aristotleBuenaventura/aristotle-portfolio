import React from "react"


export type BannerProps = {

}

export function Banner({}: BannerProps) {
    return (
        <div>
            <div className="bg-background-light p-4 md:p-10 text-dark grid grid-cols-1 xl:grid-cols-2 justify-between dark:bg-background-dark dark:text-white">
                <div color="flex mt-24 justify-center"> 
                    <div className="mx-5 mb-4 md:mb-0 font-bold text-7xl ms-20 mt-24 flex justify-center xl:justify-start">Web</div>
                    <div className="mx-5 mb-4 md:mb-0 font-bold text-7xl text-primary-light ms-20 flex justify-center xl:justify-start">Developer</div>
                    <div className="flex justify-center">
                        <div className="mx-5 mb-4 md:mb-0 text-xl ms-20 ">
                            Hey, 
                            <span className="text-primary-light"> I'm Aristotle Buenaventura</span>, 
                            a front-end developer. Let's create your dream website together!
                        </div>
                    </div>
                </div>
                <div className="mx-5 mb-4 mt-10 flex justify-end sm:justify-center ">
                    <img 
                        src="/images/arispixel.jpeg" 
                        alt="Aristotle Buenaventura" 
                        className="w-96 h-96 rounded-full"
                    />
                </div>
            </div>
            <div className="border-t border-gray-300"></div>
        </div>
    );
}

