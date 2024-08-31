export default function ConsultationItem(props) {
    return (
        <div className="px-4 py-4 sm:px-6">
            <p className="text-sm font-medium flex justify-between text-gray-900">
                <span className="text-gray-500">{props.name} / {props.date}</span>
                <span>{props.type}</span>
            </p>
        </div>
    );
}
