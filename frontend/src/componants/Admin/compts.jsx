

import React from 'react';

const people = [
  {
    id: 1,
    picture: 'https://via.placeholder.com/150',
    name: 'John Doe',
    lineage: 'Smith Family',
    email: 'john.doe@example.com',
  },
  {
    id: 2,
    picture: 'https://via.placeholder.com/150',
    name: 'Jane Roe',
    lineage: 'Doe Family',
    email: 'jane.roe@example.com',
  },
  // Add more people as needed
];

const affichCompts = () => {
  return (
    <div className="container mx-auto my-8">
         
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Picture</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Lineage</th>
            <th className="py-2 px-4 border-b">Email</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => (
            <tr key={person.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">
                <img src={person.picture} alt={person.name} className="w-16 h-16 object-cover rounded-full" />
              </td>
              <td className="py-2 px-4 border-b">{person.name}</td>
              <td className="py-2 px-4 border-b">{person.lineage}</td>
              <td className="py-2 px-4 border-b">{person.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default affichCompts;
