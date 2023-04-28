import logo from '../assets/logo.svg';

function Header() {
  return (
    <header>
      <img src={logo} alt='logo' className='header--logo' />
      <h1>my travel journal.</h1>
    </header>
  );
}

export default Header;
