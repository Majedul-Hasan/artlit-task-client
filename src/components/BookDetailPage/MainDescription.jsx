import { Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import AboutBook from './AboutBook';
import Recommendations from './Recommendations';
import Keywords from './Keywords';

const MainDescription = () => {
  return (
    <main className='w-2/3 '>
      <section>
        <div className='app-overview-section'>
          <Typography
            as={'h2'}
            className='text-3xl font-semibold '>
            Overview
          </Typography>
          <p>
            <span>Authors:</span>{' '}
            <span>
              <Link to='/'>Olivier L. De Weck</Link>
            </span>
          </p>
          <ol
            className='buying-option-usps'
            data-test='author-info'>
            <span>Olivier L. De Weck</span>

            <li>
              <Typography
                as='p'
                className=''>
                Department of Aeronautics and Astronautics, Massachusetts
                Institute of Technology, Cambridge, USA
                <br />
              </Typography>
            </li>
          </ol>
          <div className='c-list-bullets c-list-bullets--no-spacing u-mt-24'>
            <ul className='c-book-show-more-less'>
              <li>
                Introduces a framework, ATRA, for quantitative technology
                roadmaps and R&amp;D portfolios with a lucid step-by-step
                approach
              </li>
              <li>
                Elucidates the ATRA framework through analysis which was
                validated on an actual $1 billion R&amp;D portfolio at Airbus
              </li>
              <li>
                Reinforces concepts with in-depth case studies, practical
                exercises, examples, and thought experiments
              </li>
            </ul>
          </div>
        </div>
      </section>
      <AboutBook />
      <Recommendations />
      <Keywords />
    </main>
  );
};

export default MainDescription;
