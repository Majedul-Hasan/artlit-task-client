import Tabs from './Tabs';

const Sections = ({ children }) => {
  return (
    <div>
      <div className='container pt-3'>
        <div className='tab'>
          <Tabs>{children}</Tabs>
        </div>
      </div>
      ;
    </div>
  );
};

export default Sections;
