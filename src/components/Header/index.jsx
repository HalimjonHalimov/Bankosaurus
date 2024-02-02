import Socials from '../Socials';
import { navItems } from './navItems';
import style from './Header.module.scss';
import logo from './assets/logo.svg';
import { useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';

const Header = () => {
  const isMobile = useMediaQuery('(max-width:767px)');
  const [burgerOpen, setBurgerOpen] = useState(false);
  const toNav = (val) => {
    const section = document.querySelector(`${val}`);
    setBurgerOpen(false);
    section.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <header className={style.header}>
      <div className='container'>
        <div className={style.headerBody}>
          <div className={style.headerBody__logo}>
            <img src={logo} alt='' />
          </div>
          <nav className={`${style.headerNav} ${burgerOpen && style.open}`}>
            <ul>
              {navItems.map((item, index) => (
                <li onClick={() => toNav(item.to)} key={index}>
                  {item.name}
                </li>
              ))}
            </ul>
            {isMobile && <Socials className={style.headerNav__social} />}
          </nav>

          {!isMobile && <Socials />}
          {isMobile && (
            <div
              onClick={() => setBurgerOpen(!burgerOpen)}
              className={`${style.headerBody__burger} ${
                burgerOpen && style.active
              }`}
            >
              <span></span>
              <span></span>
              <span></span>
              {/* <svg
                xmlns='http://www.w3.org/2000/svg'
                width='15'
                height='15'
                viewBox='0 0 15 15'
                fill='none'
              >
                <path d='M0 0H15V3H0V0Z' fill='white' />
                <path d='M0 6H15V9H0V6Z' fill='white' />
                <path d='M0 12H15V15H0V12Z' fill='white' />
              </svg> */}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
