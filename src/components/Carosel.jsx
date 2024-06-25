import { Carousel, Typography, Button } from '@material-tailwind/react';

export function CarouselWithContent() {
  return (
    <Carousel className='rounded-xl'>
      <div className='relative h-[65vh] w-full overflow-hidden'>
        <img
          src='https://plus.unsplash.com/premium_photo-1681843672359-f51f0cefe0ca?q=80&w=1939&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='image 1'
          className='h-full w-full object-cover'
        />
        <div className='absolute inset-0 grid h-full w-full place-items-center bg-black/25'>
          <div className='w-3/4 text-center md:w-2/4'>
            <Typography
              variant='h1'
              color='white'
              className='mb-4 text-3xl md:text-4xl lg:text-5xl'>
              The Beauty of Book
            </Typography>
            <Typography
              variant='lead'
              color='white'
              className='mb-12 opacity-80'>
              Like they say beauty lies in the eyes of the beholder, the beauty
              of books lies in the writer's perception. Every book is a laidout
              map of the writer's thinking
            </Typography>
            <div className='flex justify-center gap-2'>
              <Button
                size='lg'
                color='white'>
                Explore
              </Button>
              <Button
                size='lg'
                color='white'
                variant='text'>
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className=' h-[65vh] relative  w-full overflow-hidden'>
        <img
          src='https://images.unsplash.com/photo-1602722053020-af31042989d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='image 2'
          className='object-cover block '
        />
        <div className='absolute inset-0 grid h-full w-full items-center bg-black/25'>
          <div className='w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32'>
            <Typography
              variant='h1'
              color='white'
              className='mb-4 text-3xl md:text-4xl lg:text-5xl'>
              The Beauty of Book
            </Typography>
            <Typography
              variant='lead'
              color='white'
              className='mb-12 opacity-80'>
              Like they say beauty lies in the eyes of the beholder, the beauty
              of books lies in the writer's perception. Every book is a laidout
              map of the writer's thinking
            </Typography>
            <div className='flex gap-2'>
              <Button
                size='lg'
                color='white'>
                Explore
              </Button>
              <Button
                size='lg'
                color='white'
                variant='text'>
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className=' h-[65vh] relative w-full overflow-hidden'>
        <img
          src='https://images.unsplash.com/photo-1547555999-14e818e09e33?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='image 3'
          className='h-full w-full object-cover'
        />
        <div className='absolute inset-0 grid h-full w-full items-end bg-black/25'>
          <div className='w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32'>
            <Typography
              variant='h1'
              color='white'
              className='mb-4 text-3xl md:text-4xl lg:text-5xl'>
              The Beauty of Book
            </Typography>
            <Typography
              variant='lead'
              color='white'
              className='mb-12 opacity-80'>
              Like they say beauty lies in the eyes of the beholder, the beauty
              of books lies in the writer's perception. Every book is a laidout
              map of the writer's thinking
            </Typography>
            <div className='flex gap-2'>
              <Button
                size='lg'
                color='white'>
                Explore
              </Button>
              <Button
                size='lg'
                color='white'
                variant='text'>
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
