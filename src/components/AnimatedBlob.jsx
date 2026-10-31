import React from 'react';

const AnimatedBlob = ({ 
  className = "w-72 h-72", 
  color = "from-primary via-indigo-500 to-secondary", 
  opacity = "opacity-30",
  blur = "blur-[60px]" 
}) => {
  return (
    <div 
      className={`absolute pointer-events-none -z-10 blob-animate bg-gradient-to-tr ${color} ${className} ${opacity} ${blur}`}
    />
  );
};

export default AnimatedBlob;

