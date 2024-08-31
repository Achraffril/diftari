


function ExamanSestimatiqueMedPatient(){
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-xl font-bold mb-4">Examen médical post-natal</h2>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <h3 className="text-lg font-semibold mb-2">À la sortie des suites de couches</h3>
                    <p>Date: / /</p>
                    <p>Âge: Jours Semaines</p>
                    <p>Poids: g Kg</p>
                    <p>Taille: cm</p>
                    <p>Périmètre crânien: cm</p>
                    <p>Température: °C</p>
                    <p>Examen cutanéo-muqueux:</p>
                    <ul className="list-disc pl-4">
                        <li>Pâleur</li>
                        <li>Ictère</li>
                        <li>Angiome</li>
                    </ul>
                    <p>Examen de la tête:</p>
                    <ul className="list-disc pl-4">
                        <li>Anomalie du périmètre crânien: Microcéphalie / Macrocéphalie</li>
                        <li>Anomalie de la fontanelle: Font. Ant. fermée / Fontanelle bombée</li>
                        <li>Anencéphalie</li>
                    </ul>
                    <p>Examen de l’abdomen:</p>
                    <ul className="list-disc pl-4">
                        <li>Infection de l’ombilic</li>
                        <li>Hépatomégalie</li>
                        <li>Splénomégalie</li>
                        <li>Hernie ombilicale</li>
                    </ul>
                    <p>Examen cardiovasculaire:</p>
                    <ul className="list-disc pl-4">
                        <li>Pouls fémoraux absents</li>
                        <li>Souffle cardiaque</li>
                    </ul>
                    {/* Other examinations go here */}
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">À la fin du deuxième mois</h3>
                    {/* Data for the end of the second month goes here */}
                </div>
            </div>
        </div>
    );
}
export default ExamanSestimatiqueMedPatient;