import { useState } from "react";
import ConsultationItem from "../../componants/medecin/Consultation-componant";

export default function MedecinHistorique() {
    const [searchQuery, setSearchQuery] = useState('');
    const [consultations, setConsultations] = useState([
        { date: "1er avril 2024 - 10h00", type: "Consultation", name: "John Doe" },
        { date: "25 mars 2024 - 14h30", type: "Opération", name: "Jane" },
    ]);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className="font-sans">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-semibold mb-6 text-secondary-color">Historique</h1>
                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                   
                    <div className="p-4">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                            className="w-full px-4 py-2 text-gray-900 placeholder-gray-400 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300"
                        />
                    </div>

                    <div className="divide-y divide-gray-200">
                       
                        {consultations.filter(consultation =>
                            consultation.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            consultation.date.includes(searchQuery) ||
                            consultation.type.toLowerCase().includes(searchQuery.toLowerCase())
                        ).map((consultation, index) => (
                            <ConsultationItem
                                key={index}
                                date={consultation.date}
                                type={consultation.type}
                                name={consultation.name}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
