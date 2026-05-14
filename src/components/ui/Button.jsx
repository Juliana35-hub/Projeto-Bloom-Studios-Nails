import React from 'react';
// import { motion } from 'framer-motion'; // Comentado para evitar erros sem instalação

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "px-8 py-4 rounded-full font-semibold tracking-widest text-xs uppercase transition-all duration-300 hover:scale-105 active:scale-95";
  
  const variants = {
    primary: "bg-bloom-lilac text-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:brightness-105",
    secondary: "bg-bloom-dark text-white shadow-bloom",
    outline: "border-2 border-bloom-dark text-bloom-dark hover:bg-bloom-dark hover:text-white",
    ghost: "text-bloom-text hover:text-bloom-lilac"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
