import { BookCard } from '../BookCard';

const dataBest = [
  {
    label: 'Books',
    value: 'Books',
    desc: (
      <div className='grid lg:grid-cols-4 gap-4  md:grid-cols-2'>
        {Array.from({ length: 4 }, (_, i) => (
          <BookCard
            key={i}
            imgSrc='https://m.media-amazon.com/images/I/61TH0SGxtpL._AC_UF1000,1000_QL80_.jpg'
            isFavorite={true}
            title='Rendezvous with Rama'
            author='Arthar c. Clark '
            ratings={5.0}
            genre='Sci-Fi'
            year='1970'
            link='/books/rendezvous-with-rama'
          />
        ))}
      </div>
    ),
  },
  {
    label: 'Arts',
    value: 'Arts',
    desc: (
      <div className='grid lg:grid-cols-4 gap-4 md:grid-cols-2'>
        {Array.from({ length: 4 }, (_, i) => (
          <BookCard
            key={i}
            imgSrc='https://m.media-amazon.com/images/I/61TH0SGxtpL._AC_UF1000,1000_QL80_.jpg'
            isFavorite={true}
            title='Rendezvous with Rama'
            author='Arthar c. Clark '
            ratings={5.0}
            genre='Sci-Fi'
            year='1970'
            link='/books/rendezvous-with-rama'
          />
        ))}
      </div>
    ),
  },

  {
    label: 'Crafts',
    value: 'Crafts',
    desc: (
      <div className='grid lg:grid-cols-4 gap-4 md:grid-cols-2'>
        {Array.from({ length: 4 }, (_, i) => (
          <BookCard
            key={i}
            imgSrc='https://m.media-amazon.com/images/I/61TH0SGxtpL._AC_UF1000,1000_QL80_.jpg'
            isFavorite={true}
            title='Rendezvous with Rama'
            author='Arthar c. Clark '
            ratings={5.0}
            genre='Sci-Fi'
            year='1970'
            link='/books/rendezvous-with-rama'
          />
        ))}
      </div>
    ),
  },
];

export { dataBest };
