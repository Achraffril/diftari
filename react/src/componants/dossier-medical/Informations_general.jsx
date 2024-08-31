export const General = () =>{
  const dataGeneral = {prenom:"Pre exemple",nom:"Nom exemple",sexe:"Male",adresse:"68 Lot el Maarif ville",groupeSanguin:"A",rhesus:"",structure_sanitaire:"Publique",NSMI:"12548"}
  const demenagements = [{date:'19-04-2024',province:"Province Exemple",etablissement_sanitaire:"Etablissement 1",NSMI:2145},]
return (<>

  <CardTitle text="Données générales"/>
    <form class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label text-gray-500">Prenom:</label>
    <p className="font-semibold">{dataGeneral.prenom}</p>
    <LabelInput label="Prenom" value={dataGeneral.prenom} />

  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label text-gray-500">Nom:</label>
    <p className="font-semibold">{dataGeneral.nom}</p>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label text-gray-500">Groupe sanguin</label>
    <p className="font-semibold">{dataGeneral.groupeSanguin}</p>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label text-gray-500">Rhésus</label>
        <p className="font-semibold">{dataGeneral.rhesus}</p>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label text-gray-500">Structure sanitaire</label>
    <p className="font-semibold">{dataGeneral.structure_sanitaire}</p>

  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label text-gray-500">N°SMI</label>
    <p className="font-semibold">{dataGeneral.NSMI}</p>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label text-gray-500">Sexe</label>
    <p className="font-semibold">Male</p>
    
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label text-gray-500">Adresse</label>
    <p className="font-semibold">68 LOT El MAARIF Ville</p>
  </div>

  <div class="col-12 mb-4">
    <label for="inputAddress" class="form-label text-gray-500">En cas de déménagement</label>
    <table className="text-sm rounded overflow-x-auto">
        <thead className="text-white bg-main-light ">
            <th className="p-2 ">Date de déménagement</th>
            <th className="p-2">Préfecture/province</th>
            <th className="p-2">Etablissement sanitaire </th>
            <th className="p-2">N°SMI</th>
        </thead>
        <tbody className="bg-gray-100">{
            demenagements.map((item)=>{
                return (<>
                <td className="p-2">{item.date}</td>
                <td className="p-2">{item.province}</td>
                <td className="p-2">{item.etablissement_sanitaire}</td>
                <td className="p-2">{item.NSMI}</td>

                </>)
            })
            }</tbody>
    </table>
  </div>
  <div class="col-12">
    <button type="submit" class="btn bg-main-light text-white">Modifier</button>
  </div>
</form>
    </>)
}






  
 
export function Contacts() {

  const people = [
    {
      name: 'Prenom Nom',
      relation: 'Relation familiale',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      tel: '+212 656546819',
    },
    {
        name: 'Prenom Nom',
        relation: 'Relation familiale',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        tel: '+212 656546819',
      },
    
  ];
    return (
        <>
                <CardTitle text="Contacts en cas d'urgence" />

      <ul role="list" className="divide-y divide-gray-100">
        {people.map((person) => (
            <li key={person.relation} className="flex justify-between gap-x-6 py-2">
            <div className="flex min-w-0 gap-x-4">
              <img className="h-7 w-7 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.relation}</p>
              </div>
            </div>
            <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900 flex justify-end">
                <a href={`tel:${person.tel}`}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg></a>

              </p>
              <p className="mt-1 text-xs leading-5 text-gray-500">
                 {person.tel}
                </p>
            </div>
          </li>
        ))}
      </ul>
      <hr className="mt-5"/>
      <div className="p-2  px-0">
      <h6 className="h6 mt-2 text-gray-600">Centre antipoison et de pharmacovigilance </h6>
      <p className="text-gray-500 text-sm p-2 py-0">En cas d’intoxication ou de survenue d’événements indésirables liés aux
médicaments, il faudra les communiquer, par téléphone sur la ligne d’urgence
du centre National Anti poison et de Pharmacovigilance disponible 24H/24 et
7j/7 au 0801 000 180 ou via l’Internet : <a href="www.capm.ma ou www.pharmacies.ma" className="text-main-light">www.capm.ma ou www.pharmacies.ma</a> </p>
      </div>
              </>
    )
  }
  
