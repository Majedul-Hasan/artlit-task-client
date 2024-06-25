import {
  Typography,
  MenuHandler,
  MenuItem,
  Menu,
  MenuList,
} from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

const navListMenuItems = [
  {
    title: 'Noble',
    link: '/Noble',
  },
  {
    title: 'SCIENCE',
    link: '/SCIENCE',
  },
  {
    title: 'SCI-fi',
    link: '/SCI-fi',
  },
  {
    title: 'Historical ',
    link: '/Historical ',
  },
  {
    title: 'Horror ',
    link: '/Horror ',
  },
  {
    title: 'Romance ',
    link: '/Romance ',
  },
  {
    title: "Children's Fiction ",
    link: "/Children's Fiction ",
  },
  {
    title: 'Biography',
    link: '/Biography',
  },
  {
    title: 'Autobiography',
    link: '/Autobiography',
  },
];

const NavList = ({ open }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderItems = navListMenuItems.map(({ title }) => (
    <Link
      href='#'
      key={title}>
      <MenuItem>
        <Typography
          variant='small'
          color='blue-gray'
          className='mb-1 '>
          {title}
        </Typography>
      </MenuItem>
    </Link>
  ));
  return (
    <div className={`mr-4 hidden lg:block`}>
      <Menu
        allowHover
        open={isMenuOpen}
        handler={setIsMenuOpen}>
        <ul className='mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
          <Typography
            as='li'
            variant='small'
            color='blue-gray'
            className='p-1 font-normal'>
            <Link
              to='/'
              className='flex items-center'>
              Home
            </Link>
          </Typography>
          <Typography
            as='li'
            variant='small'
            color='blue-gray'
            className='p-1 font-normal'>
            <Link
              to='/authors'
              className='flex items-center'>
              Authors
            </Link>
          </Typography>
          <MenuHandler>
            <Typography
              as='a'
              href='#'
              variant='small'
              className='font-normal'>
              <MenuItem className='hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full'>
                Genre
                <ChevronDownIcon
                  strokeWidth={2}
                  className={`h-3 w-3 transition-transform ${
                    isMenuOpen ? 'rotate-180' : ''
                  }`}
                />
              </MenuItem>
            </Typography>
          </MenuHandler>
          <MenuList className='hidden grid-cols-1 gap-2 overflow-visible lg:grid'>
            <ul className='flex w-full flex-col gap-1'>{renderItems}</ul>
          </MenuList>

        </ul>
      </Menu>
    </div>
  );
};

export default NavList;
