"use client"
import React, {useState} from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

const projectsData = [
    {
        id: 1,
        title: "Quick-Parking",
        description: "Projet Quick-parking",
        image:"/images/projects/projet-img-test.png",
        tag: ['Tous mes projets', 'Web'],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 2,
        title: "Nova-groupe",
        description: "Projet Nova-groupe",
        image:"/images/projects/projet-img-test.png",
        tag: ['Tous mes projets', 'Web'],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 3,
        title: "SMR",
        description: "Projet SMR",
        image:"/images/projects/projet-img-test.png",
        tag: ['Tous mes projets', 'Web'],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 4,
        title: "So Delicious",
        description: "Projet So Delicious",
        image:"/images/projects/projet-img-test.png",
        tag: ['Tous mes projets', 'E-commerce'],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 5,
        title: "Pangolins",
        description: "Projet Pangolin",
        image:"/images/projects/projet-img-test.png",
        tag: ['Tous mes projets', 'API'],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 6,
        title: "Design",
        description: "Projet Design",
        image:"/images/projects/projet-img-test.png",
        tag: ['Tous mes projets', 'Design'],
        gitUrl: "/",
        previewUrl: "/"
    },
]

const ProjectsSection = ({ imgUrl, title, description }) => {
    
    const [tag, setTag] = useState ("Tous mes projets");
    const handleTagChange = (newTag) => {
        setTag(newTag);
    };
    //affichage projets selectionnes
    const filteredProjects = projectsData.filter((project) => 
        project.tag.includes(tag)
    );

  return (
   <div>
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
      onClick={handleTagChange} name="Design" 
      isSelected={tag === "Design"}  
      />
       
    </div>
    <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {filteredProjects.map((project) => 
        <ProjectCard 
        key={project.id} 
        title={project.title} 
        description={project.description} 
        imgUrl={project.image} 
        gitUrl={project.gitUrl}
        previewUrl={project.previewUrl}
        
        />)}
    </div>
   </div>
  )
}

export default ProjectsSection