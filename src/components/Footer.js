import React from 'react';

const Footer = () => {
  return(
    <footer>
      <div className="left">
        <p>Hi, my name is Alysia! I’m a UX Designer living and working in London...</p>
        <p className="readmore">Read more <a href="">about me here.</a></p>
      </div>
      <div className="right">
        <p>Get in contact!</p>
        <p>email: <a href="mailto:alysiapickup@gmail.com">alysiapickup@gmail.com</a></p>
        <ul>
          <li><a href="#"><i className="fab fa-instagram"></i></a></li>
          <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
          <li></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;