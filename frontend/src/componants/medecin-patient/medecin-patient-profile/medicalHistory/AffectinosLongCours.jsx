



function AffectinosLongCours (){
    return(
        <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">AFFECTIONS AU LONG COURS</h3>
        <div className="grid grid-cols-2 gap-4">
            <div>
                <label htmlFor="maladie" className="block font-medium">Maladie :</label>
                <input id="maladie" type="text" className="w-full border rounded p-2 mt-1" />
            </div>
            <div>
                <label htmlFor="date-diagnostic" className="block font-medium">Date du diagnostic :</label>
                <input id="date-diagnostic" type="text" className="w-full border rounded p-2 mt-1" />
            </div>
            <div>
                <label htmlFor="observation" className="block font-medium">Observation :</label>
                <textarea id="observation" className="w-full border rounded p-2 mt-1"></textarea>
            </div>
        </div>
    </div>
    
    

    )
}

export default AffectinosLongCours;