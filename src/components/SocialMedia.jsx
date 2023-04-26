import React from "react";
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a
          href='https://twitter.com/acidSupreme'
          target='_blank'
          rel='noopener noreferrer'
        >
          <BsTwitter />
        </a>
      </div>
      <div>
        <FaFacebookF />
      </div>
      <div>
        <BsInstagram />
      </div>
    </div>
  );
};

export default SocialMedia;
