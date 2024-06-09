import React from 'react'
import { AiFillAppstore } from "react-icons/ai"
import { FaMobile, FaGlobe, FaBars } from "react-icons/fa"
import { SiProgress, SiAntdesign } from "react-icons/si"
import Title from "../layouts/Title"
import Card from "./Card"

const Features = () => {
  return (
    <section 
      id="features" 
      className="w-full py-20 border-b-[1px] border-b-black">

      <Title title="Features" des="What I do" />
      <div className='grid grid-cols-3 gap-20'>
        <Card 
          title='Business Strategy'
          des='lorem ipsum dolor sit amet consetetur adipsicing elit. Atque soluta hic consequuntur eun repellendus ad.'
          icon={<FaBars />}
        />
        <Card 
          title='App Development'
          des='lorem ipsum dolor sit amet consetetur adipsicing elit. Atque soluta hic consequuntur eun repellendus ad.'
          icon={<AiFillAppstore />}
        />
        <Card 
          title='SEO Optimization'
          des='lorem ipsum dolor sit amet consetetur adipsicing elit. Atque soluta hic consequuntur eun repellendus ad.'
          icon={<SiProgress />}
        />
        <Card 
          title='Mobile Development'
          des='lorem ipsum dolor sit amet consetetur adipsicing elit. Atque soluta hic consequuntur eun repellendus ad.'
          icon={<FaMobile />}
        />
        <Card 
          title='UX Design'
          des='lorem ipsum dolor sit amet consetetur adipsicing elit. Atque soluta hic consequuntur eun repellendus ad.'
          icon={<SiAntdesign />}
        />
        <Card 
          title='Hosting Websites'
          des='lorem ipsum dolor sit amet consetetur adipsicing elit. Atque soluta hic consequuntur eun repellendus ad.'
          icon={<FaGlobe />}
        />
        
      </div>
    </section>
  )
}

export default Features
