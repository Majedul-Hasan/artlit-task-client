import { Typography } from '@material-tailwind/react';

import { Link } from 'react-router-dom';

const BookDetailComponent = () => {
  return (
    <div className='bg-blue-gray-50 flex gap-4'>
      <div className=''>
        <Link
          to='/'
          className='app-article-masthead__journal-link'>
          <img
            width={200}
            height={300}
            src='https://media.springernature.com/w90/springer-static/cover-hires/book/978-3-030-88346-1?as=webp'
            alt
          />

          <svg
            data-component='expand-icon'
            className='c-expand-overlay c-expand-overlay--book u-icon'
            width={18}
            height={18}
            aria-hidden='true'
            focusable='false'>
            <use xlinkHref='#icon-eds-i-arrow-diagonal-medium' />
          </svg>
        </Link>
      </div>
      <div className='py-5'>
        <Typography
          as='h3'
          color='black'
          className=' font-bold text-3xl  '>
          Technology Roadmapping and Development
        </Typography>
        <Typography
          as='p'
          color='black'
          className=''>
          A Quantitative Approach to the Management of Technology
        </Typography>
        <ul className='flex'>
          <Typography
            as='li'
            className=''>
            Textbook
          </Typography>
          <Typography
            as='li'
            className='ml-2'>
            <span className='border-l border '>©</span> 2022
          </Typography>
        </ul>
      </div>
    </div>
  );
};

export default BookDetailComponent;
