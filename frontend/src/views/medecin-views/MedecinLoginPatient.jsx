import { createRef } from "react";
import axiosClient from "../../axios-client";
import { useNavigate } from "react-router-dom";


export default function MedecinLoginPatient(){
  const navigate = useNavigate()

  const IdRef = createRef()

 const onsubmit = (e) =>{
   e.preventDefault()
   const id = IdRef.current.value
   axiosClient.get(`/dossiers/${id}/`)
   .then(()=>{
    navigate(`/medecin-patient/${id}` )
    
   })
   .catch((err) => {
    console.error(err);
  });
 }

    return(
        <>
            <div>
                <div className="m-auto lg:w-2/3 md bg-white shadow p-5 my-5 rounded-3xl ">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:divide-x lg:divided-x">
                        <div className="flex items-center justify-center align-items-center">

                            <form className="" onSubmit={onsubmit}>
                                <div className="inputs-labels">
                                    <div className="h-36 py-2">
                                    <label className="font-semibold mb-3" htmlFor="identifiant">Identifiant d'accès</label>
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="identifiant"
                                        ref={IdRef}
                                        autoComplete="given-name"
                                        placeholder="Identifiant"
                                        className="outline-secondary block px-2 w-full rounded-md outline-none border-0 py-1.5 text-gray-900 shadow-sm bg-gray-10  sm:text-sm sm:leading-6"
                                        />                                    </div>
                                    <button type="submit" class="btn text-white bg-secondary-color w-full">Ouvrier le dossier</button>
                                </div>
                            </form >
                        </div>
                        <div className="flex items-center justify-center align-items-center visible mobiled">
                                    <div  className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-36 h-36 text-secondary-color">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z" />
                                        </svg>
                                        <div className="connect_cart_button mt-4">
                                        <label htmlFor="identifiant" class="btn text-white text-secondary-color w-full ">Scan</label>
                                    </div>
                                    </div>

                        </div>
                        </div>
                </div>
            </div>
        </>
    );

}
