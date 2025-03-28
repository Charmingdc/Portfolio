import { useState, useEffect, useRef } from "react"
import { motion, MotionConfig } from 'motion/react';

import SvgIcons from './SvgIcons.tsx';

const AboutmeSection = () => {
  const hasAlreadyGotYrsInc = useRef(false);
  const [yearsOfExp, setYearsOfExp] = useState<number>(2);
  
  const variants = {
   hidden: { opacity: 0, y: '4rem' },
   active: { opacity: 1, y: '0rem' }
  }
 
 
  const currentYear = new Date().getFullYear();
  useEffect(() => {
   if (hasAlreadyGotYrsInc.current) return;
   
   const increaseInYrs = currentYear - 2025;
   
   setYearsOfExp(prev => prev + increaseInYrs);
   hasAlreadyGotYrsInc.current = true;
  }, [currentYear]);
  
  
  return (
    <section>
    
      <MotionConfig 
        transition={{ duration: 1, ease: 'easeOut'}}>
        <motion.div 
          className='section-headtag'
          variants={variants}
          initial="hidden"
          whileInView="active">
          <h3> About me </h3>
        
          <SvgIcons type='rightDownArrow' width='30px' height='30px' />
        </motion.div>
      
        <motion.h1
          className='section-headtitle'
          variants={variants}
          initial="hidden"
          whileInView="active"> 
           Approach and philosophy
         </motion.h1>
      </MotionConfig>


      <motion.div 
        className="about-section-brief"
        initial={{opacity: 0, x: '-100%'}}
        whileInView={{ opacity: 1, x: '0', transition: {duration: 1, ease: 'easeOut'} }}>
        
        <div>
          <img 
          src='/illustrations/my-dp.png' 
          alt='Adebayo Muis ( Charmingdc )' />
        </div>
        
        <ul>
          <li> 
            <strong> 🧑‍💻 Name: </strong>
            Adebayo Muis
          </li>
          <li> 
            <strong> 🆔 Alias: </strong> Charmingdc
          </li>
          <li>
            <strong> 🎨 Hobby: </strong>
             Coding, Reading, Drawing
          </li>
          <li>
           <strong> 📅 Experience: </strong>
            { yearsOfExp }+ years
          </li>
          <li>
            <strong> 🚩 Location: </strong>
            Nigeria
          </li>
        </ul>
      </motion.div>
      
      <motion.div 
        className='about-section-info'
        initial={{opacity: 0, y: '4rem'}}
        whileInView={{ opacity: 1, y: '0', transition: {duration: 1, ease: 'easeOut'} }}
        >
          <p>
            About me? I am a dedicated and creative web developer with a strong foundation in JavaScript, TypeScript, React, and Firebase. My passion lies in building user-friendly, scalable applications that solve real-world problems.
          </p>

          <p>
            With a focus on frontend development and a growing interest in backend technologies, I aim to create meaningful digital experiences. I value clean, maintainable code and love turning innovative ideas into functional solutions.
          </p>

          <p>
            Driven by curiosity and a desire for continuous growth, I’m always exploring new tools, frameworks, and ways to improve my craft.
          </p>
      </motion.div>
    </section>
  )
}

export default AboutmeSection;