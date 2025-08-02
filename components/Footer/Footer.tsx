
import React from 'react';



const Footer = () => {
  return (
    
          <div className="text-center bg-gray-800 text-white p-4 footer">
          
            {/* // This is a placeholder for the copyright year, you can use a dynamic year if needed isme content change karumnga  */}
            <span className="text-sm">
              <a>
               SangLok © {new Date().getFullYear()} - All rights reserved.
              </a>
            </span>
          </div>

  );
};

export default Footer;
