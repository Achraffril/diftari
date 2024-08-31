function MedecinContact(props) {
    return (
        <div>
            <p className="mb-2"><span className="font-semibold">Email:</span> {props.email}</p>
            <p><span className="font-semibold">Phone:</span> {props.phone}</p>
        </div>
    );
}
export default MedecinContact;