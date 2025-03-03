"use client"
import React, {useState, useRef} from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from "framer-motion";


const projectsData = [
    {
        id: 1,
        title: "Quick-Parking",
        description: "Projet Quick-parking",
        image:"/images/projects/quick-parking.png",
        tag: ['Tous mes projets', 'Web'],
        gitUrl: "/",
        previewUrl: "https://quick-parking.fr/"
    },
    {
        id: 2,
        title: "Nova-groupe",
        description: "Projet Nova-groupe",
        image:"/images/projects/novagroupe.png",
        tag: ['Tous mes projets', 'Web'],
        gitUrl: "/",
        previewUrl: "https://novagroupe.eu/"
    },
    {
        id: 3,
        title: "SMR",
        description: "Projet SMR",
        image:"/images/projects/smr.png",
        tag: ['Tous mes projets', 'Web'],
        gitUrl: "/",
        previewUrl: "https://smr-marseille.fr/"
    },
    {
        id: 4,
        title: "So Delicious",
        description: "Projet So Delicious",
        image:"/images/projects/so-delicious.png",
        tag: ['Tous mes projets', 'E-commerce'],
        gitUrl: "https://gitlab.com/dam824/sodelicious",
        previewUrl: "/"
    },
    {
        id: 5,
        title: "Pangolins",
        description: "Projet Pangolin",
        image:"/images/projects/pangolin.png",
        tag: ['Tous mes projets', 'API'],
        gitUrl: "https://github.com/dam824/friend-network",
        previewUrl: "/"
    },
    {
        id: 6,
        title: "Site Vitrine",
        description: "Projet Site Vitrine",
        image:"/images/projects/kconcept.png",
        tag: ['Tous mes projets', 'Site Vitrine'],
        gitUrl: "/",
        previewUrl: "https://kconceptcoiffure.fr/"
    },
    {
        id: 7,
        title: "Site Vitrine",
        description: "Projet Site Vitrine",
        image:"/images/projects/europbots.png",
        tag: ['Tous mes projets', 'Site Vitrine'],
        gitUrl: "/",
        previewUrl: "https://europbots.com/"
    },
    {
        id: 8,
        title: "Site Vitrine",
        description: "Projet Site Vitrine",
        image:"/images/projects/azul.png",
        tag: ['Tous mes projets', 'Site Vitrine'],
        gitUrl: "/",
        previewUrl: "https://redcatstudio.fr/Azul"
    },
    {
        id: 9,
        title: "Site Vitrine",
        description: "Projet Site Vitrine",
        image:"/images/projects/harmonia.png",
        tag: ['Tous mes projets', 'Site Vitrine'],
        gitUrl: "/",
        previewUrl: "https://harmonia-transports.fr/"
    },
    {
        id: 10,
        title: "Site Vitrine",
        description: "Projet Site Vitrine",
        image:"/images/projects/prometal.png",
        tag: ['Tous mes projets', 'Site Vitrine'],
        gitUrl: "/",
        previewUrl: "https://prometal-13.fr/"
    },
   
]

const ProjectsSection = ({ imgUrl, title, description }) => {
    
    const [tag, setTag] = useState ("Tous mes projets");
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };
    //affichage projets selectionnes
    const filteredProjects = projectsData.filter((project) => 
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial : { y: 50, opacity:0},
        animate:  { y: 0,  opacity:1},   
    }

  return (
   <section id="projects">
    <h2 className='text-center text-4xl font-bold text-white mt-4mb-8 md:mb-12'>
        Mes projets
    </h2>
    <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
      <ProjectTag 
      onClick={handleTagChange} name="Tous mes projets" 
      isSelected={tag === "Tous mes projets"}  
      />
       <ProjectTag 
      onClick={handleTagChange} name="E-commerce" 
      isSelected={tag === "E-commerce"}  
      />
       <ProjectTag 
      onClick={handleTagChange} name="API" 
      isSelected={tag === "API"}  
      />
       <ProjectTag 
      onClick={handleTagChange} name="Site Vitrine" 
      isSelected={tag === "Site Vitrine"}  
      />
       
    </div>
    <ul  ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {filteredProjects.map((project, index) => (
          <motion.li
          key={index}
          variants={cardVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 0.3, delay: index * 0.4 }}
          
        >
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        </motion.li>
        ))}
    </ul>
   </section>
  );
}

export default ProjectsSection