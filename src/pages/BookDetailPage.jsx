import BookDetailComponent from '../components/BookDetailPage/BookDetailComponent';
import { BreadcrumbsDefault } from '../components/BookDetailPage/Breadcrumbs';
import DetailContainer from '../components/BookDetailPage/DetailContainer';

const BookDetailPage = () => {
  return (
    <div>
      <section
        className='app-masthead '
        aria-label='book masthead'>
        <div className='app-masthead__container'>
          <div>
            <BreadcrumbsDefault />
            <BookDetailComponent />
          </div>
        </div>
      </section>
      <DetailContainer />
    </div>
  );
};

export default BookDetailPage;
