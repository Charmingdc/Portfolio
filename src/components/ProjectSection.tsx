import SvgIcons from './SvgIcons.tsx';
import ProjectBox from './ProjectBox.tsx';
import useProjects from '../hooks/useProjects.tsx';

interface Project {
 name: string;
 projectId: string;
 githubLink?: string;
 imgSoure: string;
 type: string;
 description: string;
 stacks: string[];
 liveUrl: string;
}

const ProjectSection = () => {
  const projects: Project = useProjects();
  
  
  return (
    <section>
      <div className='section-headtag'>
        <h3> Portfolio </h3>
        <SvgIcons type='rightDownArrow' />
      </div>
      
      <h2 className='section-headtitle'>
        Design, tech & some magic 
      </h2>
      
      <p> 
        Blending mixes of latest technologies to create innovatives and problem-solving projects, Here some of my works.
      </p>
      
      <div className='projects-container'>
        { 
          projects.map((project, index) => (
           <ProjectBox projectDetails={project} key={index} />
         ))
        }
      </div>
    </section>
  )
}


export default ProjectSection;