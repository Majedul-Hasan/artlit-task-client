import { Typography } from '@material-tailwind/react';
import React from 'react';
import RecommendationsCard from './RecommendationsCard';

const Recommendations = () => {
  return (
    <section className='bg-blue-gray-100 '>
      <Typography
        as='h3'
        className='text-xl font-semibold p-4'>
        Similar content being viewed by others
      </Typography>
      <div className='flex justify-around my-4'>
        {Array.from({ length: 3 }, (_, i) => (
          <RecommendationsCard
            key={i}
            title='Strategic Planning Decisions: An Overview'
            link='https://media.springernature.com/w92h120/springer-static/cover-hires/book/978-3-642-33923-3?as=webp'
          />
        ))}
      </div>
    </section>
  );
};

export default Recommendations;
