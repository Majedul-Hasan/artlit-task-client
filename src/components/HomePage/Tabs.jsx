import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from '@material-tailwind/react';

import { BookCard } from '../BookCard';

const TabsCont = ({ children, data }) => {
  return (
    <div className='tab-header'>
      {children}
      <div className='tab-header-actions '>
        <Tabs
          id='custom-animation'
          value='Books'>
          <TabsHeader className='w-1/2 mr-0 ml-auto'>
            {data?.map(({ label, value }) => (
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
