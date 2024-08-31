

import React from 'react';

function SuplimentationMedPatient() {
  return (
    <div className="mx-auto bg-gray-100 p-8 rounded-lg shadow-lg mt-8 mb-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 border-b pb-4">Vitamins Administration</h2>
      
      {/* Vitamins A Schedule */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">Vitamin A Schedule</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="vitaminABirth" className="block mb-2 text-gray-700">At birth</label>
            <input type="date" id="vitaminABirth" name="vitaminABirth" className="border border-gray-300 px-4 py-2 w-full bg-white rounded-lg focus:outline-none focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="vitaminA6Months" className="block mb-2 text-gray-700">At 6 months</label>
            <input type="date" id="vitaminA6Months" name="vitaminA6Months" className="border border-gray-300 px-4 py-2 w-full bg-white rounded-lg focus:outline-none focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="vitaminA12Months" className="block mb-2 text-gray-700">At 12 months</label>
            <input type="date" id="vitaminA12Months" name="vitaminA12Months" className="border border-gray-300 px-4 py-2 w-full bg-white rounded-lg focus:outline-none focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="vitaminA18Months" className="block mb-2 text-gray-700">At 18 months</label>
            <input type="date" id="vitaminA18Months" name="vitaminA18Months" className="border border-gray-300 px-4 py-2 w-full bg-white rounded-lg focus:outline-none focus:border-blue-500" />
          </div>
        </div>
      </div>

      {/* Vitamin D Schedule */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">Vitamin D Schedule</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="vitaminDBirth" className="block mb-2 text-gray-700">At birth</label>
            <input type="date" id="vitaminDBirth" name="vitaminDBirth" className="border border-gray-300 px-4 py-2 w-full bg-white rounded-lg focus:outline-none focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="vitaminD6Months" className="block mb-2 text-gray-700">At 6 months</label>
            <input type="date" id="vitaminD6Months" name="vitaminD6Months" className="border border-gray-300 px-4 py-2 w-full bg-white rounded-lg focus:outline-none focus:border-blue-500" />
          </div>
        </div>
      </div>

    </div>
  );
}

export default SuplimentationMedPatient;
