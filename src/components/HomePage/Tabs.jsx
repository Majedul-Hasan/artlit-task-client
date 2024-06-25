import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from '@material-tailwind/react';
import React from 'react';
import { BookCard } from '../BookCard';

const TabsCont = ({ children }) => {
  const data = [
    {
      label: 'Books',
      value: 'Books',
      desc: (
        <div className='grid lg:grid-cols-4 md:grid-cols-2'>
          <BookCard
            imgSrc='https://m.media-amazon.com/images/I/61TH0SGxtpL._AC_UF1000,1000_QL80_.jpg'
            isFavorite={true}
            title='Rendezvous with Rama'
            author='Arthar c. Clark '
            ratings={5.0}
            genre='Sci-Fi'
            year='1970'
          />
          <BookCard
            imgSrc='https://m.media-amazon.com/images/I/61TH0SGxtpL._AC_UF1000,1000_QL80_.jpg'
            isFavorite={false}
            title='Rendezvous with Rama'
            author='Arthar c. Clark '
            ratings={5.0}
            genre='Sci-Fi'
            year='1970'
          />
          <BookCard
            imgSrc='https://m.media-amazon.com/images/I/61TH0SGxtpL._AC_UF1000,1000_QL80_.jpg'
            isFavorite={false}
            title='Rendezvous with Rama'
            author='Arthar c. Clark '
            ratings={5.0}
            genre='Sci-Fi'
            year='1970'
          />
          <BookCard
            imgSrc='https://m.media-amazon.com/images/I/61TH0SGxtpL._AC_UF1000,1000_QL80_.jpg'
            isFavorite={true}
            title='Rendezvous with Rama'
            author='Arthar c. Clark '
            ratings={5.0}
            genre='Sci-Fi'
            year='1970'
          />
        </div>
      ),
    },
    {
      label: 'Arts',
      value: 'Arts',
      desc: (
        <div className='grid lg:grid-cols-4 md:grid-cols-2'>
          <BookCard
            imgSrc='https://m.media-amazon.com/images/I/61TH0SGxtpL._AC_UF1000,1000_QL80_.jpg'
            isFavorite={true}
            title='Rendezvous with Rama'
            author='Arthar c. Clark '
            ratings={5.0}
            genre='Sci-Fi'
            year='1970'
          />
          <BookCard
            imgSrc='https://m.media-amazon.com/images/I/61TH0SGxtpL._AC_UF1000,1000_QL80_.jpg'
            isFavorite={false}
            title='Rendezvous with Rama'
            author='Arthar c. Clark '
            ratings={5.0}
            genre='Sci-Fi'
            year='1970'
          />
          <BookCard
            imgSrc='https://m.media-amazon.com/images/I/61TH0SGxtpL._AC_UF1000,1000_QL80_.jpg'
            isFavorite={false}
            title='Rendezvous with Rama'
            author='Arthar c. Clark '
            ratings={5.0}
            genre='Sci-Fi'
            year='1970'
          />
          <BookCard
            imgSrc='https://m.media-amazon.com/images/I/61TH0SGxtpL._AC_UF1000,1000_QL80_.jpg'
            isFavorite={true}
            title='Rendezvous with Rama'
            author='Arthar c. Clark '
            ratings={5.0}
            genre='Sci-Fi'
            year='1970'
          />
        </div>
      ),
    },

    {
      label: 'Crafts',
      value: 'Crafts',
      desc: (
        <div className='grid lg:grid-cols-4 md:grid-cols-2'>
          <BookCard
            imgSrc='https://m.media-amazon.com/images/I/61TH0SGxtpL._AC_UF1000,1000_QL80_.jpg'
            isFavorite={true}
            title='Rendezvous with Rama'
            author='Arthar c. Clark '
            ratings={5.0}
            genre='Sci-Fi'
            year='1970'
          />
          <BookCard
            imgSrc='https://m.media-amazon.com/images/I/61TH0SGxtpL._AC_UF1000,1000_QL80_.jpg'
            isFavorite={false}
            title='Rendezvous with Rama'
            author='Arthar c. Clark '
            ratings={5.0}
            genre='Sci-Fi'
            year='1970'
          />
          <BookCard
            imgSrc='https://m.media-amazon.com/images/I/61TH0SGxtpL._AC_UF1000,1000_QL80_.jpg'
            isFavorite={false}
            title='Rendezvous with Rama'
            author='Arthar c. Clark '
            ratings={5.0}
            genre='Sci-Fi'
            year='1970'
          />
          <BookCard
            imgSrc='https://m.media-amazon.com/images/I/61TH0SGxtpL._AC_UF1000,1000_QL80_.jpg'
            isFavorite={true}
            title='Rendezvous with Rama'
            author='Arthar c. Clark '
            ratings={5.0}
            genre='Sci-Fi'
            year='1970'
          />
        </div>
      ),
    },
  ];
  return (
    <div className='tab-header'>
      {children}
      <div className='tab-header-actions '>
        <Tabs
          id='custom-animation'
          value='Books'>
          <TabsHeader className='w-1/2 mr-0 ml-auto'>
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}>
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody
            animate={{
              initial: { y: 250 },
              mount: { y: 0 },
              unmount: { y: 250 },
            }}>
            {data.map(({ value, desc }) => (
              <TabPanel
                key={value}
                value={value}>
                {desc}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </div>
  );
};

export default TabsCont;
