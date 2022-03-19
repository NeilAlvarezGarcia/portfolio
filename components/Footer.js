import React from "react";

const Footer = () => (
  <footer className="bg-dark text-light text-center">
    <div className="container p-4">
      <h5>Powered by Neil Alvarez Garcia</h5>
      <p className="mb-0">
        All rights Reserved &copy; 2001 - {new Date().getFullYear()}.
      </p>
    </div>
  </footer>
);

export default Footer;
