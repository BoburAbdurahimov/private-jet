import React from 'react';

interface ManageriusIconProps {
  className?: string;
  size?: number;
}

export const ManageriusIcon = ({ className = "w-5 h-5", size }: ManageriusIconProps) => {
  return (
    <svg
      width={size || 20}
      height={size || 20}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Managerius Logo - Stylized 'M' with aviation elements */}
      <path
        d="M3 21L12 3L21 21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Aviation wing elements */}
      <path
        d="M6 18L9 12L12 18L15 12L18 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      />
      {/* Circle accent */}
      <circle
        cx="12"
        cy="12"
        r="2"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.5"
      />
    </svg>
  );
};

export default ManageriusIcon;
