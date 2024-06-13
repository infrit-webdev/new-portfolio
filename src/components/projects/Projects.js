import React from 'react'
import Title from "../layouts/Title"
import ProjectsCard from "./ProjectsCard"
import { projectOne, projectTwo, projectThree } from "../../assets/index"

const Projects = () => {
  return (
    <section id='projects' 
    className='w-full py-20 border-b-[1px] border-b-black'>
        <div className='flex justify-center items-center text-center'>
            <Title
                title= "VISIT MY PORTFOLIO AND GIVE YOUR FEEDBACK"
                des="My Projects"
            />
        </div>
        <div className='grid grid-cols-3 gap-14'>
            <ProjectsCard 
                title='SOCIAL MEDIA CLONE'
                des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sint commodi error laudantium?'
                src={projectOne}
            />
            <ProjectsCard 
                title='E-commerce Website'
                des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sint commodi error laudantium?'
                src={projectTwo}
            />
            <ProjectsCard 
                title='Chatting App'
                des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sint commodi error laudantium?'
                src={projectThree}
            />
            <ProjectsCard 
                title='SOCIAL MEDIA CLONE'
                des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sint commodi error laudantium?'
                src={projectOne}
            />
            <ProjectsCard 
                title='E-commerce Website'
                des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sint commodi error laudantium?'
                src={projectTwo}
            />
            <ProjectsCard 
                title='Chatting App'
                des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sint commodi error laudantium?'
                src={projectThree}
            />
            
            
            
        </div>
        

    </section>
  )
}

export default Projects
