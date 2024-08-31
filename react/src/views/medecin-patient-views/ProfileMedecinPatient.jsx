import React, { useState } from 'react';
import IdentitySection from '../../componants/medecin-patient/medecin-patient-profile/IdentitySection';
import EmergencyContactsSection from '../../componants/medecin-patient/medecin-patient-profile/EmergencyContactsSection';
import ParentsSection from '../../componants/medecin-patient/medecin-patient-profile/ParentsSection';
import MedicalHistorySection from '../../componants/medecin-patient/medecin-patient-profile/MedicalHistorySection';

function ProfileMedecinPatient(){
  const [selectedComponent, setSelectedComponent] = useState('Identity');

  const handleComponentChange = (componentName) => {
    setSelectedComponent(componentName);
  };

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'Identity':
        return <IdentitySection />;
      case 'EmergencyContacts':
        return <EmergencyContactsSection />;
      case 'Parents':
        return <ParentsSection />;
      case 'MedicalHistory':
        return <MedicalHistorySection />;
      default:
        return null;
    }
  };

  return (
    <div className="mx-auto bg-white p-8 rounded-lg shadow-lg mt-8 mb-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 border-b pb-4 text-secondary-color">Données Générales sur l’Enfant</h2>
      <div className="space-y-4">
        <div className="flex justify-center">
          <button onClick={() => handleComponentChange('Identity')} className="bg-secondary-color  text-white font-bold py-2 px-4 rounded inline-flex items-center mr-2">
          IDENTITE DE PATIENT
          </button>
          <button onClick={() => handleComponentChange('EmergencyContacts')} className="bg-secondary-color  text-white font-bold py-2 px-4 rounded inline-flex items-center mr-2">
          CONTACTS EN CAS D’URGENCE
          </button>
          <button onClick={() => handleComponentChange('Parents')} className="bg-secondary-color  text-white font-bold py-2 px-4 rounded inline-flex items-center mr-2">
          IDENTITE DES PARENTS
          </button>
          <button onClick={() => handleComponentChange('MedicalHistory')} className="bg-secondary-color  text-white font-bold py-2 px-4 rounded inline-flex items-center">
          ANTECEDENTS MEDICAUX
          </button>
        </div>
        {renderComponent()}
      </div>
    </div>
  );
}
export default ProfileMedecinPatient;