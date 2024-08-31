import React from 'react';

const ParentsSection = () => {
    return (
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">IDENTITE DES PARENTS</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-medium">Nom et prénom de la mère :</label>
              <input type="text" className="w-full border rounded p-2 mt-1" />
            </div>
            <div>
              <label className="block font-medium">Date de naissance de la mère :</label>
              <input type="text" className="w-full border rounded p-2 mt-1" />
            </div>
            <div>
              <label className="block font-medium">Groupe sanguin de la mère :</label>
              <input type="text" className="w-full border rounded p-2 mt-1" />
            </div>
            <div>
              <label className="block font-medium">Facteur Rhésus de la mère :</label>
              <input type="text" className="w-full border rounded p-2 mt-1" />
            </div>
            <div>
              <label className="block font-medium">Profession de la mère :</label>
              <input type="text" className="w-full border rounded p-2 mt-1" />
            </div>
            <div>
              <label className="block font-medium">Tél. de la mère :</label>
              <input type="text" className="w-full border rounded p-2 mt-1" />
            </div>
            <div>
              <label className="block font-medium">Nom et prénom du père :</label>
              <input type="text" className="w-full border rounded p-2 mt-1" />
            </div>
            <div>
              <label className="block font-medium">Date de naissance du père :</label>
              <input type="text" className="w-full border rounded p-2 mt-1" />
            </div>
            <div>
              <label className="block font-medium">Groupe sanguin du père :</label>
              <input type="text" className="w-full border rounded p-2 mt-1" />
            </div>
            <div>
              <label className="block font-medium">Facteur Rhésus du père :</label>
              <input type="text" className="w-full border rounded p-2 mt-1" />
            </div>
            <div>
              <label className="block font-medium">Profession du père :</label>
              <input type="text" className="w-full border rounded p-2 mt-1" />
            </div>
            <div>
              <label className="block font-medium">Tél. du père :</label>
              <input type="text" className="w-full border rounded p-2 mt-1" />
            </div>
          </div>
        </div>
      );
};

export default ParentsSection;
