

function AntecedentsFamiliaux (){
    return(
 
<div className="bg-gray-50 p-6 rounded-lg shadow-sm">
    <h3 className="text-xl font-semibold mb-4">ANTECEDENTS FAMILIAUX</h3>
    <div className="grid grid-cols-2 gap-4">
        <div>
            <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500" />
                <span>Diabète</span>
            </label>
            <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500" />
                <span>Allergies</span>
            </label>
            <div>
                <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500" />
                    <span>Autres : préciser</span>
                </label>
                <input type="text" className="w-full border rounded p-2 mt-1" />
            </div>
        </div>
        <div>
            <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500" />
                <span>Asthme</span>
            </label>
            <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500" />
                <span>Maladies métaboliques</span>
            </label>
            <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500" />
                <span>Cardiopathie</span>
            </label>
            <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500" />
                <span>Anomalie du tube neural</span>
            </label>
            <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500" />
                <span>Neuropathie</span>
            </label>
            <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500" />
                <span>Maladie coeliaque</span>
            </label>
            <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500" />
                <span>Hémoglobinopathies</span>
            </label>
        </div>
    </div>
</div>

    )
}

export default AntecedentsFamiliaux;