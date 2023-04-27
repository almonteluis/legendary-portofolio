import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion, useAnimation } from "framer-motion";

import { images } from "../../constants";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const controls = useAnimation();
  const handleMenuToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  const menuVariants = {
    open: { x: 0, display: "block" },
    closed: { x: 300, display: "none", transitionEnd: { display: "none" } },
  };

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt='logo' />
      </div>
      <ul className='app__navbar-links'>
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className='app__flex p-text' key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={handleMenuToggle} />

        {toggle && (
          <motion.div
            variants={menuVariants}
            initial='closed'
            animate={toggle ? "open" : "closed"}
            transition={{ duration: 0.85, ease: "easeIn" }}
          >
            <HiX onClick={handleMenuToggle} />
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={handleMenuToggle}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
