
// AppointmentsSection.js
import React from 'react';

const DashboardMedcinCard = (props) => {
  return (
    <div className={`bg-white p-4 rounded shadow text-${props.align}`}>
      <h2 className="text-xl font-semibold mb-3 text-secondary-color">{props.titre}</h2>
      <ul>
        <li>{props.info}</li>
        <li>{props.info2}</li>
        <li>...</li>
      </ul>
    </div>
  );
};

export default DashboardMedcinCard;
