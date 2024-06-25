// import useAuth from '../../hooks/useAuth';
import bgImg from '../assets/image.png';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className='my-4'>
      <div className=' h-full w-full '>
        <div className='btn text-xl text-white bg-black hover:bg-blue-200 hover:text-blue-600 w-60 text-center py-1 rounded-sm '>
          <Link to='/'>Back to home page</Link>
        </div>
        <h2 className='uppercase  text-center text-5xl font-extrabold text-amber-500  '>
          Page not found
        </h2>
        <img
          src={bgImg}
          alt=''
        />
      </div>
    </div>
  );
};

export default PageNotFound;
