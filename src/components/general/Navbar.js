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
    <header className="bg-white px-8 sm:px-16 lg:px-24 xl:px-28 py-7">
      <nav className="navbar container mx-auto grid lg:grid-cols-12 place-items-center">
        <h1 className="logo text-azure font-mont font-bold text-3xl lg:col-span-3">
          Bookstore CMS
        </h1>
        <ul className="flex lg:col-span-3 items-center justify-evenly place-self-stretch">
          {links.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.path}
                className="link text-title font-mont font-normal text-sm text-opacity-50"
                activeClassName="active-link"
                exact
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="rounded-full border border-gray-200 w-11 h-11 flex justify-center items-center justify-self-end col-start-12">
          <img className="object-contain" src={logo} alt="UserIcon" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
