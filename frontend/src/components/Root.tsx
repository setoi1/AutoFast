import { Outlet } from 'react-router-dom';

import './Root.css';
import TopNav from './Navbar/TopNav';
import SideNav from './Navbar/SideNav';
import Landing from './Landing/Landing';

export default function Root() {
  const isAuth = false;

  return (
    <>
      <TopNav />
      {isAuth ? 
        ( 
          <>
            <SideNav />
            <div id='outlet'>
              <Outlet />
            </div>
          </>
        ) 
        :
        (
          <Landing />
        ) 
      }
    </>
  );
}