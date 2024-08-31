import React, { useState, useEffect } from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";
import axiosClient from "../../axios-client";
import FormulaireConsultation from "../../componants/medecin-patient/medecin-patient-consultation/formulaire-consultation";
import Loading from "../../componants/loading/Loading";

function ConsultationView() {
  const { id } = useParams(); // Extract the dossier ID from the URL params
  const [consultations, setConsultations] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const context = useOutletContext();

  if (!context) {
      return <Loading />;
    }
  
    const { dossier } = context;
    const { medecin } = context;

    console.log(dossier)

  // useEffect(() => {
  //   // Fetch consultation data based on the dossier ID
  //   axiosClient.get(`/dossiers/${id}/consultations`)
  //     .then(response => {
  //       setConsultations(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching consultations:', error);
  //     });
  // }, [id , consultations]);



  
  const dateFormat = (date_format) =>{
    const date = new Date(date_format);
    const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;

    return formattedDate
}



const openModal = () => {
  setIsOpen(true);
  // You can perform any other actions you need when the modal opens here
};

const closeModal = () => {
  setIsOpen(false);
  // You can perform any other actions you need when the modal closes here
};

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Consultation Details</h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Age (mois)</th>
              <th className="border border-gray-300 px-4 py-2">IMC</th>
              <th className="border border-gray-300 px-4 py-2">PC</th>
              <th className="border border-gray-300 px-4 py-2">Poids</th>
              <th className="border border-gray-300 px-4 py-2">Taille</th>
              <th className="border border-gray-300 px-4 py-2">Motif</th>
              <th className="border border-gray-300 px-4 py-2">Medecin</th>
              <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </table>
        <div className="mt-4">
      <button onClick={openModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add New Consultation
      </button>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded">
            {/* Your modal content goes here */}
            <h2>Add New Consultation</h2>
            <FormulaireConsultation dossier={dossier} medecin={medecin} onClose={closeModal} />
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
      </div>
    </div>
  );
}

export default ConsultationView;
