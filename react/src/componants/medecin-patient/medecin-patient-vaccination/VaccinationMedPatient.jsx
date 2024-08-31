// import React, { useState } from 'react';

// function VaccinationSchedule() {
//   const [schedule, setSchedule] = useState([
//     { age: 'Durant le 1er mois', vaccines: ['HB1', 'BCG1', 'VPO 0'], date: '', ageInMonths: '', weight: '', lotNumber: '', nextVaccinationDate: '', location: '' },
//     { age: '2 mois', vaccines: ['PENTA1', 'VPO 1', 'ROTA1', 'PNEUMO1'], date: '', ageInMonths: '', weight: '', lotNumber: '', nextVaccinationDate: '', location: '' },
//     { age: '3 mois', vaccines: ['PENTA2', 'VPO2', 'ROTA2'], date: '', ageInMonths: '', weight: '', lotNumber: '', nextVaccinationDate: '', location: '' },
//     { age: '4 mois', vaccines: ['PENTA3', 'VPO3', 'Pneumo2', 'ROTA 3', 'VPI'], date: '', ageInMonths: '', weight: '', lotNumber: '', nextVaccinationDate: '', location: '' },
//     { age: '9 mois', vaccines: ['RR1'], date: '', ageInMonths: '', weight: '', lotNumber: '', nextVaccinationDate: '', location: '' },
//     { age: '12 mois', vaccines: ['PNEUMO3'], date: '', ageInMonths: '', weight: '', lotNumber: '', nextVaccinationDate: '', location: '' },
//     { age: '18 mois', vaccines: ['RR2', 'DTC1 rappel', 'VPO4'], date: '', ageInMonths: '', weight: '', lotNumber: '', nextVaccinationDate: '', location: '' },
//     { age: '5 ans', vaccines: ['DTC2 rappel', 'VPO5'], date: '', ageInMonths: '', weight: '', lotNumber: '', nextVaccinationDate: '', location: '' }
//   ]);

//   const handleInputChange = (e, rowIndex, key) => {
//     const updatedSchedule = [...schedule];
//     updatedSchedule[rowIndex][key] = e.target.value;
//     setSchedule(updatedSchedule);
//   };

//   const handleDateChange = (date, rowIndex) => {
//     const updatedSchedule = schedule.map((item, index) =>
//       index === rowIndex ? { ...item, date: date } : item
//     );
//     setSchedule(updatedSchedule);
//   };

//   return (
//     <div className="mx-auto bg-white p-8 rounded-lg shadow-lg mt-8 mb-8">
//       <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 border-b pb-4">Vaccination Schedule</h2>
//       <div className="overflow-x-auto">
//         <table className="min-w-full border-collapse">
//           <thead>
//             <tr>
//               <th className="border border-gray-400 px-4 py-2">Age recommandé</th>
//               <th className="border border-gray-400 px-4 py-2">Vaccins</th>
//               <th className="border border-gray-400 px-4 py-2">Date</th>
//               <th className="border border-gray-400 px-4 py-2">Age de l’enfant en mois</th>
//               <th className="border border-gray-400 px-4 py-2">Poids</th>
//               <th className="border border-gray-400 px-4 py-2">N° du lot</th>
//               <th className="border border-gray-400 px-4 py-2">Date de la prochaine vaccination</th>
//               <th className="border border-gray-400 px-4 py-2">Lieu, signature et cachet</th>
//             </tr>
//           </thead>
//           <tbody>
//             {schedule.map((row, rowIndex) => (
//               row.vaccines.map((vaccine, index) => (
//                 <tr key={`${rowIndex}-${index}`}>
//                   {index === 0 ? <td className="border border-gray-400 px-4 py-2" rowSpan={row.vaccines.length}>{row.age}</td> : null}
//                   <td className="border border-gray-400 px-4 py-2">{vaccine}</td>
//                   <td className="border border-gray-400 px-4 py-2">
//                     <input
//                       type="date"
//                       className="border border-gray-400 px-2 py-1 w-full"
//                       value={row.date}
//                       onChange={(e) => handleDateChange(e.target.value, rowIndex)}
//                     />
//                   </td>
//                   <td className="border border-gray-400 px-4 py-2">
//                     <input className="border border-gray-400 px-2 py-1 w-full" value={row.ageInMonths} onChange={(e) => handleInputChange(e, rowIndex, 'ageInMonths')} />
//                   </td>
//                   <td className="border border-gray-400 px-4 py-2">
//                     <input className="border border-gray-400 px-2 py-1 w-full" value={row.weight} onChange={(e) => handleInputChange(e, rowIndex, 'weight')} />
//                   </td>
//                   <td className="border border-gray-400 px-4 py-2">
//                     <input className="border border-gray-400 px-2 py-1 w-full" value={row.lotNumber} onChange={(e) => handleInputChange(e, rowIndex, 'lotNumber')} />
//                   </td>
//                   <td className="border border-gray-400 px-4 py-2">
//                     <input className="border border-gray-400 px-2 py-1 w-full" value={row.nextVaccinationDate} onChange={(e) => handleInputChange(e, rowIndex, 'nextVaccinationDate')} />
//                   </td>
//                   <td className="border border-gray-400 px-4 py-2">
//                     <input className="border border-gray-400 px-2 py-1 w-full" value={row.location} onChange={(e) => handleInputChange(e, rowIndex, 'location')} />
//                   </td>
//                 </tr>
//               ))
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default VaccinationSchedule;





