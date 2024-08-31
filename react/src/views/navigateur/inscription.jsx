import { Link } from "react-router-dom"

export const InscriptionMedecin = ()=>{
  return (<>
    <div className="m-auto lg:w-2/3 bg-white shadow rounded p-5 my-5 ">
        <img src="/img/logo.png" alt="" className="h-20 m-auto mb-5" />
    <form method="post">
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Renseignements personnels</h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-primary-color">
                Prenom <span className="">*</span>
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="outline-primary block px-2 w-full rounded-md outline-none border-0 py-1.5 text-gray-900 shadow-sm bg-gray-10  sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" dir="rtl" className="block text-sm text-end font-semibold leading-6 text-primary-color">
                الاسم الشخصي <span className="">*</span>
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="outline-primary block px-2 w-full rounded-md outline-none border-0 py-1.5 text-gray-900 shadow-sm bg-gray-10 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>


            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-primary-color">
                Nom <span className="">*</span> 
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="outline-primary block px-2 w-full rounded-md outline-none border-0 py-1.5 text-gray-900 shadow-sm bg-gray-10 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>


            <div className="sm:col-span-3">
              <label htmlFor="last-name" dir="rtl" className="text-end block text-sm font-semibold leading-6 text-primary-color">
                الاسم العائلي <span className="">*</span>
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="outline-primary block px-2 w-full rounded-md outline-none border-0 py-1.5 text-gray-900 shadow-sm bg-gray-10 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-6 flex gap-5 align-items-center">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-primary-color">
                Sexe <span className="">*</span>
              </label>
              <div className="flex gap-5">
              <div className="flex items-center gap-x-3">
                  <input
                    id="push-everything"
                    name="push-notifications"
                    type="radio"
                    className="accent-primar colorh-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
                    Homme
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-email"
                    name="push-notifications"
                    type="radio"
                    className="accent-primar color h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
                    Femme
                  </label>
                </div>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-primary-color">
                Pays <span className="">*</span>
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="outline-primary block px-2 w-full rounded-md outline-none border-0 py-1.5 text-gray-900 shadow-sm bg-gray-10 ring-1 ring-inset ring-gray-300 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Maroc / المغرب</option>
                  <option>Autre</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-primary-color">
                Nationalité <span className="">*</span>
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="outline-primary block px-2 w-full rounded-md outline-none border-0 py-1.5 text-gray-900 shadow-sm bg-gray-10 ring-1 ring-inset ring-gray-300 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Marocain</option>
                  <option>َAutre</option>
                </select>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-primary-color">
                l'addresse <span className="">*</span>
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="outline-primary block px-2 w-full rounded-md outline-none border-0 py-1.5 text-gray-900 shadow-sm bg-gray-10 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-primary-color">
                ville <span className="">*</span>
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  className="outline-primary block px-2 w-full rounded-md outline-none border-0 py-1.5 text-gray-900 shadow-sm bg-gray-10 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block text-sm font-medium leading-6 text-primary-color">
                Province <span className="">*</span>
              </label> 
              <div className="mt-2">
                <input
                  type="text"
                  name="region"
                  id="region"
                  autoComplete="address-level1"
                  className="outline-primary block px-2 w-full rounded-md outline-none border-0 py-1.5 text-gray-900 shadow-sm bg-gray-10 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-primary-color">
                Code postal <span className="">*</span>
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autoComplete="postal-code"
                  className="outline-primary block px-2 w-full rounded-md outline-none border-0 py-1.5 text-gray-900 shadow-sm bg-gray-10 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-primary-color">
                Téléphone <span className="">*</span>
              </label>
              <div className="mt-2 w-full outline-primary block w-full bg-gray-100 border-none rounded">
              <div class="flex rounded-md w-100 w-full">
                <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">+ 212 </span>
                <input type="text" 
                name="username" 
                id="username" 
                autocomplete="username" 
                class="block w-full flex-1 border-0 outline-none bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" 
                placeholder="623456789"/>
              </div>
              </div>
            </div>

            
            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-primary-color">
                l'addresse email<span className="">*</span>
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="outline-primary block px-2 w-full rounded-md outline-none border-0 py-1.5 text-gray-900 shadow-sm bg-gray-10 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  placeholder="username@exemple.com"
                />
              </div>
            </div>


            
            <div class="col-span-full">
          <label for="cover-photo" class="block text-sm font-medium leading-6 text-primary-color">Photo personnel</label>
          <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div class="text-center">
              <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
              </svg>
              <div class="mt-4 flex text-sm leading-6 text-gray-600">
                <label for="file-upload" class="relative cursor-pointer rounded-md font-semibold text-primary-color hover:bg-gray-100 px-2">
                  <span>Upload a file</span>
                  <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                </label>
                <p class="pl-1">or drag and drop</p>
              </div>
              <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>

    



          </div>
        </div>
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Informations professionnelles</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="NIM" className="block text-sm font-medium leading-6 text-primary-color">
              Numéro d'identification médicale <span className="">*</span>
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="NIM"
                  id="NIM"
                  autoComplete=""
                  placeholder="Votre Identifiant medeciale"
                  className="outline-primary block px-2 w-full rounded-md outline-none border-0 py-1.5 text-gray-900 shadow-sm bg-gray-10  sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="dateLicence" className="block text-sm font-semibold leading-6 text-primary-color">
              Spécialité médicale <span className="">*</span>
              </label>
              <div className="mt-2 w-full">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="outline-primary block px-2 w-full rounded-md outline-none border-0 py-1.5 text-gray-900 shadow-sm bg-gray-10 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
                >
                  <option value="medecine generale">Médecine générale</option>
                  <option value="anesthesiologie">Anesthésiologie</option>
                  <option value="cardiologie">Cardiologie</option>
                  <option value="dermatologie">Dermatologie</option>
                  <option value="endocrinologie">Endocrinologie</option>
                  <option value="gastro-enterologie">Gastro-entérologie</option>
                  <option value="gynecologie">Gynécologie</option>
                  <option value="hematologie">Hématologie</option>
                  <option value="infectiologie">Infectiologie</option>
                  <option value="neurologie">Neurologie</option>
                  <option value="oncologie">Oncologie</option>
                  <option value="ophtalmologie">Ophtalmologie</option>
                  <option value="orthopedie">Orthopédie</option>
                  <option value="otorhinolaryngologie">Otorhinolaryngologie</option>
                  <option value="pediatrie">Pédiatrie</option>
                  <option value="pneumologie">Pneumologie</option>
                  <option value="psychiatrie">Psychiatrie</option>
                  <option value="radiologie">Radiologie</option>
                  <option value="rhumatologie">Rhumatologie</option>
                  <option value="urologie">Urologie</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="dateLicence" className="block text-sm font-semibold leading-6 text-primary-color">
              Ville de travail <span className="">*</span>
              </label>
              <div className="mt-2 w-full">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="outline-primary block px-2 w-full rounded-md outline-none border-0 py-1.5 text-gray-900 shadow-sm bg-gray-10 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
                >
                  <option value="casa">Casablanca</option>
                </select>
              </div>
            </div>


            


            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-primary-color">
              Établissement médical affilié <span className="">*</span>
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  placeholder="Par exemple : UM6SS ou Université Mohammed VI Des Sciences de la santé"
                  className="outline-primary block px-2 w-full rounded-md outline-none border-0 py-1.5 text-gray-900 shadow-sm bg-gray-10 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            

            


  

    



          </div>
        </div>

        {/* plus sections */}
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <Link to="/">
        <button className="text-sm font-semibold leading-6 text-primary-color">
          Annuler
        </button>
        </Link>
        <button
          type="submit"
          className="rounded-md bg-primary-color px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Envoyer le demande 
        </button>
      </div>
    </form>
    </div>
    </>
  )
}



