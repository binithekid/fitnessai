import { FaTwitter, FaInstagram, FaLeaf } from "react-icons/fa";

const Header = () => {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <nav className='navbar'>
      <div className='navbarLogo' onClick={refreshPage}>
        <h1>
          <FaLeaf className='leafLogo' /> NUTRIPLAN
        </h1>
      </div>
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
