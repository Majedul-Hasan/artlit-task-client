import React from 'react';
import { CarouselWithContent } from '../components/Carosel';
import Sections from '../components/HomePage/Sections';
import { Typography } from '@material-tailwind/react';

const HomePage = () => {
  return (
    <div>
      <CarouselWithContent />
      <Sections>
        <div className='tab-header-title w-full text-center my-8'>
          <Typography variant='h3'>Best Sellers</Typography>
          <Typography variant='paragraph'>
            Explore the best sellers from ArtLit
          </Typography>
        </div>
      </Sections>
      <Sections>
        <div className='tab-header-title w-full text-center my-8'>
          <Typography variant='h3'>Published this year</Typography>
          <Typography variant='paragraph'>
            Explore the latest Item from ArtLit
          </Typography>
        </div>
      </Sections>
    </div>
  );
};

export default HomePage;
