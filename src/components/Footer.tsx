import { FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='Footer'>
      <h1 className='FooterHeader'>FITNESS.AI</h1>
      <p className='FooterText'>
        The only tool you'll need to get in the best shape of your life!
      </p>
      <div className='FooterSocial'>
        <FaTwitter className='Icon' />
        <FaInstagram className='Icon' />
      </div>
      <p className='copyright'>Copyright © 2022 Fitness AI</p>
    </div>
  );
};

export default Footer;
