function Qualifications(props) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
            <p className="text-lg text-gray-700"><strong>Sexe:</strong> {props.doctor.sexe}</p>
            <p className="text-lg text-gray-700"><strong>Nationalité:</strong> {props.doctor.nationalite}</p>
            <p className="text-lg text-gray-700"><strong>CIN:</strong> {props.doctor.cin}</p>
        </div>
        <div>
            <p className="text-lg text-gray-700"><strong>Pays:</strong> {props.doctor.pay}</p>
            <p className="text-lg text-gray-700"><strong>Province:</strong> {props.doctor.province}</p>
            <p className="text-lg text-gray-700"><strong>INPE:</strong> {props.doctor.inpe}</p>
        </div>
        <div>
            <p className="text-lg text-gray-700"><strong>Ville travaile:</strong> {props.doctor.ville_travaile}</p>
            <p className="text-lg text-gray-700"><strong>Specialite:</strong> {props.doctor.specialite}</p>
            <p className="text-lg text-gray-700"><strong>Etablissment:</strong> {props.doctor.etablissment}</p>
        </div>
    </div>


    );
}
export default Qualifications;