import { Link } from 'react-router-dom';

import './SideNav.css';

const navItems = [
  {
    id: 0,
    icon: '',
    text: 'Dashboard',
  },
  {
    id: 1,
    icon: '',
    text: 'Appointments',
  },
  {
    id: 2,
    icon: '',
    text: 'Invoices',
  },
  {
    id: 3,
    icon: '',
    text: 'Customers',
  },
  {
    id: 4,
    icon: '',
    text: 'VIN Lookup',
  },
  {
    id: 5,
    icon: '',
    text: 'Vehicle Database',
  },
]

export default function SideNav() {
  return (
    <nav id='sidebar'>
      <ul id='sidebar-list'>
        {navItems.map(navItem =>
          <li key={navItem.id} className='sidebar-list-item'>
            <Link className='sidebar-list-text' to={``}>{navItem.icon}{navItem.text}</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}