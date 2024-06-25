import { Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const Keywords = () => {
  const keywords = [
    'Technology Roadmapping',
    'S-Curve',
    'Exponential Progress',
    'Technology Scouting',
    'Technology Transfer',
    'Technology Management',
    'R&D Portfolio Management',
    'The Singularity',
    'Graduate textbook',
  ];
  return (
    <section>
      <Typography
        as={'h2'}
        className='text-2xl font-semibold py-4'
        id='keywords'>
        Keywords
      </Typography>
      <div className='c-book-section'>
        <ul className='flex flex-wrap gap-4 '>
          {keywords.map((keyword, id) => (
            <Typography
              key={id}
              as='li'
              className='bg-blue-gray-50 rounded-md px-4 py-2 hover:bg-blue-gray-100 hover:underline '>
              <Link
                className=''
                to='/books/Technology-Roadmapping'>
                {keyword}
              </Link>
            </Typography>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Keywords;