import React, { useState } from 'react';

function VaccinationSchedule() {
  const [schedule, setSchedule] = useState([
    { age: 'Durant le 1er mois', vaccines: ['HB1', 'BCG1', 'VPO 0'], date: '', ageInMonths: '', weight: '', lotNumber: '', nextVaccinationDate: '', location: '' },
    { age: '2 mois', vaccines: ['PENTA1', 'VPO 1', 'ROTA1', 'PNEUMO1'], date: '', ageInMonths: '', weight: '', lotNumber: '', nextVaccinationDate: '', location: '' },
    { age: '3 mois', vaccines: ['PENTA2', 'VPO2', 'ROTA2'], date: '', ageInMonths: '', weight: '', lotNumber: '', nextVaccinationDate: '', location: '' },
    { age: '4 mois', vaccines: ['PENTA3', 'VPO3', 'Pneumo2', 'ROTA 3', 'VPI'], date: '', ageInMonths: '', weight: '', lotNumber: '', nextVaccinationDate: '', location: '' },
    { age: '9 mois', vaccines: ['RR1'], date: '', ageInMonths: '', weight: '', lotNumber: '', nextVaccinationDate: '', location: '' },
    { age: '12 mois', vaccines: ['PNEUMO3'], date: '', ageInMonths: '', weight: '', lotNumber: '', nextVaccinationDate: '', location: '' },
    { age: '18 mois', vaccines: ['RR2', 'DTC1 rappel', 'VPO4'], date: '', ageInMonths: '', weight: '', lotNumber: '', nextVaccinationDate: '', location: '' },
    { age: '5 ans', vaccines: ['DTC2 rappel', 'VPO5'], date: '', ageInMonths: '', weight: '', lotNumber: '', nextVaccinationDate: '', location: '' }
  ]);


  const handleInputChange = (e, index, key) => {
    const newSchedule = [...schedule];
    newSchedule[index][key] = e.target.value;
    setSchedule(newSchedule);
  };

  const handleVaccineChange = (e, index) => {
    const selectedVaccine = e.target.value;
    const updatedSchedule = [...schedule];
    updatedSchedule[index].selectedVaccine = selectedVaccine;
    setSchedule(updatedSchedule);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the schedule data (you can implement the save logic here)
    console.log("Schedule data:", schedule);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mx-auto bg-white p-8 rounded-lg shadow-lg mt-8 mb-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 border-b pb-4">Vaccination Schedule</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr>
                <th className="border border-gray-400 px-4 py-2">Age recommandé</th>
                <th className="border border-gray-400 px-4 py-2">Vaccins</th>
                <th className="border border-gray-400 px-4 py-2">Date</th>
                <th className="border border-gray-400 px-4 py-2">Age de l’enfant en mois</th>
                <th className="border border-gray-400 px-4 py-2">Poids</th>
                <th className="border border-gray-400 px-4 py-2">N° du lot</th>
                <th className="border border-gray-400 px-4 py-2">Date de la prochaine vaccination</th>
                <th className="border border-gray-400 px-4 py-2">Lieu, signature et cachet</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((row, index) => (
                <tr key={index}>
                  <td className="border border-gray-400 px-4 py-2">{row.age}</td>
                  <td className="border border-gray-400 px-4 py-2">
                    <select
                      className="border border-gray-400 px-2 py-1 w-full"
                      value={row.selectedVaccine}
                      onChange={(e) => handleVaccineChange(e, index)}
                    >
                      {row.vaccines.map((vaccine, vaccineIndex) => (
                        <option key={vaccineIndex} value={vaccine}>{vaccine}</option>
                      ))}
                    </select>
                  </td>
                <td className="border border-gray-400 px-4 py-2">
                  <input className="border border-gray-400 px-2 py-1 w-full" value={row.date} onChange={(e) => handleInputChange(e, index, 'date')} />
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <input className="border border-gray-400 px-2 py-1 w-full" value={row.ageInMonths} onChange={(e) => handleInputChange(e, index, 'ageInMonths')} />
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <input className="border border-gray-400 px-2 py-1 w-full" value={row.weight} onChange={(e) => handleInputChange(e, index, 'weight')} />
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <input className="border border-gray-400 px-2 py-1 w-full" value={row.lotNumber} onChange={(e) => handleInputChange(e, index, 'lotNumber')} />
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <input className="border border-gray-400 px-2 py-1 w-full" value={row.nextVaccinationDate} onChange={(e) => handleInputChange(e, index, 'nextVaccinationDate')} />
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <input className="border border-gray-400 px-2 py-1 w-full" value={row.location} onChange={(e) => handleInputChange(e, index, 'location')} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button>
    </form>
  );
}

export default VaccinationSchedule;
