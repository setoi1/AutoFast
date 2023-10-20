import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={`dashboard`}>Dashboard</Link>
          </li>
          <li>
            <Link to={`invoices`}>Invoices</Link>
          </li>
          <li>
            <Link to={`customers`}>Customers</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}