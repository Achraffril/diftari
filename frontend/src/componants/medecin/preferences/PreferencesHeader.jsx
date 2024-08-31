import React from 'react';
import axiosClient from '../../../axios-client';
import { useStateContext } from '../../../context/ContextProvider';

function PreferencesHeader({ doctor }) {

    const {user, token, setUser, setToken, notification} = useStateContext();


    const onLogout = ev => {
        ev.preventDefault()

        axiosClient.post('/logout')
          .then(() => {
            setUser({})
            setToken(null)
          })
      }
    return (
        <div className="flex items-center justify-between space-x-4 p-4 bg-blue-100 rounded-lg shadow-md">
            <div className="flex items-center space-x-4">
                <img src={doctor.image} alt={doctor.nom} className="w-16 h-16 rounded-full" />
                <div>
                    <h1 className="text-2xl font-bold">{doctor.nom}</h1>
                    <p className="text-gray-600">{doctor.specialite}</p>
                </div>
            </div>
            <div>
                <button
                    onClick={onLogout}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-lg text-white bg-secondary-color focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                    Se déconnecter
                </button>
            </div>
        </div>
    );
}

export default PreferencesHeader;
