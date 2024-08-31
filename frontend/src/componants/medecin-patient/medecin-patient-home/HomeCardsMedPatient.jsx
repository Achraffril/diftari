

import React from 'react';

const HomeCardsMedPatient = (props) => {
    return (
        <div className="bg-white overflow-hidden shadow-md rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">{props.title}</h2>
                  <p className="text-gray-600">{props.desc}</p>
                </div>
              </div>
      );
};

export default HomeCardsMedPatient;
