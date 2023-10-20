import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <Navbar />
      </div>
      <div id="content">
        <h1>Content</h1>
        <Outlet />
      </div>
    </>
  );
}