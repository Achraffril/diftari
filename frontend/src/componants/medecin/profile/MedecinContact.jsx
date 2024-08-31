function MedecinContact(props) {
    return (
        <div>
            <p className="mb-2"><span className="font-semibold">Email:</span> {props.doctor.email}</p>
            <p><span className="font-semibold">Phone:</span> {props.doctor.tel}</p>
            <p><span className="font-semibold">Adresse:</span> {props.doctor.adresse}</p>
            <p><span className="font-semibold">Code postal:</span> {props.doctor.code_postal}</p>
        </div>
    );
}
export default MedecinContact;