import Tabs from './Tabs';

const Sections = ({ children, data }) => {
  return (
    <div>
      <div className='container pt-3'>
        <div className='tab'>
          <Tabs data={data}>{children}</Tabs>
        </div>
      </div>
      ;
    </div>
  );
};

export default Sections;
