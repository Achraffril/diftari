function DoctorHeader(props) {

    
    return (

<div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-between p-6 rounded-lg">
    <div className="flex flex-col items-center lg:flex-row lg:items-center lg:space-x-8">
        <img src={props.doctor.photo} alt={props.doctor.nom} className="w-32 h-32 object-cover rounded-full mb-4 lg:mb-0" />
        <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold text-gray-800">{props.doctor.nom} {props.doctor.prenom}</h1>
            <p className="text-lg text-gray-600 mb-2">{props.doctor.specialite}</p>
        </div>
    </div>
    <div className="mt-2 lg:mt-0 lg:text-right">
        <img src="/img/medecinProfile2.png" alt="logo" className="w-36 rounded-lg" />
    </div>
</div>

    
    );
}
export default DoctorHeader;
