import { FaTwitter, FaInstagram, FaLeaf } from "react-icons/fa";

const Header = () => {
  return (
    <nav className='navbar'>
      <h1>
        <FaLeaf className='leafLogo' /> GETFIT.AI
      </h1>
      <div className='navbarItems'>
        <li className='navabarItem'>
          <FaTwitter className='Icon' />
        </li>
        <li className='navabarItem'>
          <FaInstagram className='Icon' />
        </li>
      </div>
    </nav>
  );
};

export default Header;
