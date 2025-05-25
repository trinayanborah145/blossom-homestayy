import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hoverable = false }) => {
  return (
    <div 
      className={`
        bg-white rounded-lg overflow-hidden shadow-md
        ${hoverable ? 'transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;