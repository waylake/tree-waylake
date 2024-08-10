import React from "react";
import { Github, Linkedin, Mail, ExternalLink, BookOpen } from "lucide-react";

const links = [
  { title: "GitHub", url: "https://github.com/waylake", icon: Github },
  {
    title: "LinkedIn",
    url: "https://linkedin.com/in/waylake",
    icon: Linkedin,
  },
  { title: "Email", url: "mailto:waylake2003@gmail.com", icon: Mail },
  {
    title: "Portfolio",
    url: "https://2024.portfolio.waylake.com/",
    icon: ExternalLink,
  },
  { title: "Blog", url: "https://cr.waylake.com/", icon: BookOpen },
];

const LinkList = () => {
  return (
    <ul className="space-y-4 w-full max-w-md">
      {links.map((link, index) => {
        const IconComponent = link.icon;
        return (
          <li key={index}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 px-4 bg-gradient-to-r from-pink-200 to-pink-300 dark:from-pink-800 dark:to-pink-700 text-gray-800 dark:text-pink-100 rounded-md font-medium transition-all duration-300 hover:scale-105 hover:shadow-md hover:from-pink-300 hover:to-pink-400 dark:hover:from-pink-700 dark:hover:to-pink-600 flex items-center justify-between group"
            >
              <span>{link.title}</span>
              <IconComponent
                size={18}
                className="text-pink-500 dark:text-pink-300 transition-colors duration-300 group-hover:text-pink-700 dark:group-hover:text-pink-200"
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default LinkList;
