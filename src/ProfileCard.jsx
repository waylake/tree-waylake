import React from "react";
import LinkList from "./LinkList";

const ProfileCard = () => {
  return (
    <div className="max-w-md w-full bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-md rounded-lg shadow-lg p-8 relative z-10 transition-all duration-500 transform hover:scale-105">
      {/* Sakura decoration */}
      <div className="absolute top-0 left-0 w-16 h-16 bg-pink-200 dark:bg-pink-700 rounded-tl-lg rounded-br-full transition-colors duration-500"></div>
      <div className="absolute top-0 right-0 w-16 h-16 bg-pink-200 dark:bg-pink-700 rounded-tr-lg rounded-bl-full transition-colors duration-500"></div>

      {/* Profile image */}
      <div className="mb-8 relative">
        <div className="w-32 mx-auto overflow-hidden rounded-full border-4 border-pink-300 dark:border-pink-500 shadow-md transition-colors duration-500">
          <img
            src="/profile.png"
            alt="Waylake's Profile"
            className="w-40 h-40 object-cover object-top"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-pink-300 to-transparent dark:from-pink-600 dark:to-transparent opacity-30 rounded-full transition-colors duration-500"></div>
      </div>

      {/* Name */}
      <h1 className="text-3xl font-semibold text-center mb-6 text-gray-800 dark:text-pink-100 transition-colors duration-500">
        황도연 (Doyeon Hwang | Waylake)
      </h1>

      {/* Bio */}
      <p className="text-center mb-6 text-gray-600 dark:text-pink-200 transition-colors duration-500">
        FullStack Developer | Software Developer | Data Engineer | Always
        Learning
      </p>

      {/* Expertise */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-pink-100">
          Expertise
        </h2>
        <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
          <li>Data Crawling, Scraping, Enginerring</li>
          <li>Web App Developing (React, Next.js, Express.js)</li>
          <li>DevOps (AWS, Docker, Terraform)</li>
        </ul>
      </div>

      <LinkList />
    </div>
  );
};

export default ProfileCard;
