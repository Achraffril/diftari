import React from 'react';
import { Link } from 'react-router-dom';

const UserCard = (props) => {
  return (
    <li className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-200">
      <div className="flex w-full items-center justify-between space-x-6 p-6">
        <div className="flex-1 truncate">
          <div className="flex items-center space-x-3">
            <h3 className="truncate text-sm font-medium text-gray-900">{props.name}</h3>
          </div>
          <p className="mt-1 truncate text-sm text-gray-500">{props.type}</p>
        </div>
        <img
          className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
          src={props.image}
          alt={props.name}
        />
      </div>
           <div className="flex justify-end p-4">
            <Link  to={`/admin/demands/${props.id}`} state={props.data} >
          <button className="px-4 py-2 bg-secondary-color text-white text-sm font-semibold rounded-lg shadow-md   transition-colors duration-200">
            Afficher
          </button>
          </Link>
        </div>
    </li>
  );
};

export default UserCard;
