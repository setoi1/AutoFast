import { Outlet } from 'react-router-dom';

export default function Invoices() {
  return (
    <div id='invoices'>
      <h1>Invoices</h1>
      <Outlet />
    </div>
  );
}