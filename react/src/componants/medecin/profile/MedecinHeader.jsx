function DoctorHeader(props) {

    
    return (
        <div className="flex flex-col items-center lg:flex-row lg:items-start lg:space-x-8 p-6  rounded-lg">
            <img src={props.doctor.image} alt={props.doctor.name} className="w-32 h-32 rounded-full mb-4 lg:mb-0" />
            <div className="text-center lg:text-left">
                <h1 className="text-3xl font-bold text-secondary-color">{props.doctor.name}</h1>
                <p className="text-xl text-gray-700">{props.doctor.title}</p>
            </div>
        </div>
    );
}
export default DoctorHeader;
