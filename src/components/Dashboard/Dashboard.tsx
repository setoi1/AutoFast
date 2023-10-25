

import CurrentJob from './CurrentJob/CurrentJob';
import Summary from './Summary/Summary.tsx';
import Appointments from '../Appointments/Appointments.tsx';

import './Dashboard.css';

export default function Dashboard() {
  return (
    <>
      <h1>Welcome, Keith</h1>
      <div id='widgets'>
        <div className='widget-container'>
          <Summary />
        </div>
        <div className='widget-container'>
          <CurrentJob />
        </div>
      </div>
    </>
  );
}