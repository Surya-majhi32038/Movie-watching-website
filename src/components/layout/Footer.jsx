import React from 'react'
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 bottom-0 text-white md-xsm:p-3  py-4">
      <div className="container  flex flex-col items-center">
        
        {/* Social Media Links */}
        <div className="mb-3">
          <NavLink to="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 mx-2">
            Facebook
          </NavLink>
          <NavLink to="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 mx-2">
            Twitter
          </NavLink>
          <NavLink to="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 mx-2">
            Instagram
          </NavLink>
        </div>

        {/* Footer Text */}
        <p className="text-sm text-gray-400 md-xsm:w-auto md-xsm:text-center">
          © 2024 Movie App. All rights reserved. Designed with ❤ by Surya Majhi.
        </p>
      </div>
    </footer>
  )
}

export default Footer;