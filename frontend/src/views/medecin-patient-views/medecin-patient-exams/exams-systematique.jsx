import React, { useState } from 'react';

const MedicalDataForm = () => {
  const [formData, setFormData] = useState({
    sortieDate: '',
    premierMoisDate: '',
    deuxiemeMoisDate: '',
    sortieAgeJours: '',
    sortieAgeSemaines: '',
    premierMoisAgeSemaines: '',
    deuxiemeMoisAgeSemaines: '',
    sortiePoids: '',
    premierMoisPoids: '',
    deuxiemeMoisPoids: '',
    sortieTaille: '',
    premierMoisTaille: '',
    deuxiemeMoisTaille: '',
    sortiePerimetreCranien: '',
    premierMoisPerimetreCranien: '',
    deuxiemeMoisPerimetreCranien: '',
    sortieTemperature: '',
    premierMoisTemperature: '',
    deuxiemeMoisTemperature: '',
    sortieExamen: { Microcéphalie: false, Macrocéphalie: false, FontAntfermée: false, Fontanellebombée: false, Anencéphalie: false },
    premierMoisExamen: { Microcéphalie: false, Macrocéphalie: false, FontAntfermée: false, Fontanellebombée: false, Anencéphalie: false },
    deuxiemeMoisExamen: { Microcéphalie: false, Macrocéphalie: false, FontAntfermée: false, Fontanellebombée: false, Anencéphalie: false },
    examenCutaneoMuqueux: { paleur: false, ictere: false, angiome: false },
    ExamenDeLabdomen: { InfectionDeLombilic: false, Hépatomégalie: false, Splénomégalie: false, HernieOmbilicale: false },
    ExamenCardiovasculaire: { PoulsFémorauxAbsents: false, SouffleCardiaque: false },
    ExamenRespiratoire: { Dyspnée: false, Cyanose: false },
    ExamenNeurologique : {  LéthargieOuInconscience: false,  HypotonieAxiale: false },
    ExamenOstéoArticulaire :  {   LuxationCongénitaleDeLaHanche: false,  PiedsBots: false },
    ExamenOphtalmique :  {    GlobeOculaireDeTailleAnormale: false,   Opacitédelacornée: false, Lueurblanchepupillaire:false, PoursuiteOculaire:false,Strabisme:false,Nystagmus:false,RéflexePhotomoteurAbsent:false },
    anomalieOrganeGenitaux: false,
    trisomie21: false,
    autresMalformations: false,
    surdite: false,
    depistageHypothyroidie: false,
    vaccinationAJour: false,
    SupplémentationEnVitaminesAJour:{PremièrePriseDeVitD:false,PremièrePriseDeVitD:false,PremièrePriseDeVitD:false},
    ModeDdalimentation  :{AllaitementMaternel:false,AllaitementArtificiel:false},
    PsychoAffective  :{Mèrecommuniqueaveclenfant:false,Jeu:false},
    DéveloppementPsychomoteur:{Sourireréponse:false,Regardeladultedanslesyeux:false,Emetuneréponsevocaleàunsollicitation:false,
      Bougeles4membresdemanièreymétrique:false,Surleventresoulèvetêteetépaules:false,
      Défautdajustementposturalquandilestportébébémououraide:false}
  });

  const [showCutaneoDropdown, setShowCutaneoDropdown] = useState(false);
  const [showExamenDropdown, setShowExamenDropdown] = useState(false);
  const [showAbdomenDropdown, setShowAbdomenDropdown] = useState(false);
  const [showCardioDropdown, setShowCardioDropdown] = useState(false);
  const [showRespDropdown, setShowRespDropdown] = useState(false);
  const [showNeuroDropdown,setShowNeuroDropdown]=useState(false);
  const [showOsteoDropdown,setShowOsteoDropdown]=useState(false);
  const [showOphtaDropdown,setShowOphtaDropdown]=useState(false);
  const [showDévelopDropdown,setShowDévelopDropdown]=useState(false);


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : (name.includes("Date") && value !== '' ? new Date(value) : value);
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleExamChange = (e, key, examType) => {
    const { checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [key]: {
        ...prevData[key],
        [examType]: checked,
      },
    }));
  };

  const measures = [
    { name: 'Date', placeholder: '', unit: '', keys: ['sortieDate', 'premierMoisDate', 'deuxiemeMoisDate'] },
    { name: 'Age', placeholder: '', unit: '', keys: [
      { key: 'sortieAgeJours', placeholder: 'jours' },
      { key: 'premierMoisAgeSemaines', placeholder: 'semaines' },
      { key: 'deuxiemeMoisAgeSemaines', placeholder: 'semaines' }
    ]},
    { name: 'Poids', placeholder: '', unit: '', keys: [
      { key: 'sortiePoids', placeholder: 'g' },
      { key: 'premierMoisPoids', placeholder: 'kg' },
      { key: 'deuxiemeMoisPoids', placeholder: 'kg' }
    ]},
    { name: 'Taille', placeholder: 'cm', unit: '', keys: ['sortieTaille', 'premierMoisTaille', 'deuxiemeMoisTaille'] },
    { name: 'Périmètre crânien', placeholder: 'cm', unit: '', keys: ['sortiePerimetreCranien', 'premierMoisPerimetreCranien', 'deuxiemeMoisPerimetreCranien'] },
    { name: 'Température', placeholder: '°C', unit: '', keys: ['sortieTemperature', 'premierMoisTemperature', 'deuxiemeMoisTemperature'] },
    
  ];

  const examenTypesCutaneo = ['paleur', 'ictere', 'angiome'];
  const examenTypes = ['Microcéphalie', 'Macrocéphalie', 'FontAntfermée', 'Fontanellebombée', 'Anencéphalie'];
  const examenDeLabdomen = ['Infection de l’ombilic', 'Hépatomégalie', 'Splénomégalie', 'Hernie ombilicale'];
  const examenCardiovasculaire = ['Pouls fémoraux absents', 'Souffle cardiaque'];
  const examenRespiratoire = ['Dyspnée', 'Cyanose'];
  const ExamenNeurologique = [' Léthargie ou inconscience', ' Hypotonie axiale'];
  const ExamenOstéoArticulaire = ['  Luxation congénitale de la hanche', ' Pieds bots'];
  const ExamenOphtalmique = ['   Globe oculaire de taille anormale', 'Opacité de la cornée',' Lueur blanche pupillaire','   Poursuite oculaire','  Strabisme','   Nystagmus','Réflexe photomoteur absent'];
  const ExamenSupplem = ['  Première prise de Vit D'];
  const ExamenMode = ['  Allaitement maternel','Allaitement artificiel'];
  const ExamenPsycho = [' Mère communique avec l’enfant','Jeux'];
  const ExamenDévelop= [' Sourire réponse','Regarde l’adulte dans les yeux','Emet une réponse vocale à une sollicitation',
    'Bouge les 4 membres de manière symétrique','Sur le ventre, soulève tête et épaules','Défaut d’ajustement postural quand il est porté (bébé mou ou raide)'];

  


  return (
    <form action="">
    <div className="mx-auto bg-white p-8 rounded-lg shadow-lg mt-8 mb-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 border-b pb-4">EXAMENS SYSTEMATIQUES </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2">Mesures</th>
              <th className="border border-gray-400 px-4 py-2">A la sortie des suites de couches</th>
              <th className="border border-gray-400 px-4 py-2">Durant le premier mois</th>
              <th className="border border-gray-400 px-4 py-2">A la fin du deuxième mois</th>
            </tr>
          </thead>
          <tbody>
            
          {measures.map((measure, index) => (
          <tr key={index}>
            <td className="border border-gray-400 px-4 py-2">{measure.name}</td>
            {measure.keys.map((keyObj, idx) => {
              const key = typeof keyObj === 'string' ? keyObj : keyObj.key;
              const placeholder = typeof keyObj === 'string' ? measure.placeholder : keyObj.placeholder;
              return (
                <td key={idx} className="border border-gray-400 px-4 py-2">
                  <input
                    type={measure.name === 'Date' ? 'date' : 'text'}
                    name={key}
                    value={measure.name === 'Date' && formData[key] instanceof Date ? formData[key].toISOString().split('T')[0] : formData[key]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className="border rounded px-2 py-1 w-full"
                  />
                  {measure.unit && <span>{measure.unit}</span>}
                </td>
              );
            })}
          </tr>
        ))}
            <tr>
              <td className="border border-gray-400 px-4 py-2">
                <button
                  type="button"
                  onClick={() => setShowCutaneoDropdown(!showCutaneoDropdown)}
                  className="bg-blue-500 text-white px-5 py-2 rounded"
                >
                  Examen cutanéo-muqueux :
                </button>
              </td>
              {['examenCutaneoMuqueux', 'premierMoisExamen', 'deuxiemeMoisExamen'].map((key, idx) => (
                <td key={idx} className="border border-gray-400 px-4 py-2">
                  {showCutaneoDropdown && (
                    <div className="dropdown-content">
                      {examenTypesCutaneo.map((examType) => (
                        <div key={examType} className="flex items-center mb-2">
                          <input
                            type="checkbox"
                            name={examType}
                            checked={formData[key][examType]}
                            onChange={(e) => handleExamChange(e, key, examType)}
                            className="mr-2 leading-tight"
                          />
                          <span className="text-gray-700">{examType}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </td>
              ))}
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2">
                <button
                  type="button"
                  onClick={() => setShowExamenDropdown(!showExamenDropdown)}
                  className="bg-blue-500 text-white px-5 py-2 rounded"
                >
                  Examen de la tête :
                </button>
              </td>
              {['sortieExamen', 'premierMoisExamen', 'deuxiemeMoisExamen'].map((key, idx) => (
                <td key={idx} className="border border-gray-400 px-4 py-2">
                  {showExamenDropdown && (
                    <div className="dropdown-content">
                      <ul className="list-disc pl-4">
                        <li>Anomalie du périmètre crânien:</li>
                        {['Microcéphalie', 'Macrocéphalie'].map((examType) => (
                          <div key={examType} className="flex items-center mb-2 ml-4">
                            <input
                              type="checkbox"
                              name={examType}
                              checked={formData[key][examType]}
                              onChange={(e) => handleExamChange(e, key, examType)}
                              className="mr-2 leading-tight"
                            />
                            <span className="text-gray-700">{examType}</span>
                          </div>
                        ))}
                        <li>Anomalie de la fontanelle:</li>
                        {['FontAntfermée', 'Fontanellebombée'].map((examType) => (
                          <div key={examType} className="flex items-center mb-2 ml-4">
                            <input
                              type="checkbox"
                              name={examType}
                              checked={formData[key][examType]}
                              onChange={(e) => handleExamChange(e, key, examType)}
                              className="mr-2 leading-tight"
                            />
                            <span className="text-gray-700">{examType}</span>
                          </div>
                        ))}
                        <li>Anencéphalie:</li>
                        {['Anencéphalie'].map((examType) => (
                          <div key={examType} className="flex items-center mb-2 ml-4">
                            <input
                              type="checkbox"
                              name={examType}
                              checked={formData[key][examType]}
                              onChange={(e) => handleExamChange(e, key, examType)}
                              className="mr-2 leading-tight"
                            />
                            <span className="text-gray-700">{examType}</span>
                          </div>
                        ))}
                      </ul>
                    </div>
                  )}
                </td>
              ))}
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2">
                <button
                  type="button"
                  onClick={() => setShowAbdomenDropdown(!showAbdomenDropdown)}
                  className="bg-blue-500 text-white px-5 py-2 rounded"
                >
                  Examen de l’abdomen :
                </button>
              </td>
              {['ExamenDeLabdomen', 'premierMoisExamen', 'deuxiemeMoisExamen'].map((key, idx) => (
                <td key={idx} className="border border-gray-400 px-4 py-2">
                  {showAbdomenDropdown && (
                    <div className="dropdown-content">
                      {examenDeLabdomen.map((examType) => (
                        <div key={examType} className="flex items-center mb-2">
                          <input
                            type="checkbox"
                            name={examType}
                            checked={formData[key][examType]}
                            onChange={(e) => handleExamChange(e, key, examType)}
                            className="mr-2 leading-tight"
                          />
                          <span className="text-gray-700">{examType}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </td>
              ))}
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2">
                <button
                  type="button"
                  onClick={() => setShowCardioDropdown(!showCardioDropdown)}
                  className="bg-blue-500 text-white px-5 py-2 rounded"
                >
                  Examen cardiovasculaire :
                </button>
              </td>
              {['ExamenCardiovasculaire', 'premierMoisExamen', 'deuxiemeMoisExamen'].map((key, idx) => (
                <td key={idx} className="border border-gray-400 px-4 py-2">
                  {showCardioDropdown && (
                    <div className="dropdown-content">
                      {examenCardiovasculaire.map((examType) => (
                        <div key={examType} className="flex items-center mb-2">
                          <input
                            type="checkbox"
                            name={examType}
                            checked={formData[key][examType]}
                            onChange={(e) => handleExamChange(e, key, examType)}
                            className="mr-2 leading-tight"
                          />
                          <span className="text-gray-700">{examType}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </td>
              ))}
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2">
                <button
                  type="button"
                  onClick={() => setShowRespDropdown(!showRespDropdown)}
                  className="bg-blue-500 text-white px-5 py-2 rounded"
                >
                  Examen respiratoire :
                </button>
              </td>
              {['ExamenRespiratoire', 'premierMoisExamen', 'deuxiemeMoisExamen'].map((key, idx) => (
                <td key={idx} className="border border-gray-400 px-4 py-2">
                  {showRespDropdown && (
                    <div className="dropdown-content">
                      {examenRespiratoire.map((examType) => (
                        <div key={examType} className="flex items-center mb-2">
                          <input
                            type="checkbox"
                            name={examType}
                            checked={formData[key][examType]}
                            onChange={(e) => handleExamChange(e, key, examType)}
                            className="mr-2 leading-tight"
                          />
                          <span className="text-gray-700">{examType}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </td>
              ))}
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2">
                <button
                  type="button"
                  onClick={() => setShowNeuroDropdown(!showNeuroDropdown)}
                  className="bg-blue-500 text-white px-5 py-2 rounded"
                >
                  Examen neurologique :            
                      </button>
              </td>
              {['ExamenRespiratoire', 'premierMoisExamen', 'deuxiemeMoisExamen'].map((key, idx) => (
                <td key={idx} className="border border-gray-400 px-4 py-2">
                  {showNeuroDropdown && (
                    <div className="dropdown-content">
                      {ExamenNeurologique.map((examType) => (
                        <div key={examType} className="flex items-center mb-2">
                          <input
                            type="checkbox"
                            name={examType}
                            checked={formData[key][examType]}
                            onChange={(e) => handleExamChange(e, key, examType)}
                            className="mr-2 leading-tight"
                          />
                          <span className="text-gray-700">{examType}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </td>
              ))}
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2">
                <button
                  type="button"
                  onClick={() => setShowOsteoDropdown(!showOsteoDropdown)}
                  className="bg-blue-500 text-white px-5 py-2 rounded"
                >
                 Examen ostéo-articulaire :          
                      </button>
              </td>
              {['ExamenOstéoArticulaire', 'premierMoisExamen', 'deuxiemeMoisExamen'].map((key, idx) => (
                <td key={idx} className="border border-gray-400 px-4 py-2">
                  {showOsteoDropdown && (
                    <div className="dropdown-content">
                      {ExamenOstéoArticulaire.map((examType) => (
                        <div key={examType} className="flex items-center mb-2">
                          <input
                            type="checkbox"
                            name={examType}
                            checked={formData[key][examType]}
                            onChange={(e) => handleExamChange(e, key, examType)}
                            className="mr-2 leading-tight"
                          />
                          <span className="text-gray-700">{examType}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </td>
              ))}
            </tr>
            {[
              { name: 'Anomalies des organes génitaux externes', type: 'checkbox', keys: ['anomalieOrganeGenitaux1','anomalieOrganeGenitaux2','anomalieOrganeGenitaux3'] },
              { name: 'Signes évocateurs de Trisomie 21', type: 'checkbox', keys: ['trisomie211','trisomie212','trisomie213'] },
              
            ].map((measure, index) => (
              <tr key={index}>
                <td className="border border-gray-400 px-4 py-2">{measure.name}</td>
                {measure.keys.map((key, idx) => (
                  <td key={idx} className="border border-gray-400 px-4 py-2">
                    {measure.type === 'checkbox' ? (
                      
                      <input
                        type="checkbox"
                        name={key}
                        checked={formData[key]}
                        onChange={handleChange}
                        className="mr-2 leading-tight"
                      />
                    ) : null}
                  </td>
                ))}
              </tr>
            ))}
            <tr>
              <td className="border border-gray-400 px-4 py-2">
                <button
                  type="button"
                  onClick={() => setShowOphtaDropdown(!showOphtaDropdown)}
                  className="bg-blue-500  text-white  px-5 py-2 rounded"
                >
                 Examen ophtalmique :         
                      </button>
              </td>
              {['ExamenOstéoArticulaire', 'premierMoisExamen', 'deuxiemeMoisExamen'].map((key, idx) => (
                <td key={idx} className="border border-gray-400 px-4 py-2">
                  {showOphtaDropdown && (
                    <div className="dropdown-content">
                      {ExamenOphtalmique.map((examType) => (
                        <div key={examType} className="flex items-center mb-2">
                          <input
                            type="checkbox"
                            name={examType}
                            checked={formData[key][examType]}
                            onChange={(e) => handleExamChange(e, key, examType)}
                            className="mr-2 leading-tight"
                          />
                          <span className="text-gray-700">{examType}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </td>
              ))}
            </tr>
            {[
              { name: 'Autres malformations congénitales', type: 'checkbox', keys: ['autresMalformations1','autresMalformations2','autresMalformations3'] },
              { name: 'Problème de surdité', type: 'checkbox', keys: ['surdite1','surdite2','surdite3'] },
              { name: 'Dépistage de l’hypothyroïdie', type: 'checkbox', keys: ['depistageHypothyroidie1','depistageHypothyroidie2','depistageHypothyroidie3'] },
              { name: 'Vaccination à jour', type: 'checkbox', keys: ['vaccinationAJour1','vaccinationAJour2','vaccinationAJour3'] },
            ].map((measure, index) => (
              <tr key={index}>
                <td className="border border-gray-400 px-4 py-2">{measure.name}</td>
                {measure.keys.map((key, idx) => (
                  <td key={idx} className="border border-gray-400 px-4 py-2">
                    {measure.type === 'checkbox' ? (
                      <input
                        type="checkbox"
                        name={key}
                        checked={formData[key]}
                        onChange={handleChange}
                        className="mr-2 leading-tight"
                      />
                    ) : null}
                  </td>
                ))}
              </tr>
              ))}
              <tr>
              <td className="border border-gray-400 px-4 py-2">
                
                 Supplémentation en vitamines à jour        
                      
              </td>
              {['ExamenOstéoArticulaire', 'premierMoisExamen', 'deuxiemeMoisExamen'].map((key, idx) => (
                <td key={idx} className="border border-gray-400 px-4 py-2">
                  
                    <div className="dropdown-content">
                      {ExamenSupplem.map((examType) => (
                        <div key={examType} className="flex items-center mb-2">
                          <input
                            type="checkbox"
                            name={examType}
                            checked={formData[key][examType]}
                            onChange={(e) => handleExamChange(e, key, examType)}
                            className="mr-2 leading-tight"
                          />
                          <span className="text-gray-700">{examType}</span>
                        </div>
                      ))}
                    </div>
                  
                </td>
              ))}
            </tr>
              <tr>
              <td className="border border-gray-400 px-4 py-2">
                
              Mode d’alimentation      
                      
              </td>
              {['ExamenOstéoArticulaire', 'premierMoisExamen', 'deuxiemeMoisExamen'].map((key, idx) => (
                <td key={idx} className="border border-gray-400 px-4 py-2">
                  
                    <div className="dropdown-content">
                      {ExamenMode.map((examType) => (
                        <div key={examType} className="flex items-center mb-2">
                          <input
                            type="checkbox"
                            name={examType}
                            checked={formData[key][examType]}
                            onChange={(e) => handleExamChange(e, key, examType)}
                            className="mr-2 leading-tight"
                          />
                          <span className="text-gray-700">{examType}</span>
                        </div>
                      ))}
                    </div>
                  
                </td>
              ))}
            </tr>
            <tr>
          <td className="border border-gray-400 px-4 py-2">
            <button
              type="button"
              onClick={() => setShowDévelopDropdown(!showDévelopDropdown)}
              className="bg-blue-500 text-white px-5 py-2 rounded"
            >
              Développement psychomoteur :
            </button>
          </td>
          {['examenCutaneoMuqueux', 'premierMoisExamen', 'deuxiemeMoisExamen'].map((key, idx) => (
            <td key={idx} className={`border border-gray-400 px-4 py-2 ${idx !== 2 ? 'bg-gray-200' : ''}`}>
              {idx === 2 && showDévelopDropdown && (
                <div className="dropdown-content">
                  {ExamenDévelop.map((examType) => (
                    <div key={examType} className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        name={examType}
                        checked={formData[key][examType] || false}
                        onChange={(e) => handleExamChange(e, key, examType)}
                        className="mr-2 leading-tight"
                      />
                      <span className="text-gray-700">{examType}</span>
                    </div>
                  ))}
                </div>
              )}
            </td>
          ))}
        </tr>
              <tr>
              <td className="border border-gray-400 px-4 py-2">
                
              Problèmes de stimulation- 
              psycho-affective
              </td>
              {['ExamenOstéoArticulaire', 'premierMoisExamen', 'deuxiemeMoisExamen'].map((key, idx) => (
                <td key={idx} className="border border-gray-400 px-4 py-2">
                  
                    <div className="dropdown-content">
                      {ExamenPsycho.map((examType) => (
                        <div key={examType} className="flex items-center mb-2">
                          <input
                            type="checkbox"
                            name={examType}
                            checked={formData[key][examType]}
                            onChange={(e) => handleExamChange(e, key, examType)}
                            className="mr-2 leading-tight"
                          />
                          <span className="text-gray-700">{examType}</span>
                        </div>
                      ))}
                    </div>
                  
                </td>
              ))}
            </tr>
            {[
              { name: 'Conclusion / observation :', type: 'text', keys: ['conclusion1','conclusion2','conclusion3'] },
              
            ].map((measure, index) => (
              <tr key={index}>
                <td className="border border-gray-400 px-4 py-2">{measure.name}</td>
                {measure.keys.map((key, idx) => (
                  <td key={idx} className="border border-gray-400 px-4 py-2">
                    {measure.type === 'checkbox' ? (
                      <input
                        type="checkbox"
                        name={key}
                        checked={formData[key]}
                        onChange={handleChange}
                        className="mr-2 leading-tight"
                      />
                    ) : (
                      <input
                        type={measure.type}
                        name={key}
                        value={measure.type === 'date' && formData[key] instanceof Date ? formData[key].toISOString().split('T')[0] : formData[key]}
                        onChange={handleChange}
                        placeholder={measure.placeholder}
                        className="border rounded px-2 py-1 w-full"
                      />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

      </div>

    </div>      
    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button>

    </form>
  );
  
};

export default MedicalDataForm;



