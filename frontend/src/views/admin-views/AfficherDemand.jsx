import React from 'react';

import { useLocation, useParams } from 'react-router-dom';
import AffichData from '../../componants/Admin/AffichagComposent';

const AffichDemand = () => {
  const { id } = useParams(); 

  const location = useLocation();
  const data  = location.state || {};



  return (
    <div className="flex justify-center items-center min-h-screen ">
    {data ? (
      <AffichData doctor={data} />
    ) : (
      <p>No data available</p>
    )}
  </div>
  );
};

export default AffichDemand;
