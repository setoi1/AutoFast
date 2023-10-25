import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';

import './Root.css';

export default function Root() {
  
  return (
    <>
      <div id='sidebar'>
        <Navbar />
      </div>
      <div id='content'>
        <Outlet />
      </div>
    </>
  );
}