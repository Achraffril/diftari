import React, { useState } from 'react';

const ConsultationMedecin = () => {
    // State to hold the list of consultations
    const [consultations, setConsultations] = useState([
        {
            name: 'John Doe',
            email: 'john.doe@example.com',
            date: '2024-05-20',
            message: 'Initial consultation regarding general health check-up.'
        },
        {
            name: 'Jane Smith',
            email: 'jane.smith@example.com',
            date: '2024-05-22',
            message: 'Follow-up consultation for previous treatment.'
        },
        {
            name: 'Alice Johnson',
            email: 'alice.johnson@example.com',
            date: '2024-05-24',
            message: 'Consultation about allergy symptoms.'
        },
        {
            name: 'Bob Brown',
            email: 'bob.brown@example.com',
            date: '2024-05-26',
            message: 'Routine physical examination.'
        }
    ]);

    // State to hold the search query
    const [searchQuery, setSearchQuery] = useState('');

    // Filter consultations based on search query
    const filteredConsultations = consultations.filter(consultation => 
        consultation.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        consultation.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        consultation.date.includes(searchQuery) ||
        consultation.message.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen  flex flex-col items-center py-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl w-full space-y-8">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-extrabold text-secondary-color">Consultations d'hospitalisation</h2>
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
                    {filteredConsultations.map((consultation, index) => (
                        <div key={index} className="bg-white shadow overflow-hidden rounded-md px-6 py-4">
                            <p className="text-sm font-medium text-gray-900">Nom: {consultation.name}</p>
                            <p className="text-sm text-gray-500"><span className='text-black'>Email:</span>  {consultation.email}</p>
                            <p className="text-sm text-gray-500"><span className='text-black'>Date:</span> {consultation.date}</p>
                            <p className="text-sm text-gray-500"><span className='text-black'>Motif de consultation:</span> {consultation.message}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ConsultationMedecin;






