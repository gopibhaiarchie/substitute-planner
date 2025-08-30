
import React from 'react';

const TrashIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m11.976 0a48.108 48.108 0 00-6.276 0m6.276 0L21 5.049M5.228 5.79L3 5.049m0 0a48.067 48.067 0 01-2.25 0m2.25 0a48.067 48.067 0 002.25 0m0 0h12.5"
    />
  </svg>
);

export default TrashIcon;