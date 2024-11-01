import { FaExternalLinkAlt } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
const projects = [
  {
    name: 'loreum Ipsum',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit',
    tech: ['React', 'Tailwind'],
    code: '#',
    preview: '#',
  },
  {
    name: 'loreum Ipsum',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit',
    tech: ['Next JS', 'Tailwind'],
    code: '#',
    preview: '#',
  },
  {
    name: 'loreum Ipsum',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit',
    tech: ['Next JS', 'Tailwind', 'shadcn/ui'],
    code: '#',
    preview: '#',
  },
];
const Projects = () => {
  return (
    <div
      className='flex flex-col items-center my-10 px-4 md:px-0 mb-10'
      id='projects'
    >
      <h1 className='dark:text-darktext text-lighttext text-3xl md:text-4xl font-extrabold pt-10 pb-6'>
        PROJECTS
      </h1>
      <div className='w-full md:w-[70vw] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {projects.map(({ name, description, tech, code, preview }) => (
          <div
            key={name}
            className='flex flex-col items-center border dark:border-darkborder dark:hover:border-darkborderhover  border-lightborder rounded-xl p-4 py-6 shadow-md hover:shadow-2xl dark:hover:shadow-darkshadow hover:shadow-lightshadow group min-h-40 bg-transparent dark:shadow-darkshadow shadow-lightshadow hover:-translate-y-1 transition duration-300'
          >
            {/* Project Name */}
            <p className='text-lg md:text-xl font-extrabold  dark:text-gray-100 text-gray-900'>
              {name}
            </p>

            {/* Project Description */}
            <p className='my-2 text-sm md:text-base dark:text-darktext text-lighttext text-center'>
              {description}
            </p>

            {/* Tech Stack */}
            <ul className='flex flex-row justify-between space-x-2 md:space-x-4 text-sm dark:text-darktext text-lighttext'>
              {tech.map((stack, index) => (
                <li key={index}>{stack}</li>
              ))}
            </ul>

            {/* Project Links */}
            <div className='flex flex-row justify-between space-x-2 md:space-x-4 pt-4 dark:text-darktext text-lighttext'>
              <a
                target='none'
                className='hover:text-lightprimary dark:hover:text-primary cursor-pointer'
                href={code}
              >
                <FaGithub />
              </a>
              <a
                target='none'
                className='hover:text-lightprimary dark:hover:text-primary cursor-pointer'
                href={preview}
              >
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
