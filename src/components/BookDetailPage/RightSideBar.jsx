import { Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import BuyingOptions from './BuyingOptions';

const RightSideBar = () => {
  return (
    <div className='w-1/3'>
      <aside>
        <div className='app-article-access c-book-buy-box'>
          <Typography
            as={'h2'}
            className='text-xl text-center font-semibold'>
            Access this book
          </Typography>

          <div className='bg-cyan-700'>
            <Link
              to='/login'
              className='flex justify-center text-cyan-200 py-3 text-xl font-semibold rounded-md '>
              <span>Log in</span>
            </Link>
          </div>
          <div
            className='c-article-buy-box'
            data-test='buy-box-mobile'
            data-container-type='buy-box'
            data-track-component='buy-box'>
            <div
              className='sprcom-buybox-darwin-b buybox '
              id='sprcom-buybox-darwin-b'>
              <div className='my-6'>
                <BuyingOptions
                  option='eBook'
                  price='250'
                />
                <BuyingOptions
                  option='Soft cover'
                  price='450'
                />
                <BuyingOptions
                  option='heard cover'
                  price='450'
                />
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default RightSideBar;
