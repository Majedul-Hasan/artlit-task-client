import React from 'react';
import { CarouselWithContent } from '../components/Carosel';
import Sections from '../components/HomePage/Sections';
import { Typography } from '@material-tailwind/react';

import { dataBest } from '../components/HomePage/dataBest';

const HomePage = () => {
  return (
    <div>
      <CarouselWithContent />
      <Sections data={dataBest}>
        <div className='tab-header-title w-full text-center my-8'>
          <Typography variant='h3'>Best Sellers</Typography>
          <Typography variant='paragraph'>
            Explore the best sellers from ArtLit
          </Typography>
        </div>
      </Sections>
      <Sections data={dataBest}>
        <div className='tab-header-title w-full text-center my-8'>
          <Typography variant='h3'>Latest Titles</Typography>
          <Typography variant='paragraph'>
            Explore the latest titles from ArtLit
          </Typography>
        </div>
      </Sections>
      <Sections data={dataBest}>
        <div className='tab-header-title w-full text-center my-8'>
          <Typography variant='h3'>Trending Titles</Typography>
          <Typography variant='paragraph'>
            Explore the trending titles from ArtLit
          </Typography>
        </div>
      </Sections>
    </div>
  );
};

export default HomePage;
