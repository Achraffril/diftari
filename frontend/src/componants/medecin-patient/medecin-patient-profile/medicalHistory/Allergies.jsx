

function Allergie (){
    return(
        <div>
        <h3 className="text-xl font-semibold mb-4">ALLERGIES</h3>
        
        <div className="mb-4">
            <div className="flex">
                <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500" />
                    <span>Aliments</span>
                </label>
                
                    <div className="flex ml-12"> 
                        <span> Allergie : </span>
                            <span className="flex">
                                <label className="flex items-center space-x-2 ml-6">
                                    Suspectée 
                                    <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500 ml-2" />
                                </label>
                                <label className="flex items-center space-x-2 ml-6">
                                    Certaine
                                    <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500 ml-2" />
                                </label>
                            </span>
                        </div>
            </div>
            <div className="mt-2">
                <label className="flex items-center space-x-2">
                    <span >Si oui, préciser l’allergène en cause :</span>
                    <textarea className="border border-gray-300 rounded-md px-3 py-2 w-full" name="additionalInfo" id="additionalInfo"></textarea>
                </label>
            </div>

            
        </div>
    
        <div className="mb-4">
            <div className="flex">
                <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500" />
                    <span>Médicaments</span>
                </label>
                
                    <div className="flex ml-12"> 
                        <span> Allergie : </span>
                            <span className="flex">
                                <label className="flex items-center space-x-2 ml-6">
                                    Suspectée 
                                    <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500 ml-2" />
                                </label>
                                <label className="flex items-center space-x-2 ml-6">
                                    Certaine
                                    <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500 ml-2" />
                                </label>
                            </span>
                        </div>
            </div>
            <div className="mt-2">
                <label className="flex items-center space-x-2">
                    <span >Si oui, préciser :</span>
                    <textarea className="border border-gray-300 rounded-md px-3 py-2 w-full" name="additionalInfo" id="additionalInfo"></textarea>
                </label>
            </div>

            
        </div>


        <div className="mb-4">
            <div className="flex">
                <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500" />
                    <span>Autres allergènes</span>
                </label>
                
                    <div className="flex ml-12"> 
                        <span> Allergie : </span>
                            <span className="flex">
                                <label className="flex items-center space-x-2 ml-6">
                                    Suspectée 
                                    <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500 ml-2" />
                                </label>
                                <label className="flex items-center space-x-2 ml-6">
                                    Certaine
                                    <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500 ml-2" />
                                </label>
                            </span>
                        </div>
            </div>
            <div className="mt-2">
                <label className="flex items-center space-x-2">
                    <span >Si oui, préciser :</span>
                    <textarea className="border border-gray-300 rounded-md px-3 py-2 w-full" name="additionalInfo" id="additionalInfo"></textarea>
                </label>
            </div>

            
        </div>


    </div>


    
    

    )
}

export default Allergie;