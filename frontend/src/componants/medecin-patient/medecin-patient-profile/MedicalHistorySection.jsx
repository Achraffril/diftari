import React from 'react';
import CouvertureMedicale from './medicalHistory/CouvertureMedicale';
import AntecedentsFamiliaux from './medicalHistory/AntecedentsFamiliaux';
import Allergie from './medicalHistory/Allergies';
import AffectinosLongCours from './medicalHistory/AffectinosLongCours';

const MedicalHistorySection = () => {
    return (
        <div className="space-y-6">

           <CouvertureMedicale />

            <AntecedentsFamiliaux />

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h1 className="text-2xl font-semibold mb-4">ANTECEDENTS PERSONNELS</h1>

              <AffectinosLongCours />

              <Allergie />
            </div>

        </div>
    );
};

export default MedicalHistorySection;
