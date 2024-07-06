import React from "react"


export type AboutProps = {

}

export function About({}: AboutProps) {
    return (
        <div>
            <div className="bg-background-light p-4 md:p-10 text-dark grid grid-cols-1 xl:grid-cols-2 justify-between dark:bg-background-dark dark:text-white">
                <div color="flex mt-24 justify-center"> 
                    <div className="mx-5 mb-4 md:mb-0 font-bold text-7xl ms-20 mt-24 flex xl:justify-start">About
                        <span className=" font-bold text-7xl text-primary-light flex ustify-start ms-5 mb-5"> me</span>
                    </div>
                    <div className="flex justify-center">
                        <div className="mx-5 mb-4 md:mb-0 text-xl ms-20 ">
                        <span className="text-primary-light"> I&apos;m Aristotle Buenaventura</span>, an experienced educator with a degree in Information Technology and a passion for mathematics. Similar to my dedication to teaching, I&apos;m seeking developer opportunities to apply my hands-on project experience and coursework knowledge. My aim is to bring a unique blend of teaching expertise and technical skills to a dynamic IT team, just as I thrive on crafting innovative solutions. Let&apos;s connect and collaborate to create something amazing together.
                             
                            a front-end developer. Let&apos;s create your dream website together!
                        </div>
                    </div>
                </div>
                <div className="flex justify-end sm:justify-center ">
                    <img 
                        src="/images/aboutme.svg" 
                        alt="Aristotle Buenaventura" 
                        style={{ width: '35rem', height: '35rem' }}
                    />
                </div>
            </div>
            <div className="border-t border-gray-300"></div>
        </div>
    );
}

