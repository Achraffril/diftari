import React, { useRef } from 'react';
import { useOutletContext } from 'react-router-dom';


function SuplimentationMedPatient() {
  const vitaminA6MonthsRef = useRef(null);
  const vitaminA12MonthsRef = useRef(null);
  const vitaminA18MonthsRef = useRef(null);
  const vitaminDBirthRef = useRef(null);
  const vitaminD6MonthsRef = useRef(null);

  const context = useOutletContext();
  if (!context) {
    return <div>Loading...</div>;
  }

  const { dossier } = context;

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      vitaminA6Months: vitaminA6MonthsRef.current.value,
      vitaminA12Months: vitaminA12MonthsRef.current.value,
      vitaminA18Months: vitaminA18MonthsRef.current.value,
      vitaminDBirth: vitaminDBirthRef.current.value,
      vitaminD6Months: vitaminD6MonthsRef.current.value,
    };

    axios.post(`/dossiers/${dossier.id}/vitamines`, data)
    .then(response => {
      console.log('Data sent successfully');

    })
    .catch(error => {
      console.error('Error:', error);

    });
};

  return (
    <div className="mx-auto bg-gray-100 p-8 rounded-lg shadow-lg mt-8 mb-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 border-b pb-4">Vitamins Administration</h2>

      <form onSubmit={handleSubmit}>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Vitamin A Schedule</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="vitaminA6Months" className="block mb-2 text-gray-700">At 6 months</label>
              <input ref={vitaminA6MonthsRef} type="date" id="vitaminA6Months" name="vitaminA6Months" className="border border-gray-300 px-4 py-2 w-full bg-white rounded-lg focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="vitaminA12Months" className="block mb-2 text-gray-700">At 12 months</label>
              <input ref={vitaminA12MonthsRef} type="date" id="vitaminA12Months" name="vitaminA12Months" className="border border-gray-300 px-4 py-2 w-full bg-white rounded-lg focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="vitaminA18Months" className="block mb-2 text-gray-700">At 18 months</label>
              <input ref={vitaminA18MonthsRef} type="date" id="vitaminA18Months" name="vitaminA18Months" className="border border-gray-300 px-4 py-2 w-full bg-white rounded-lg focus:outline-none focus:border-blue-500" />
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Vitamin D Schedule</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="vitaminDBirth" className="block mb-2 text-gray-700">At birth</label>
              <input ref={vitaminDBirthRef} type="date" id="vitaminDBirth" name="vitaminDBirth" className="border border-gray-300 px-4 py-2 w-full bg-white rounded-lg focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="vitaminD6Months" className="block mb-2 text-gray-700">At 6 months</label>
              <input ref={vitaminD6MonthsRef} type="date" id="vitaminD6Months" name="vitaminD6Months" className="border border-gray-300 px-4 py-2 w-full bg-white rounded-lg focus:outline-none focus:border-blue-500" />
            </div>
          </div>
        </div>

        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button>
      </form>
    </div>
  );
}

export default SuplimentationMedPatient;

