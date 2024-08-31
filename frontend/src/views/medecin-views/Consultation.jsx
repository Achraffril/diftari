import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import axiosClient from '../../axios-client';

const ConsultationMedecin = () => {
  const [consultations, setConsultations] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const context = useOutletContext();

  if (!context) {
    return <div>Loading...</div>;
  }

  const { medecin } = context;

  useEffect(() => {
    axiosClient.get(`/medecin/${medecin.id}/consultation`)
      .then((response) => {
        const data = response.data;
        console.log(response.data)
        setConsultations(data)
        // if (Array.isArray(data)) {
        //   setConsultations(data);
        // } else if (data) {
        //   setConsultations([data]);
        // } else {
        //   setConsultations([]);
        // }
      })
      .catch((err) => {
        console.error(err);
        // Handle the error appropriately
        setConsultations([]);
      });
  }, [medecin.id]);

  // Filter consultations based on search query
  
  const filteredConsultations = consultations.filter(consultation =>
    (consultation.motif && consultation.motif.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (consultation.T && consultation.T.toString().includes(searchQuery)) ||
    (consultation.poids && consultation.poids.toString().includes(searchQuery)) ||
    (consultation.taille && consultation.taille.toString().includes(searchQuery)) ||
    (consultation.imc && consultation.imc.toString().includes(searchQuery)) ||
    (consultation.pc && consultation.pc.toString().includes(searchQuery)) ||
    (consultation.created_at && consultation.created_at.includes(searchQuery))
  );

  return (
    <div className="min-h-screen flex flex-col items-center py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-secondary-color">
            Consultations d'hospitalisation
          </h2>
        </div>
        <div className="mt-6 flex justify-center">
          <input
            type="text"
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-color focus:border-primary-color sm:text-sm"
            placeholder="Search consultations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="mt-12 max-w-7xl w-full">
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredConsultations ? filteredConsultations.map((consultation, index) => (
            <div key={index} className="bg-white shadow overflow-hidden rounded-md px-6 py-4">
 <p className="text-sm font-medium text-gray-900">Nom du patient: {consultation.dossier.patient.nom }</p>               <p className="text-sm text-gray-500"><span className="text-black">Motif:</span> {consultation.motif}</p>
              <p className="text-sm text-gray-500"><span className="text-black">Température:</span> {consultation.T}°C</p>
              <p className="text-sm text-gray-500"><span className="text-black">Poids:</span> {consultation.poids} kg</p>
              <p className="text-sm text-gray-500"><span className="text-black">Taille:</span> {consultation.taille} cm</p>
              <p className="text-sm text-gray-500"><span className="text-black">IMC:</span> {consultation.imc}</p>
              <p className="text-sm text-gray-500"><span className="text-black">PC:</span> {consultation.pc} cm</p>
              <p className="text-sm text-gray-500"><span className="text-black">Date de création:</span> {new Date(consultation.created_at).toLocaleString()}</p>
            </div>
          )) : "nothing"}
        </div>
      </div>
    </div>
  );
};

export default ConsultationMedecin;
