import {
  FaGithub,
} from "react-icons/fa";

const socialLinks = [
  { href: "https://github.com/Saurabh-git-hub", icon: <FaGithub /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-violet-300 py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        
        {/* Auto-updating year */}
        <p className="text-center text-sm font-light md:text-left">
          &copy; Nova {new Date().getFullYear()}. All rights reserved
        </p>

        {/* Social links */}
        <div className="flex justify-center gap-4 md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Privacy Policy */}
        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>

      {/* Made with love section */}
      <div className="mt-2 text-center text-sm font-light">
        Made with ❤️ by{" "}
        <a
          href="https://saurabh-s-w-e.vercel.app/" // replace with your actual portfolio URL
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline font-medium"
        >
          Saurabh Chauhan
        </a>
      </div>
    </footer>
  );
};

export default Footer;