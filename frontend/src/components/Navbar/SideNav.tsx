import { useState } from 'react';
import { Link } from 'react-router-dom';

import './SideNav.css';

export default function SideNav() {
  const [active, setActive] = useState(true); 

  return (
    <>
      <button onClick={() => active ? setActive(false) : setActive(true)} />
      {active ? 
        <nav id='sidebar-expanded'>
          <ul id='sidebar-list'>
            <li className='sidebar-item'>
              <Link to={`dashboard`}>Dashboard</Link>
            </li>
            <li className='sidebar-item'>
              <Link to={`appointments`}>Appointments</Link>
            </li>
            <li className='sidebar-item'>
              <Link to={`invoices`}>Invoices</Link>
            </li>
            <li className='sidebar-item'>
              <Link to={`customers`}>Customers</Link>
            </li>
            <li className='sidebar-item'>
              <Link to={`new-invoice`}>New Invoice</Link>
            </li>
          </ul>
        </nav>
       : 
        <nav id='sidebar'></nav>
      }
    </>
  );
}