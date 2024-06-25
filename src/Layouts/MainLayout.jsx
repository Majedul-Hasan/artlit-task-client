import { Outlet } from 'react-router-dom';
import { PublicNavbar } from '../components/Navbar';
import { Footers } from '../components/Footer';

const MainLayout = () => {
  return (
    <>
      <PublicNavbar />
      <Outlet />
      <Footers />
    </>
  );
};

export default MainLayout;
