import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import Heart from '../../icons/Heart';
import Star from '../../icons/Star';

export function BookCard({
  imgSrc,
  isFavorite,
  title,
  author,
  ratings,
  genre,
  year,
  link,
}) {
  return (
    <Card className='w-full max-w-[26rem] shadow-lg'>
      <CardHeader
        floated={false}
        color='blue-gray'
        className=''>
        <div className='flex justify-center h-60 '>
          <img
            className='w-full content-start '
            src={imgSrc}
            alt='Book Card'
          />
        </div>

        <div className='to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 ' />
        <IconButton
          size='sm'
          color={isFavorite ? 'red' : 'gray'}
          variant='text'
          className='!absolute top-4 right-4 rounded-full'>
          <Heart />
        </IconButton>
      </CardHeader>
      <CardBody>
        <div className='mb-3 flex items-center justify-between'>
          <Typography
            variant='h5'
            color='blue-gray'
            className='font-medium'>
            <Link to={link}>{title}</Link>
          </Typography>
          <Typography
            color='blue-gray'
            className='flex items-center gap-1.5 font-normal'>
            <Star />
            {ratings}
          </Typography>
        </div>
        <Typography color='gray'>
          author : <Link>{author}</Link>
        </Typography>
        <div className='flex flex-col'>
          <div className='group my-1 inline-flex flex-wrap items-center '>
            <Tooltip content='genre'>
              <span className='cursor-pointer  border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70'>
                <Link to='/'>{genre} </Link>
              </span>
            </Tooltip>
          </div>
          <div className='group my1  inline-flex flex-wrap items-center gap-3'>
            year:
            <span className='cursor-pointer   p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70'>
              <Link to={'/'}>{year} </Link>
            </span>
          </div>
        </div>
      </CardBody>
      <CardFooter className='pt-3'>
        <Button
          color='blue'
          size='lg'
          fullWidth={true}>
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
}
