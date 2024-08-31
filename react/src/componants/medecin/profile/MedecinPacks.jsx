export default function MedecinPacks(props) {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
            <div className="flex items-center justify-center py-8">
                <span className="text-4xl md:text-6xl text-gray-700">{props.svg}</span>
            </div>
            <div className="p-4 md:p-6">
                <p className="text-lg md:text-xl font-semibold text-gray-800 text-center overflow-hidden overflow-ellipsis h-16 md:h-20">{props.caption}</p>
            </div>
        </div>
    );
}


