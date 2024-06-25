import { Breadcrumbs } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

export function BreadcrumbsDefault() {
  return (
    <Breadcrumbs>
      <Link
        to='/'
        className='opacity-60'>
        Home
      </Link>
      <Link
        to='/'
        className='opacity-60'>
        {' '}
        Books
      </Link>
    </Breadcrumbs>
  );
}
