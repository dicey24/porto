import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-blue-particles-4788-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="z-10 text-center p-4">
        <h1 className="text-6xl font-bold mb-4 animate-fade-in-down">
          Mohammed
        </h1>
        <h2 className="text-3xl mb-6 animate-fade-in-up">
          Full-Stack Developer & Control Engineer
        </h2>
        <p className="text-xl mb-8 max-w-2xl animate-fade-in">
          Crafting innovative solutions at the intersection of software and control systems
        </p>
        <Link
          to="/about"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 animate-pulse"
        >
          Discover My Work
        </Link>
      </div>
      <div className="absolute bottom-8 animate-bounce">
        <ArrowDown className="h-8 w-8 text-white" />
      </div>
    </div>
  );
};

export default Home;