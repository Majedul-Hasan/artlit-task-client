import React, { useEffect, useState } from 'react';
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from '@material-tailwind/react';

import NavList from './navList';
import { Link, useNavigate } from 'react-router-dom';
import { createBrowserHistory } from 'history';

export function PublicNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);
  const [user, setUser] = useState({});
  let {
    location: { pathname },
  } = createBrowserHistory();

  console.log(pathname);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
  }, [pathname]);

  // console.log(user);

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const navigate = useNavigate();
  const navigationHandler = (to) => {
    navigate(to);
  };
  const handleLogOut = () => {
    localStorage.removeItem('user');
    navigate('/signup');
  };

  return (
    <nav className='mt-0  '>
      <Navbar className='sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4'>
        <div className='flex items-center justify-between text-blue-gray-900'>
          <Typography
            as={Link}
            to='/'
            className='mr-4 cursor-pointer py-1.5 font-medium'>
            ARTLIT
          </Typography>
          <div className='flex items-center gap-4'>
            <NavList />
            {user?.email ? (
              <div className='flex items-center gap-x-1'>
                <Button
                  onClick={() => handleLogOut('/login')}
                  variant='text'
                  size='sm'
                  className='lg:inline-block'>
                  <span>Log out</span>
                </Button>
              </div>
            ) : (
              <div className='flex items-center gap-x-1'>
                <Button
                  onClick={() => navigationHandler('/login')}
                  variant='text'
                  size='sm'
                  className='hidden lg:inline-block'>
                  <span>Log In</span>
                </Button>
                <Button
                  onClick={() => navigationHandler('/signup')}
                  variant='gradient'
                  size='sm'
                  className='hidden lg:inline-block'>
                  <span>Sign in</span>
                </Button>
              </div>
            )}

            <IconButton
              variant='text'
              className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
              ripple={false}
              onClick={() => setOpenNav(!openNav)}>
              {openNav ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  className='h-6 w-6'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth={2}>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          <NavList open={openNav} />
          <div className='flex items-center gap-x-1'>
            <Button
              fullWidth
              variant='text'
              size='sm'
              className=''>
              <span>Log In</span>
            </Button>
            <Button
              fullWidth
              variant='gradient'
              size='sm'
              className=''>
              <span>Sign in</span>
            </Button>
          </div>
        </MobileNav>
      </Navbar>
    </nav>
  );
}
