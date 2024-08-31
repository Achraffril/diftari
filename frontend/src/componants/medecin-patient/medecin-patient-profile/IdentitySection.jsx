import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import axiosClient from '../../../axios-client';

const IdentitySection = () => {
  const [patient, setPatient] = useState('');

  const context = useOutletContext();
  if (!context) {
    return <div>Loading...</div>;
  }

  const { dossier } = context;

  useEffect(() => {
    axiosClient.get(`/dossiers/${dossier.id}/patient/`)
      .then((response) => {
          setPatient(response.data);

         console.log(response.data)
      })
      .catch((err) => {
        console.error(err);
        // Handle the error appropriately
      });
  }, [dossier.id]);


    return (
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">IDENTITE DE L’ENFANT</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-medium">Nom :</label>
              <input type="text" value={patient.nom} className="w-full border rounded p-2 mt-1" disabled/>
            </div>
            <div>
              <label className="block font-medium">Prénom :</label>
              <input type="text" value={patient.prenom} className="w-full border rounded p-2 mt-1" disabled/>
            </div>
            <div>
              <label className="block font-medium">Sexe :</label>
              <div className="flex space-x-4 mt-1">
                <label className="flex items-center">
                  <input type="radio" name="gender" value="Femme"  checked={patient.sexe === "female"}  className="mr-2" disabled /> Femme
                </label>
                <label className="flex items-center">
                  <input type="radio" name="gender" value="Homme" checked={patient.sexe === "male"} className="mr-2" disabled/> Homme
                </label>
              </div>
            </div>
            <div>
              <label className="block font-medium">Groupe sanguin :</label>
              <input type="text"   className="w-full border rounded p-2 mt-1" disabled/>
            </div>
            <div>
              <label className="block font-medium">Rhésus :</label>
              <input type="text"  value={patient.prenom} className="w-full border rounded p-2 mt-1" disabled/>
            </div>
            <div>
              <label className="block font-medium">Structure sanitaire :</label>
              <div className="flex space-x-4 mt-1">
                <label className="flex items-center">
                  <input type="radio" name="healthcare" value="Privée" className="mr-2"  disabled/> Privée
                </label>
                <label className="flex items-center">
                  <input type="radio" name="healthcare" value="Public" className="mr-2" disabled/> Public
                </label>
              </div>
            </div>
            <div>
              <label className="block font-medium">N°SMI :</label>
              <input type="text"  value={patient.cin} className="w-full border rounded p-2 mt-1" disabled/>
            </div>
            <div className="col-span-2">
              <label className="block font-medium">Adresse :</label>
              <input type="text" className="w-full border rounded p-2 mt-1" disabled/>
            </div>
          </div>
        </div>
      );
};

export default IdentitySection;
