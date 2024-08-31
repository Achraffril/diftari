import React from 'react';

const EmergencyContactsSection = () => {
    return (
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">CONTACTS EN CAS D’URGENCE</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-medium">Parent à contacter :</label>
              <input type="text" className="w-full border rounded p-2 mt-1" />
            </div>
            <div>
              <label className="block font-medium">Tél. :</label>
              <input type="text" className="w-full border rounded p-2 mt-1" />
            </div>
            <div>
              <label className="block font-medium">Pédiatre :</label>
              <input type="text" className="w-full border rounded p-2 mt-1" />
            </div>
            <div>
              <label className="block font-medium">Tél. :</label>
              <input type="text" className="w-full border rounded p-2 mt-1" />
            </div>
            <div>
              <label className="block font-medium">Hôpital :</label>
              <input type="text" className="w-full border rounded p-2 mt-1" />
            </div>
            <div>
              <label className="block font-medium">Tél. :</label>
              <input type="text" className="w-full border rounded p-2 mt-1" />
            </div>
            <div>
              <label className="block font-medium">Médecin de famille :</label>
              <input type="text" className="w-full border rounded p-2 mt-1" />
            </div>
            <div>
              <label className="block font-medium">Tél. :</label>
              <input type="text" className="w-full border rounded p-2 mt-1" />
            </div>
            <div>
              <label className="block font-medium">SAMU :</label>
              <input type="text" className="w-full border rounded p-2 mt-1" />
            </div>
            <div>
              <label className="block font-medium">Tél. :</label>
              <input type="text" className="w-full border rounded p-2 mt-1" />
            </div>
            <div>
              <label className="block font-medium">Autres :</label>
              <input type="text" className="w-full border rounded p-2 mt-1" />
            </div>
            <div>
              <label className="block font-medium">Tél. :</label>
              <input type="text" className="w-full border rounded p-2 mt-1" />
            </div>
          </div>
        </div>
      );
};

export default EmergencyContactsSection;
