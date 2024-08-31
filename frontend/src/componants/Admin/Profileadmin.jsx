import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Loading from "../loading/Loading";

const Profile  = () =>{
  const context = useOutletContext();
  if (!context) {
      return <Loading />;
    }
  
    const { admin } = context;


    return (<>
    
<div className="h1 dark:text-green-600 ">Hi {admin.nom}, Bienvenue sur votre profil</div>
    <p>Ces informations sont confidentielles. Veuillez en user avec prudence</p>
    <section className="">

      <div className="h-full dark:text-zinc-500">
        <div className="-b-2 block md:flex md:gap-0 gap-2">
          <div className="w-full md:w-2/5  bg-white shadow-md rounded-3xl mt-3">
            <div className="p-4 sm:p-6 lg:p-8 dark:bg-zinc-800 rounded-2xl">
            <div className="w-full p-8 flex justify-center ">
                  <img id="showImage" className="h-32 w-32 object-cover items-center  rounded-full" src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/avatars/avatar2.jpg" alt="" />                          
              </div>
              <div className="text-2xl text-center font-semibold dark:text-zinc-100"></div>
              <div className="text-2xl text-center font-semibold dark:text-zinc-100">{}</div>
              <p className="py-3 text-center text-zinc-500">Vous pouvez gérer toutes les fonctionnalités.</p>
              <div className="flex justify-center  ">
                  <button className="-mt-2 text-md font-bold  rounded-full px-5 py-2 cursor-pointer bg-zinc-800 hover:bg-zinc-700 dark:bg-green-700 hover:dark:bg-green-800 text-zinc-100" type="button">Modifier</button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-3/5  bg-white lg:ml-4 shadow-md rounded-3xl mt-3">
          <div class="border-t border-gray-200">
        <dl>
            <div class="p-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-semibold text-gray-700">Super Admin</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2">{ admin.super_admin ? 'Yes' : 'No' }</dd>
            </div>
            <div class="p-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-semibold text-gray-700">Last Name</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2">{ admin.nom }</dd>
            </div>
            <div class="p-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-semibold text-gray-700">First Name</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2">{ admin.prenom }</dd>
            </div>
            <div class="p-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-semibold text-gray-700">Role</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2">{ admin.role }</dd>
            </div>
            <div class="p-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-semibold text-gray-700">Centre</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2">{ admin.centre }</dd>
            </div>
            <div class="p-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-semibold text-gray-700">Province</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2">{ admin.province }</dd>
            </div>
        </dl>
    </div>
          </div>

        </div>
      
      </div>
    </section>
  
    
    </>)
}
export default Profile ;


