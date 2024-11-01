import { FaFacebookF, FaGithub, FaInstagram } from 'react-icons/fa';
import PropTypes from 'prop-types';

const teamMembers = [
  {
    name: 'loreum Ipsum',
    role: 'Graphics Designer, Video Editor',
    imgSrc:
      'https://images.unsplash.com/photo-1618937995753-94fe3bd8375c?q=80&w=2656&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    socialLinks: [
      {
        href: '#',
        icon: <FaFacebookF className='text-blue-600' />,
      },
      {
        href: '#',
        icon: <FaInstagram className='text-pink-500' />,
      },
      {
        href: '#',
        icon: <FaGithub className='text-gray-300' />,
      },
    ],
  },
  {
    name: 'loreum Ipsum',
    role: 'Web Developer, Photographer',
    imgSrc:
      'https://images.unsplash.com/photo-1618937995753-94fe3bd8375c?q=80&w=2656&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    socialLinks: [
      {
        href: '#',
        icon: <FaFacebookF className='text-blue-600' />,
      },
      {
        href: '#',
        icon: <FaInstagram className='text-pink-500' />,
      },
      {
        href: '#',
        icon: <FaGithub className='text-gray-300' />,
      },
    ],
  },
  {
    name: 'loreum Ipsum',
    role: 'Data Scientist , Marketing Manager',
    imgSrc:
      'https://images.unsplash.com/photo-1618937995753-94fe3bd8375c?q=80&w=2656&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    socialLinks: [
      {
        href: '#',
        icon: <FaFacebookF className='text-blue-600' />,
      },
      {
        href: '#',
        icon: <FaInstagram className='text-pink-500' />,
      },
      {
        href: '#',
        icon: <FaGithub className='text-gray-300' />,
      },
    ],
  },
  {
    name: 'loreum Ipsum',
    role: 'Web Developer, Videographer',
    imgSrc:
      'https://images.unsplash.com/photo-1618937995753-94fe3bd8375c?q=80&w=2656&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    socialLinks: [
      {
        href: '#',
        icon: <FaFacebookF className='text-blue-600' />,
      },
      {
        href: '#',
        icon: <FaInstagram className='text-pink-500' />,
      },
      {
        href: '#',
        icon: <FaGithub className='text-gray-300' />,
      },
    ],
  },
];
interface TeamMember {
  name: string;
  role: string;
  imgSrc: string;
  socialLinks: {
    href: string;
    icon: JSX.Element;
  }[];
}

const TeamMemberCard = ({ member }: { member: TeamMember }) => (
  <div className='bg-white w-auto  dark:bg-[#09090B] border border-gray-300 dark:border-[#27272A] text-gray-800 dark:text-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg  flex flex-col justify-around transition-shadow duration-200 ease-in-out'>
    <img
      src={member.imgSrc}
      alt={member.name}
      className='rounded-full object-cover w-24 h-24 md:w-20 md:h-20 mx-auto mb-4'
    />
    <h3 className='text-lg md:text-xl font-medium text-center'>
      {member.name}
    </h3>
    <p className='text-sm text-gray-500 dark:text-gray-400 text-center'>
      {member.role}
    </p>
    <div className='flex justify-center space-x-3 mt-4'>
      {member.socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className='p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200'
        >
          {link.icon}
        </a>
      ))}
    </div>
  </div>
);

const TeamSection = () => (
  <div className='py-12 bg-gray-50 dark:bg-black border border-gray-300 dark:border-[#27272A] rounded-xl mt-5 max-w-6xl mx-auto'>
    <h2 className='text-2xl font-semibold text-center text-gray-900 dark:text-gray-100 mb-4'>
      Meet Our Team
    </h2>
    <p className='text-gray-700 dark:text-gray-100 text-center mb-4 mx-3'>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
      repudiandae volupta
    </p>
    <div className='max-w-4xl mx-2 grid gap-2   sm:px-6 lg:px-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
      {teamMembers.map((member, index) => (
        <TeamMemberCard key={index} member={member} />
      ))}
    </div>
  </div>
);

TeamMemberCard.propTypes = {
  member: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    socialLinks: PropTypes.arrayOf(
      PropTypes.shape({
        href: PropTypes.string.isRequired,
        icon: PropTypes.element.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default TeamSection;
