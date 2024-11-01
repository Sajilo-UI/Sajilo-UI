import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="max-w-4xl min-w-72 mx-auto flex flex-col md:flex-row items-center bg-white dark:bg-transparent p-4 md:p-6 rounded-lg  mb-5 border border-gray-400 hover:border-gray-950 dark:hover:border-gray-600 dark:border-gray-700 ">
      {/* Profile Image and Info Container */}
      <div className="flex items-center flex-row md:flex-row space-x-2 md:flex-grow mb-4 md:mb-0">
        {/* Profile Image */}
        <div className="mb-2 md:mb-0 md:mr-5 flex-shrink-0">
        img here
        </div>

        {/* Profile Info */}
        <div className="text-center md:text-left">
          <h2 className="headerText text-2xl  font-bold mb-1 dark:text-white text-black">
            Your Name
          </h2>
          <p className="dark:text-white text-gray-900 mb-1">
            Your Role
          </p>
          <a
            href="https://www.google.com/maps"
            rel="noopener noreferrer"
            className="hover:underline dark:text-white text-gray-900"
          >
            Address Here
          </a>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center md:justify-center items-center space-x-5">
        <a
          href="https://x.com"
          rel="noopener noreferrer"
        >
          <FaTwitter className="dark:text-white text-gray-900 text-2xl dark:hover:text-blue-500 hover:text-blue-500" />
        </a>
        <a
          href="https://github.com"
          rel="noopener noreferrer"
        >
          <FaGithub className="dark:text-white text-gray-900 text-2xl dark:hover:text-indigo-500 hover:text-indigo-500" />
        </a>
        <a
          href="https://www.linkedin.com"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="dark:text-white text-gray-900 text-2xl dark:hover:text-blue-500 hover:text-blue-500" />
        </a>
        <a
          href="https://www.instagram.com"
          rel="noopener noreferrer"
        >
          <FaInstagram className="dark:text-white text-gray-900 text-2xl dark:hover:text-pink-500 hover:text-pink-500" />
        </a>

        {/* using theme component  */}
      </div>
    </nav>
  );
};

export default Header;