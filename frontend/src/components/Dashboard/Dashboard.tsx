

import Summary from './Summary/Summary.tsx';
import CurrentJob from './CurrentJob/CurrentJob';
import Appointments from '../Appointments/Appointments.tsx';

import './Dashboard.css';

export default function Dashboard() {
  return (
    <div className='dashboard-container'>
      <h1>Welcome, Keith</h1> 
      <div id='widgets'>
        <div className='widget-container'>
          <Summary />
        </div>
        <div className='widget-container'>
          <CurrentJob />
        </div>
        <div className='widget-container'>
          <Appointments />
        </div>
        <div className='widget-container'>
          {/*<SomeWidget />*/}
        </div>
      </div>
    </div>
  );
}