export const Couverture = ()=>{
  const couvertureData = {
                            types:[
                              {
                                title:"CNOPS",
                                active:true
                              },
                              {
                                title:"CNSS",
                                active:false
                              },
                              {
                                title:"RAMED",
                                active:false
                              },
                              {
                                title:"Autre",
                                active:false
                              },
                              {
                                title:"Aucun",
                                active:false
                              },
                              {
                                title:"Assurance privée",
                                active:false
                              }
                            ],num_affiliation:'0001'
                            
                          }
    return (<>
        <CardTitle text="Couverture medicale"/>
        <div className="flex flex-wrap">
          {couvertureData.types.map((item)=>{
            return (<>
              <label htmlFor={item.title} className="p-2 m-2">
                <input className="text-main-light" type="checkbox" name="" id={item.title} checked={item.active ? true:false} /> {item.title}
              </label>
            </>)
          })}
        </div>
         <LabelInput label="Numéro d'affiliation:" value={couvertureData.num_affiliation}/>

    </>)
}


export const Antecedants = () =>{
  const AntecedantsData = {
    affectations:[
      {maladie:"Hypertension artérielle",date_diagnostic:"12-08-2024",observation:"Le patient présente une pression artérielle systolique constamment supérieure à 140 mmHg et/ou une pression artérielle diastolique constamment supérieure à 90 mmHg lors de multiples consultations. Des mesures de changement de mode de vie et un traitement médicamenteux so."},
      {maladie:"Hypertension artérielle",date_diagnostic:"12-08-2024",observation:"Le patient présente une pression artérielle systolique constamment supérieure à 140 mmHg et/ou une pression artérielle diastolique constamment supérieure à 90 mmHg lors de multiples consultations. Des mesures de changement de mode de vie et un traitement médicamenteux so."},

    ],
    allergies:[{category:"Aliments",type:"certaine"},{category:"Médicaments",type:"suspectée"}]
  }
    return (<>
    <CardTitle text="Antecedents personnels"/>

    <div className="h3 text-gray-600">Affectation au long cours</div>
    <ul>
      {AntecedantsData.affectations.map((item)=>{
        return (
          <>
          <li className="border rounded p-2 mb-4">
              <div className="flex justify-between mb-3">
                <div className="">
                <LabelInput label="maladie :" value={item.maladie}/>
                </div>
                <div>
                <LabelInput label="Date de diagnostic" value={item.date_diagnostic}/>
    
                </div>
              </div>
              
              <div className="">
                <label className="text-gray-500">Observation :</label>
                <p className="text-gray-500">{item.observation}</p>
              </div>
          </li>
          </>
        )
      })}
    </ul>
    <div className="h4 text-gray-600">Allergies</div>
    <table className="w-full w-100 rounded overflow-hidden mt-4">
      <thead className="bg-main-light text-white">
        <th className="p-2">Type</th>
        <th className="p-2 text-center  ">Suspectée</th>
        <th className="p-2 text-center ">Certaine</th>
      </thead>
      <tbody className="">
        {AntecedantsData.allergies.map((item)=>{
          return (<>
          <tr className="border">

          <td className="p-2">{item.category}</td>
          <td className="p-2 border " style={{textAlign:"center"}} >{item.type == "suspectée" ? 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-main-light text-center">
          <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        
          :
          
          ""}</td>
          <td className="p-2 border " style={{textAlign:"center"}} >{item.type == "certaine" ? 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-main-light text-center">
          <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        
          :
          
          ""}</td>
          </tr>
          </>)
        })}
      </tbody>
    </table>
    </>)
}

 


// elements
const CardTitle = ({text})=>{
  return (<>
    <h2 className="h4 text-gray-600 text-main-light">{text}</h2>


  </>)
}

const LabelInput = ({label,value})=>{
  return (<>
  
  <label for="inputAddress" class="form-label text-gray-500">{label}</label>
    <p className="font-semibold">{value}</p>
  </>)
}