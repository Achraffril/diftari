

function CouvertureMedicale (){
    return(
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
    <h3 className="text-xl font-semibold mb-4">COUVERTURE MEDICALE</h3>
    <div className="grid grid-cols-2 gap-4">
        <div>
            <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500" />
                <span>CNOPS</span>
            </label>
            <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500" />
                <span>CNSS</span>
            </label>
            <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500" />
                <span>RAMED</span>
            </label>
            <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500" />
                <span>Autre</span>
            </label>
        </div>
        <div>
            <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500" />
                <span>Aucune</span>
            </label>
            <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500" />
                <span>Assurance privée</span>
            </label>
            <div>
                <label htmlFor="numero-affiliation" className="block font-medium">Numéro d’affiliation :</label>
                <input id="numero-affiliation" type="text" className="w-full border rounded p-2 mt-1" />
            </div>
        </div>
    </div>
</div>

    )
}

export default CouvertureMedicale;