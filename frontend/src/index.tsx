import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './components/Root.tsx';
import Error from './components/Error/Error.tsx';

import Dashboard from './components/Dashboard/Dashboard.tsx';
import Summary from './components/Dashboard/Summary/Summary.tsx';
import CurrentJob from './components/Dashboard/CurrentJob/CurrentJob.tsx';

import Appointments from './components/Appointments/Appointments.tsx';
import Appointment from './components/Appointments/Appointment.tsx';
import NewJob from './components/Appointments/NewJob.tsx';

import Customers from './components/Customers/Customers.tsx';
import Customer from './components/Customers/Customer.tsx';

import Invoices from './components/Invoices/Invoices.tsx';
import Invoice from './components/Invoices/Invoice.tsx';

import NewInvoice from './components/NewInvoice/NewInvoice.tsx';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
        children: [
          {
            path: 'current-job/:id',
            element: <CurrentJob />,
          },
          {
            path: 'summary',
            element: <Summary />,
          },
        ],
      },
      {
        path: 'appointments',
        element: <Appointments />,
        children: [
          {
            path: ':id',
            element: <Appointment />,
          }
        ],
      },
      {
        path: 'invoices',
        element: <Invoices />,
        children: [
          {
            path: 'new-invoice',
            element: <NewInvoice />,
          },
          {
            path: ':id',
            element: <Invoice/>
          },
        ]
      },
      {
        path: 'customers',
        element: <Customers />,
        children: [
          {
            path: ':id',
            element: <Customer />
          }
        ]
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
