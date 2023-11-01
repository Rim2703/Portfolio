import React from "react";

const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-4 md:p-8 flex flex-col md:flex-row md:justify-between">
        <span className="text-center md:text-left mb-4 md:mb-0">Portfolio</span>
        <p className="text-center md:text-right text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
