import React from 'react';

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const RecommendationsCard = ({ link, title }) => {
  return (
    <Link
      to={'/books/strategic-planning-decisions'}
      className='w-1/3 overflow-hidden bg-transparent'>
      <Card className='bg-transparent'>
        <CardHeader
          floated={false}
          shadow={false}
          color='transparent'
          className='m-0 rounded-none '>
          <div className='w-full flex justify-center'>
            <img
              src={link}
              alt='ui/ux review check'
            />
          </div>
        </CardHeader>
        <CardBody>
          <Typography
            variant='lead'
            color='gray'
            className='mt-3 font-medium text-md  hover:underline text-center'>
            {title}
          </Typography>
        </CardBody>
      </Card>
    </Link>
  );
};

export default RecommendationsCard;
