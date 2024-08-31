import { Link } from "react-router-dom";
import HomeCardsMedPatient from "../../componants/medecin-patient/medecin-patient-home/HomeCardsMedPatient";


function HomeMedecinPatient(){
    return (
        <div className=" min-h-screen">
          <header className="bg-gradient-to-r from-blue-400 to-indigo-100 pb-32">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold text-white">Accueil du patient</h1>
            </div>
          </header>
          <main className="-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Données Générales Sur l'Enfant */}
              <Link to="/medecin-patient/profile" className="transform transition-transform hover:scale-105">
                <HomeCardsMedPatient title="Données Générales Sur l’Enfant" desc="This section contains general information about the child."/>
              </Link>
              {/* Examens Systematiques */}
              <Link to="/medecin-patient/examen-systematique" className="transform transition-transform hover:scale-105">
                <HomeCardsMedPatient title="Examens Systematiques" desc="This section contains systematic examinations data."/>
              </Link>
              {/* COURBES DE CROISSANCE */}
              <Link to="/medecin-patient/vaccination" className="transform transition-transform hover:scale-105">
                <HomeCardsMedPatient title="COURBES DE CROISSANCE" desc="This section contains growth charts."/>
              </Link>
              {/* Vaccination */}
              <Link to="/medecin-patient/vaccination" className="transform transition-transform hover:scale-105">
                <HomeCardsMedPatient title="Vaccination" desc="This section contains vaccination information."/>
              </Link>
              {/* Supplementation en Vitamines */}
              <Link to="/medecin-patient/supplementation" className="transform transition-transform hover:scale-105">
                <HomeCardsMedPatient title="Supplementation en Vitamines" desc="This section contains vitamin supplementation information."/>
              </Link>
            </div>
          </main>

        
        </div>
      );
}
export default HomeMedecinPatient;