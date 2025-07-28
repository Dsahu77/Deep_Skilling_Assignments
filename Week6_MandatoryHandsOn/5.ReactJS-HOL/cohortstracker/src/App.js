import React from 'react';
import CohortDetails from './Components/CohortDetails';
import './App.css';

const cohortData = [
  {
    id: 'INTADMDF10',
    name: '.NET FSD',
    startedOn: '22-Feb-2022',
    status: 'Scheduled',
    coach: 'Aathma',
    trainer: 'Jojo Jose'
  },
  {
    id: 'ADM21JF014',
    name: 'Java FSD',
    startedOn: '10-Sep-2021',
    status: 'Ongoing',
    coach: 'Apoorv',
    trainer: 'Elisa Smith'
  },
  {
    id: 'CDBJF21025',
    name: 'Java FSD',
    startedOn: '24-Dec-2021',
    status: 'Ongoing',
    coach: 'Aathma',
    trainer: 'John Doe'
  }
];

function App() {
  return (
    <div className="App">
      <h1>Cohorts Details</h1>
      <div className="cohorts-container">
        {cohortData.map(cohort => (
          <CohortDetails key={cohort.id} cohort={cohort} />
        ))}
      </div>
    </div>
  );
}

export default App;