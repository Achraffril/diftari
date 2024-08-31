import React from 'react';

const IdentitySection = () => {
    return (
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">IDENTITE DE L’ENFANT</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-medium">Nom :</label>
              <input type="text" className="w-full border rounded p-2 mt-1" />
            </div>
            <div>
              <label className="block font-medium">Prénom :</label>
              <input type="text" className="w-full border rounded p-2 mt-1" />
            </div>
            <div>
              <label className="block font-medium">Sexe :</label>
              <div className="flex space-x-4 mt-1">
                <label className="flex items-center">
                  <input type="radio" name="gender" value="F" className="mr-2" /> F
                </label>
                <label className="flex items-center">
                  <input type="radio" name="gender" value="M" className="mr-2" /> M
                </label>
              </div>
            </div>
            <div>
              <label className="block font-medium">Groupe sanguin :</label>
              <input type="text" className="w-full border rounded p-2 mt-1" />
            </div>
            <div>
              <label className="block font-medium">Rhésus :</label>
              <input type="text" className="w-full border rounded p-2 mt-1" />
            </div>
            <div>
              <label className="block font-medium">Structure sanitaire :</label>
              <div className="flex space-x-4 mt-1">
                <label className="flex items-center">
                  <input type="radio" name="healthcare" value="Privée" className="mr-2" /> Privée
                </label>
                <label className="flex items-center">
                  <input type="radio" name="healthcare" value="Public" className="mr-2" /> Public
                </label>
              </div>
            </div>
            <div>
              <label className="block font-medium">N°SMI :</label>
              <input type="text" className="w-full border rounded p-2 mt-1" />
            </div>
            <div className="col-span-2">
              <label className="block font-medium">Adresse :</label>
              <input type="text" className="w-full border rounded p-2 mt-1" />
            </div>
          </div>
        </div>
      );
};

export default IdentitySection;
