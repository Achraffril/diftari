import React from 'react';
import Qualifications from '../../componants/medecin/profile/Qualifications';
import DoctorHeader from '../../componants/medecin/profile/MedecinHeader';
import MedecinContact from '../../componants/medecin/profile/MedecinContact';
import {  useOutletContext } from "react-router-dom";

function MedecinProfile() {
    const context = useOutletContext();
   
  if (!context) {
    return <Loading />;
  }

    
      const { medecin } = context;
 
    return (
        <div className="container mx-auto my-8 p-8 bg-white shadow-lg rounded-lg">
            <DoctorHeader doctor={medecin} />
            <div className="mt-8  lg:grid-cols-2 gap-8">
                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-secondary-color border-b pb-2">Données personnelles</h2>
                    <Qualifications doctor={medecin} />
                </section>
            </div>
            <div className="mt-20">
                <h2 className="text-2xl font-semibold mb-4 text-secondary-color border-b pb-2">Contact Information</h2>
                <MedecinContact doctor={medecin} />
            </div>
        </div>
    );
}


export default MedecinProfile;
