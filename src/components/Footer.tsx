import { FaTwitter, FaInstagram, FaLeaf } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='FooterDiv'>
      <h1 className='FooterLogo'>
        <FaLeaf className='footerLeafLogo' /> NUTRIPLAN
      </h1>
      <p className='FooterText'>
        Discover delicious and nutritious meal plans tailored to your needs!
      </p>
      <div className='FooterSocial'>
        <FaTwitter className='Icon' />
        <FaInstagram className='Icon' />
      </div>
      <p className='footercopyright'>Copyright © 2022 Nutriplan.ai</p>
    </div>
  );
};

export default Footer;
