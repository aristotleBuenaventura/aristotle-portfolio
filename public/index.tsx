import React from "react"


export type BannerProps = {

}

export function Banner({}: BannerProps) {
    return (
        <div>
            <div className="bg-background-light p-4 md:p-10 text-dark flex flex-col md:flex-row justify-between dark:bg-background-dark dark:text-white">
                <div color="flex"> 
                    <div className="mx-5 mb-4 md:mb-0 font-bold text-7xl ms-20">Web</div>
                    <div className="mx-5 mb-4 md:mb-0 font-bold text-7xl text-primary-light ms-20">Developer</div>
                    <div className="mx-5 mb-4 md:mb-0 text-xl ms-20">
                        Hey, 
                        <span className="text-primary-light"> I'm Aristotle Buenaventura</span>, 
                        a front-end developer. Let's create your dream website together!
                    </div>
                </div>
                <div className="mx-5 mb-4 md:mb-0 flex items-center">
                    <img 
                        src="/images/arispixel.jpeg" 
                        alt="Aristotle Buenaventura" 
                        className="w-20 h-20 rounded-full"
                    />
                </div>
            </div>
            <div className="border-t border-gray-300"></div>
        </div>
    );
}

