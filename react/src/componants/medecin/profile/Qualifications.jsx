function Qualifications(props) {
    return (
        <ul className="list-disc pl-4">
            {props.qualifications.map((qualification, index) => (
                <li key={index} className="mb-2">{qualification}</li>
            ))}
        </ul>
    );
}
export default Qualifications;