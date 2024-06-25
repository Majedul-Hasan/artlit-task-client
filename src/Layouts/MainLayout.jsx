import { Outlet } from 'react-router-dom';
import { PublicNavbar } from '../components/Navbar';

const MainLayout = () => {
  return (
    <>
      <PublicNavbar />
      <Outlet />
    </>
  );
};

export default MainLayout;
