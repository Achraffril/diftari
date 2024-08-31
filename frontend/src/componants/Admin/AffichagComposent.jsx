import React from 'react';

const AffichData = (props) => {
  return (
    <div className="max-w-lg mx-auto my-10 px-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Doctor Profile</h1>
      <table className="min-w-full bg-white">
        <tbody>
          <tr className="border-b">
            <td className="py-4 px-6 font-medium text-gray-700">ID:</td>
            <td className="py-4 px-6 text-gray-900">{props.doctor.id}</td>
          </tr>
          <tr className="border-b">
            <td className="py-4 px-6 font-medium text-gray-700">CIN:</td>
            <td className="py-4 px-6 text-gray-900">{props.doctor.cin}</td>
          </tr>
          <tr className="border-b">
            <td className="py-4 px-6 font-medium text-gray-700">Created At:</td>
            <td className="py-4 px-6 text-gray-900">{new Date(props.doctor.created_at).toLocaleString()}</td>
          </tr>
          <tr className="border-b">
            <td className="py-4 px-6 font-medium text-gray-700">Email:</td>
            <td className="py-4 px-6 text-gray-900">{props.doctor.email}</td>
          </tr>
          <tr className="border-b">
            <td className="py-4 px-6 font-medium text-gray-700">Telephone:</td>
            <td className="py-4 px-6 text-gray-900">{props.doctor.tel}</td>
          </tr>
          <tr className="border-b">
            <td className="py-4 px-6 font-medium text-gray-700">Nom:</td>
            <td className="py-4 px-6 text-gray-900">{props.doctor.nom}</td>
          </tr>
          <tr className="border-b">
            <td className="py-4 px-6 font-medium text-gray-700">Nom Arabic:</td>
            <td className="py-4 px-6 text-gray-900">{props.doctor.nom_ar}</td>
          </tr>
          <tr className="border-b">
            <td className="py-4 px-6 font-medium text-gray-700">Prenom:</td>
            <td className="py-4 px-6 text-gray-900">{props.doctor.prenom}</td>
          </tr>
          <tr className="border-b">
            <td className="py-4 px-6 font-medium text-gray-700">Prenom Arabic:</td>
            <td className="py-4 px-6 text-gray-900">{props.doctor.prenom_ar}</td>
          </tr>
          {props.doctor.specialite && (
            <tr className="border-b">
              <td className="py-4 px-6 font-medium text-gray-700">Specialite:</td>
              <td className="py-4 px-6 text-gray-900">{props.doctor.specialite}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AffichData;
