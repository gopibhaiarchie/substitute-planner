
import React from 'react';

const TableIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="currentColor" 
        {...props}>
        <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125V6.375m1.125 13.125A1.125 1.125 0 004.5 18.375h15a1.125 1.125 0 001.125-1.125V6.375m-17.25 13.125A1.125 1.125 0 012.25 18.375V6.375a1.125 1.125 0 011.125-1.125h17.25a1.125 1.125 0 011.125 1.125v12a1.125 1.125 0 01-1.125 1.125M3.375 9h17.25M9 12.75h6" 
        />
    </svg>
);

export default TableIcon;
