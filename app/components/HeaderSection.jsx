"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from 'react-type-animation';

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
                    'Développeur',
                    1000,
                    'Designer',
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
                    J’accompagne les entrepreneurs et entreprises du Val-d’Oise dans la création de sites vitrines, e-commerce et plateformes SaaS sur mesure.
                    <br />
<br />SEO & visibilité : soyez en tête des recherches !<br />
Un site web, c’est bien. Un site qui attire des clients, c’est mieux. J’optimise chaque ligne de code pour que votre entreprise se démarque sur Google et gagne en visibilité dans votre région.
<br /><br />
Audit & conformité web : protégez votre investissement<br />
Je vérifie que votre site respecte les standards SEO, la vitesse de chargement et les obligations RGPD. Pas de mauvaise surprise, votre projet est entre de bonnes mains.
<br /><br />
Next.js, Symfony, WordPress… Peu importe la techno, le but est simple : un site performant, un référencement qui cartonne.
<br /><br />
Besoin d’un site qui génère du business ou d’un audit SEO précis ? Contactez-moi et boostons votre visibilité dès maintenant !

                    </p> 
                <div>
                    <Link
                    href="/contact.vcf"
                    download="contact.vcf"
                    className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white"
                    >
                    Ajouter Contact
                    </Link>
                    <Link
                    href="https://drive.google.com/file/d/1whCZ-wv8E1u5r_tpYx3s0I4X1t0Ortlk/view?usp=sharing"
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
                           alt="Dagory Damien, développeur web en Val-d'Oise et Vendée" 
                           className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                           width={500}
                           height={500}
                          />
                    </div>
            </motion.div>
        </div>   
    </section>
    );
};

export default HeaderSection;