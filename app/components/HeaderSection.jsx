"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import Link from "next/link";

const HeaderSection = () => {
    return (
    <section className="lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <motion.div 
            initial={{opacity:0,scale: 0.5}} 
            animate={{opacity:1, scale: 1}} 
            transition={{duration:0.5}} 
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
            >
                <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold'>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        Salut moi c&apos;est{" "} Damien
                    </span>
                    <br />
                    <TypeAnimation
                    sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'UX Designer',
                    1000, // wait 1s before replacing 
                    'Développeur web',
                    1000,
                    'Designer web',
                    1000,
                    'Gamer',
                    1000
                     ]}
                     wrapper="span"
                     speed={50}
                    repeat={Infinity}
                    />
                </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                    Créateur de solutions digitales, je suis polyvalent avec la conceptualisation de design UI/UX, le référencement, ainsi que le développement et la maintenance de projets web, que ce soit en front-end ou back-end.
Photoshop, Procreate, Adobe Xd et Canva sont mes alliés de choix en design, chacun apportant sa touche de magie à mes créations. Côté développement, j’ai une préférence pour les framework NextJS, Angular et Symfony. Un trio dynamique qui me permet de transformer les idées en réalités digitales captivantes

                    </p> 
                <div>
                    <Link
                    href="/contact"
                    className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white"
                    >
                    Contact
                    </Link>
                    <Link
                    href="https://drive.google.com/file/d/1rW6atrWfXEvAvHAiZ1Uk0FiOp47zLsnr/view"
                    className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-400 hover:bg-slate-800 text-white mt-3"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                     <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                     Download cv
                     </span>   
                    </Link>
                </div>      
            </motion.div>
            <motion.div 
                     initial={{opacity:0,scale: 0.5}} 
                     animate={{opacity:1, scale: 1}} 
                     transition={{duration:0.5}}  
                     className="col-span-4 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                          <Image 
                           src="/images/damien-dagory.png"
                           alt="photo portfolio dagory damien" 
                           className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                           width={200}
                           height={200}
                          />
                    </div>
            </motion.div>
        </div>   
    </section>
    );
};

export default HeaderSection;