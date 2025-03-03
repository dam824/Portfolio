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
                <li>HTML / CSS </li>
                <li>PHP</li>
                <li>Javascript</li>
                <li>React</li>
                <li>NextJS</li>
                <li>Symfony</li>
                <li>Wordpress</li>
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
                <li>Développeur front-end Redcat Studio Paris</li>
                <li>Développeur front-end agence EpressPack Paris</li>
                <li>Développeur front-end agence Mcom Marseille</li>
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
            <Image src="/images/cyber-punk.jpg"alt="photo dessin fait par dagory damien représentant un cyberpunk" width={300}height={300} />
            <div className='className="mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>A propos de moi</h2>
                    <p className='text-base md:text-lg'>
                    Apprendre, tester, optimiser : un parcours 100% terrain
Autodidacte et passionné, j’ai forgé mes compétences en explorant sans relâche les meilleures technologies web et en testant ce qui fonctionne vraiment pour booster la visibilité en ligne.
<br /> Aujourd’hui, je conçois des sites ultra-performants et j’optimise leur SEO pour les entreprises du Val-d’Oise et de Vendée, leur permettant d’attirer plus de clients et de dominer leur marché local.

Mon approche : allier technique et stratégie SEO<br />
Un site, c’est bien. Un site rapide, optimisé et visible sur Google, c’est mieux. <br />Chaque projet que je développe est conçu pour convertir et générer du business, en combinant un code robuste et une stratégie SEO efficace.

Plus qu’un métier, c’est un défi quotidien : repousser les limites du web et du référencement pour des résultats concrets.
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