export const InscriptionPatient = ()=>{
  return (<>
    <div className="m-auto lg:w-2/3 bg-white shadow rounded p-5 my-5 ">
        <img src="/img/logo.png" alt="" className="h-20 m-auto mb-5" />
    <form method="post">
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Renseignements personnels</h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-primary-color">
                Prenom <span className="">*</span>
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="outline-primary block px-2 w-full rounded-md outline-none border-0 py-1.5 text-gray-900 shadow-sm bg-gray-10  sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" dir="rtl" className="block text-sm text-end font-semibold leading-6 text-primary-color">
                الاسم الشخصي <span className="">*</span>
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="outline-primary block px-2 w-full rounded-md outline-none border-0 py-1.5 text-gray-900 shadow-sm bg-gray-10 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>


            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-primary-color">
                Nom <span className="">*</span> 
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="outline-primary block px-2 w-full rounded-md outline-none border-0 py-1.5 text-gray-900 shadow-sm bg-gray-10 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>


            <div className="sm:col-span-3">
              <label htmlFor="last-name" dir="rtl" className="text-end block text-sm font-semibold leading-6 text-primary-color">
                الاسم العائلي <span className="">*</span>
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="outline-primary block px-2 w-full rounded-md outline-none border-0 py-1.5 text-gray-900 shadow-sm bg-gray-10 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-6 flex gap-5 align-items-center">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-primary-color">
                Sexe <span className="">*</span>
              </label>
              <div className="flex gap-5">
              <div className="flex items-center gap-x-3">
                  <input
                    id="push-everything"
                    name="push-notifications"
                    type="radio"
                    className="accent-primar colorh-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
                    Homme
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-email"
                    name="push-notifications"
                    type="radio"
                    className="accent-primar color h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
                    Femme
                  </label>
                </div>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-primary-color">
                Pays <span className="">*</span>
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="outline-primary block px-2 w-full rounded-md outline-none border-0 py-1.5 text-gray-900 shadow-sm bg-gray-10 ring-1 ring-inset ring-gray-300 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Maroc / المغرب</option>
                  <option>Autre</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-primary-color">
                Nationalité <span className="">*</span>
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="outline-primary block px-2 w-full rounded-md outline-none border-0 py-1.5 text-gray-900 shadow-sm bg-gray-10 ring-1 ring-inset ring-gray-300 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Marocain</option>
                  <option>َAutre</option>
                </select>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-primary-color">
                l'addresse <span className="">*</span>
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="outline-primary block px-2 w-full rounded-md outline-none border-0 py-1.5 text-gray-900 shadow-sm bg-gray-10 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-primary-color">
                ville <span className="">*</span>
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  className="outline-primary block px-2 w-full rounded-md outline-none border-0 py-1.5 text-gray-900 shadow-sm bg-gray-10 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block text-sm font-medium leading-6 text-primary-color">
                Province <span className="">*</span>
              </label> 
              <div className="mt-2">
                <input
                  type="text"
                  name="region"
                  id="region"
                  autoComplete="address-level1"
                  className="outline-primary block px-2 w-full rounded-md outline-none border-0 py-1.5 text-gray-900 shadow-sm bg-gray-10 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-primary-color">
                Code postal <span className="">*</span>
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autoComplete="postal-code"
                  className="outline-primary block px-2 w-full rounded-md outline-none border-0 py-1.5 text-gray-900 shadow-sm bg-gray-10 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-primary-color">
                Téléphone <span className="">*</span>
              </label>
              <div className="mt-2 w-full outline-primary block w-full bg-gray-100 border-none rounded">
              <div class="flex rounded-md w-100 w-full">
                <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">+ 212 </span>
                <input type="text" 
                name="username" 
                id="username" 
                autocomplete="username" 
                class="block w-full flex-1 border-0 outline-none bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" 
                placeholder="623456789"/>
              </div>
              </div>
            </div>

    



          </div>
        </div>

        {/* <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Notifications</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            We'll always let you know about important changes, but you pick what else you want to hear about.
          </p>

          <div className="mt-10 space-y-10">
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-primary-color">By Email</legend>
              <div className="mt-6 space-y-6">
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      className="accent-primary-color h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="comments" className="font-medium text-gray-900">
                      Comments
                    </label>
                    <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="candidates"
                      name="candidates"
                      type="checkbox"
                      className="h-4 w-4 accent-primary-color rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="candidates" className="font-medium text-gray-900">
                      Candidates
                    </label>
                    <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="offers"
                      name="offers"
                      type="checkbox"
                      className="accent-primary-color h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Offers
                    </label>
                    <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-primary-color">Push Notifications</legend>
              <p className="mt-1 text-sm leading-6 text-gray-600">These are delivered via SMS to your mobile phone.</p>
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-everything"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-primary-color">
                    Everything
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-email"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-primary-color">
                    Same as email
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-nothing"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-primary-color">
                    No push notifications
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div> */}
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
      <Link to="/">
        <button className="text-sm font-semibold leading-6 text-primary-color">
          Annuler
        </button>
      </Link>
        <button
          type="submit"
          className="rounded-md bg-primary-color px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Envoyer le demande 
        </button>
      </div>
    </form>
    </div>
    </>
  )
}
