import { useState } from 'react';
import UserCard from "../../componants/Admin/DemandCard";

export default function DemandView() {
  const [selectedCategory, setSelectedCategory] = useState('patients');

  const patients = [
    {
      id: 1,
      cin: 3456789012,
      created_at: '2023-05-01T12:00:00.000000Z',
      email: 'patient1@example.com',
      tel: '0612345678',
      nom: 'Doe',
      nom_ar: 'د',
      prenom: 'John',
      prenom_ar: 'ج',
      accepted: 1,
      accepted_by: 1
    },
    {
      id: 2,
      cin: 4567890123,
      created_at: '2023-06-01T13:00:00.000000Z',
      email: 'patient2@example.com',
      tel: '0698765432',
      nom: 'Smith',
      nom_ar: 'س',
      prenom: 'Jane',
      prenom_ar: 'ج',
      accepted: 0,
      accepted_by: 0
    }
  ];

  const medecins = [
    {
      id: 1,
      cin: 1234567890,
      created_at: '2023-05-01T12:00:00.000000Z',
      email: 'doctor@example.com',
      tel: '0612345678',
      nom: 'Doe',
      nom_ar: 'د',
      prenom: 'zakaria',
      prenom_ar: 'ج',
      accepted: 1,
      accepted_by: 1,
      specialite: 'Cardiology'
    },
    {
      id: 2,
      cin: 2345678901,
      created_at: '2023-06-01T13:00:00.000000Z',
      email: 'jane.smith@example.com',
      tel: '0698765432',
      nom: 'Smith',
      nom_ar: 'س',
      prenom: 'marwan',
      prenom_ar: 'ج',
      accepted: 0,
      accepted_by: 0,
      specialite: 'Pediatrics'
    },

  ];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div>
      <h1 className="text-2xl text-secondary-color font-bold mb-4">Demandes</h1>
      <div className="flex space-x-4">
        <div className="relative inline-block w-full max-w-xs">
          <select 
            value={selectedCategory} 
            onChange={(e) => handleCategoryChange(e.target.value)} 
            className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-lg shadow leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="" disabled>Select Category</option>
            <option value="patients">Patients</option>
            <option value="medecins">Medecins</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>
        </div>
      </div>



        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 my-12">
          {selectedCategory === 'patients' && patients.map(patient => (
            <UserCard id={patient.id} data={patient} name={`${patient.nom} ${patient.prenom}`} type='Patient'/>
          ))}
          {selectedCategory === 'medecins' && medecins.map(medecin => (
            <UserCard id={medecin.id} data={medecin} name={`${medecin.nom} ${medecin.prenom}`} type='Medecin'/>
          ))}
        </ul>
      </div>
    </>
  );
}
