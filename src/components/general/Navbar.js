import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../Assets/userIcon.svg';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '/category',
      text: 'CATEGORIES',
    },
  ];

  return (
    <header className="bg-white px-8 sm:px-16 lg:px-24 xl:px-28 2xl:px-40 py-7">
      <nav className="container mx-auto grid grid-cols-2 lg:grid-cols-12 lg:place-items-center gap-4">
        <h1 className="text-azure font-mont font-bold text-2xl md:text-3xl col-span-2 lg:col-span-4 xl:col-span-3 flex justify-center lg:justify-self-start">
          Bookstore CMS
        </h1>
        <ul className="flex col-span-2 lg:col-span-3 items-center justify-around lg:justify-evenly lg:place-self-stretch">
          {links.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.path}
                className="link text-title font-mont font-normal text-base md:text-sm text-opacity-50"
                activeClassName="active-link"
                exact
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="rounded-full border border-gray-200 w-11 h-11 justify-center items-center justify-self-end hidden lg:flex lg:col-start-12 cursor-pointer">
          <img className="object-contain" src={logo} alt="UserIcon" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
