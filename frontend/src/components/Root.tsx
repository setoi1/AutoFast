import { Outlet } from 'react-router-dom';

import './Root.css';
import TopNav from './Navbar/TopNav';
import SideNav from './Navbar/SideNav';

export default function Root() {
  return (
    <>
      <TopNav />
      <div id='sidebar'>
        <SideNav />
      </div>
      <div id='content'>
        <Outlet />
      </div>
    </>
  );
}