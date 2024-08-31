import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import LineChart from "../medecin/dashboardComponants/Statistice-line";
import DoughnutChart from "../medecin/dashboardComponants/Statistice-donat";

// import Chart from 'chart.js';
// import { Line } from 'react-chartjs-2';

const Dashboard = () => {
  const currentDate = new Date();
  const [data, setData] = useState({
    total_scans:0,
    total_today:0,
    total:0,
    started_at: "....",
    gallerySize:3,
    totalsize:0,
    maxSize:0
    
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
 




  const bitConverter = (size)=>{
    return ''
  }
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://xse.egd.mybluehost.me/api/get/views.php');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        jsonData.totalsize = parseFloat(jsonData.totalsize).toFixed(2);
        jsonData.maxSize = 20.00;
        setData(jsonData);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
      <>
      <section className="w-100 dark:text-gray-800">
        <section>
        </section>
        <h2 className="font-semibold h2 text-primary-color dark:text-gray-100 mb-5 ">Statistiques </h2>
        <div className="grid grid-cols-5 gap-4 my-5">
        <div className="col-span-3">
        <LineChart/>
        </div>
        <div className="col-span-2 border ">
        <DoughnutChart/>
        </div>
        </div>
        <div className="flex gap-5 flex-wrap w-100 ">
            <div className="p-4 flex-1 bg-white rounded-lg shadow-sm border-l-4 border-yellow-500 ">
                <div className="flex items-center justify-betweeen align-items-center gap-4 ">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z" />
                        </svg>

                    </div>
                    <div className="text text-cente ">
                        <h2 className="h2">{data.total_scans}/<span className="h3 text-gray-500">{data.rest}</span> </h2>
                        <p className="">Scans d'aujourd'hui</p>
                    </div>
                </div>
            </div>
            {/* <div className="p-4 flex-1 bg-white rounded-lg shadow-sm border-l-4 border-blue-400 ">
                <h2 className="h2"></h2>
                <p className="">Vues provenant d'autres sources </p>
            </div> */}

            <div className="p-4 flex-1 bg-white rounded-lg shadow-sm border-l-4 border-green-700">
                <div className="flex align-items-center gap-4 justify-betweeen">
                    <div className="">

                        <h3 className="h3">{data.total_today}</h3>


                    </div>
                    <div className="col ">
                        <div className="flex gap-2 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>


                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>

                        </div>
                        <p className="">Vues provenant d'autres sources </p>
                    </div>
                </div>
            </div>
            <div className="p-4 flex-1 bg-white rounded-lg shadow-sm border-l-4 border-green-700">
                <div className="flex align-items-center gap-4 justify-betweeen">
                    <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                        </svg>

                    </div>
                    <div className="col ">
                        <h3 className="h3">{data.total}</h3>
                        <p>Total des demands de aujourd'hui</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section className="w-100 mt-5">
        <h2 className="font-semibold h2 text-primary-color dark:text-gray-100 mb-5">Accès rapide</h2>
        <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            <li className="rounded-full p-2 cursor-pointer bg-white shadow-sm">
                <div className="flex items-center gap-x-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-16 h-16 tet-green-700 text-yellow-main p-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>

                <div>
                    <Link to="/panel/dashboard/insert/menu">
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900 ">Trouver un Compte </h3>
                    <p className="text-sm font-semibold leading-6 text-gray-600"> Compte</p>
                    </Link>
                </div>
                </div>
            </li>
            
            

      
        </ul>
    </section>
      </>
  );
};

export default Dashboard;


