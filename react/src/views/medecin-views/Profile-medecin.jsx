import React from 'react';
import Qualifications from '../../componants/medecin/profile/Qualifications';
import DoctorHeader from '../../componants/medecin/profile/MedecinHeader';
import MedecinContact from '../../componants/medecin/profile/MedecinContact';


function MedecinProfile() {
    const doctor = {
        id: 1,
        name: "Dr. John Doe",
        title: "Cardiologist",
        email: "john.doe@example.com",
        phone: "+1234567890",
        image: "https://img.freepik.com/free-photo/portrait-male-health-worker_23-2148980804.jpg",
        qualifications: ["MBBS", "MD"],
        specialties: ["Cardiology", "Internal Medicine"],
    };

 
    return (
        <div className="container mx-auto my-8 p-8 bg-white shadow-lg rounded-lg">
            <DoctorHeader doctor={doctor} />
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-secondary-color border-b pb-2">Qualifications</h2>
                    <Qualifications qualifications={doctor.qualifications} />
                </section>
                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-secondary-color border-b pb-2">Specialties</h2>
                    <Qualifications qualifications={doctor.specialties} />
                </section>
            </div>
            <div className="mt-20">
                <h2 className="text-2xl font-semibold mb-4 text-secondary-color border-b pb-2">Contact Information</h2>
                <MedecinContact email={doctor.email} phone={doctor.phone} />
            </div>
        </div>
    );
}


export default MedecinProfile;
