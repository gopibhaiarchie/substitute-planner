
import React from 'react';

const UserGroupIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
      d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962A3.375 3.375 0 019 15a3.375 3.375 0 01-3.375-3.375m0 0c1.864 0 3.375-1.511 3.375-3.375S7.489 4.875 5.625 4.875 2.25 6.386 2.25 8.25m8.25 3.75a3.375 3.375 0 01-3.375 3.375m3.375-3.375a3.375 3.375 0 013.375 3.375m-11.25 0c1.864 0 3.375-1.511 3.375-3.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

export default UserGroupIcon;
