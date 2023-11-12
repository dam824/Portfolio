"use client";
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title:"Compétences",
        id:"compétences",
        content: (
            <ul className="list-disc pl-2">
                <li>HTML / CSS</li>
                <li>JS</li>
                <li>Stack Mean</li>
                <li>NextJS</li>
                <li>Symfony</li>
            </ul>
        ),
    },
    {
        title:"Formation",
        id:"formation",
        content: (
            <ul className="list-disc pl-2">
                <li>Alt-rh consulting : diplôme développeur web</li>
                <li>Lycée vincent van gogh : Bac Science technique de la gestion option ressources humaines</li>
            </ul>
        ),
    },
    {
        title:"Expériences",
        id:"expériences",
        content: (
            <ul className="list-disc pl-2">
                <li>Développeur web agence Mcom Marseille</li>
                <li>Designer web K-concept coiffure</li>
            </ul>
        ),
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState('compétences');
    const [isPending, startTransition] = useTransition();

    const handleTabChange =(id) => {
        startTransition(() => {
            setTab(id);
        });
    };

  return (
    <section className='text-white' id="about">
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:grap-16 sm:py-16 xl:px-16'>
            <Image src="/images/cyber-punk.jpg"alt="photo dessin cyberpunk" width={300}height={300} />
            <div className='className="mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>A propos de moi</h2>
                    <p className='text-base md:text-lg'>
                    Ma carrière a pris un tournant décisif lorsque j&apos;ai décidé de suivre ma passion et de me consacrer entièrement au développement, un domaine où la créativité trouve son plein épanouissement.

Animé par une soif d&apos;apprendre et une curiosité sans fin, j&apos;ai acquis mes compétences de manière autodidacte, explorant et expérimentant pour comprendre en profondeur ce domaine fascinant.

Ce que j&apos;apprécie particulièrement, c&apos;est de transformer mon travail en un hobby passionnant. Le développement pour moi, c&apos;est plus qu&apos;un métier, c&apos;est une véritable passion qui me permet de m&apos;éxprimer et de créer. 
                    </p>
                <div className='flex flex-row justify-start mt-8'>
                    <TabButton
                     selectTab={()=> handleTabChange('compétences')}
                     active={tab==='compétences'}
                     >
                        {" "}
                        compétences{" "} 
                     </TabButton>
                     <TabButton
                     selectTab={()=> handleTabChange('formation')}
                     active={tab==='formation'}
                     > 
                      {" "}
                        formation{" "} 
                     </TabButton>
                     <TabButton
                     selectTab={()=> handleTabChange('expériences')}
                     active={tab==='expériences'}
                     >
                         {" "}
                         expériences{" "} 
                     </TabButton>
                </div>
                <div className='mt-8'>
                    {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
            </div>
    </div>
    </section>
  )
}

export default AboutSection