import { motion } from 'motion/react';
// import SvgIcons from './SvgIcons.tsx';

interface projectDetailsProps {
 name: string;
 type: string;
 githubLink?: string;
 projectId: string;
 imgSource: string;
 description: string;
 stacks: string[];
 liveUrl: string;
}

const ProjectBox: React.FC<{ projectDetails: projectDetailsProps }> = ({ projectDetails }) => {
 const variants = {
   hidden: { opacity: 0, y: '4rem'},
   active: { opacity: 1, y: '0rem' }
  }
  

  return (
    <motion.div 
      className='project-box'
      variants={variants}
      initial="hidden"
      whileTap={{ scale: 1.2 }}
      whileInView="active"
      transition={{ duration: 1, ease: 'easeOut'}}>
      <div className='project-image'>
        <img 
          src={projectDetails.imgSource}
          alt={`${projectDetails.name} preview`} />
      </div>
      
      <div className='project-info'>
        <h2> { projectDetails.name } </h2>
        
        <p>
          { projectDetails.description }
        </p>
        
        <div className='project-stacks'>
          {projectDetails.stacks
          .map((stack, index) => (
            <div className='stack' key={index}>
              { stack }
            </div>
          ))}
        </div>
        
        <ul className='project-cta'>
          <li>
            <a href={projectDetails.liveUrl} target='blank'>
              View Project
            </a>
          </li>
          
          <li>
           <a href={projectDetails.githubLink} target='_blank'>
             Source Code
           </a>
          </li>
        </ul>
      </div>
    </motion.div>
  )
}


export default ProjectBox;