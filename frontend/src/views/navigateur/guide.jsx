import { useContext } from "react";
import { LanguageContext } from "../../AppContext";


const Guide = ()=>{
    return (<>
    <div className="mt-16 pt-2 ">
    <AsideGuide />
    </div>
    </>)
}
export default Guide;

const AsideGuide = ()=>{
  const { language, changeLanguage } = useContext(LanguageContext);

  return (<>
  <main className="relative grid grid-cols-4 gap-4 border ">
  <div className="col-span-1 hidden sm:block ">
   <div className="bg-secondary-color fixed min-h-screen">
   <ul className="">
    <li><Collapse title="Présentation de l'Application"           id="1" list={["Description générale de l'application et de ses objectifs.","Pourquoi l'application est-elle utile pour les utilisateurs ?"]}/></li> 
    <li><Collapse title="Inscription et Connexion"                id="2" list={['contact','guide']}/></li>
    <li><Collapse title="Interface Utilisateur"                   id="3" list={['contact','guide']}/></li>
    <li><Collapse title="Fonctionnalités Principales"             id="4" list={['contact','guide']}/></li>
    <li><Collapse title="Gestion des Données Personnelles"        id="5" list={['contact','guide']}/></li>
    <li><Collapse title="Assistance et Support"                   id="6" list={['contact','guide']}/></li>
    <li><Collapse title="Mises à Jour et Améliorations Futures"   id="7" list={['contact','guide']}/></li>
    </ul> 
   </div>
    </div> 
    <section  className="col-span-4 sm:col-span-3 p-4">
      <h1 className="h1 font-bold text-secondary-color">Guide utilisatuer</h1>
      <p className="text-gray-700">Bienvenue dans notre guide utilisateur pour l'application web de santé ! Notre application a été spécialement conçue pour vous aider à prendre en charge votre santé de manière proactive et efficace, en vous offrant un accès facile à une gamme de fonctionnalités puissantes. Que vous recherchiez des outils de suivi des symptômes, des ressources médicales fiables ou un soutien communautaire, notre application est là pour vous accompagner à chaque étape de votre parcours de santé. Nous sommes ravis de vous présenter les fonctionnalités de notre application et de vous aider à en tirer le meilleur parti pour votre bien-être.</p>
      <Section>
        <h2 className="h3 text-gray-800">Présentation de l'Application</h2>
        <div className="sm:flex gap-4">
        <p>Normalement, les médecins et les individus concernés sont confrontés à certaines 
        difficultés, Pour les médecins, il est difficile de suivre l'état de santé de nombreux 
        patients et certaines informations nécessaires peuvent être détruites. Il peut s'avérer
        impossible de suivre l'état de santé d'un individu si son dossier médical est détruit ou 
        si le patient est être suivi par un autre médecin.
        </p>
        <div className="icon min-w-48">
          <img src="/logo.png" alt="" className="rounded w-full h-auto" />
        </div>
        </div>
        <br />
        <p>Le projet vise à surveiller la santé individuelle et à simplifier le travail des médecins en 
        offrant un dossier médical numérique. Il enregistre les admissions hospitalières ainsi 
        que la collecte des résultats des tests médicaux effectués dans les laboratoires 
        d'analyse, parmi d'autres fonctionnalités</p>
        <ul className="list-disc p-4">
          <li>
            <p className="">Fiche santé spécifique pour les enfants et les femmes enceintes et une fiche 
              santé générale pour les autres</p>
          </li>
          <li>
            <p>Le médecin établit le dossier médical de l'enfant immédiatement après sa 
            naissance, et seules les personnes autorisées, à savoir les parents et les 
            médecins chargés de la surveillance de la santé de l'enfant, ont accès aux 
            informations contenues dans ce dossier.Le secrétaire de l'hôpital enregistre 
            chaque admission à l'hôpital.</p>
          </li>
          <li>Suivi de l'état de santé des patients atteints de maladies chroniques
          </li>
          <li>
          Collecte des résultats des tests médicaux effectués dans les 
          laboratoires d'analyse.

          </li>
        </ul>
        <br />
        <p>
        L'objectif du projet est de développer un système de gestion de la santé numérique
complet, simplifiant la surveillance de la santé individuelle, l'enregistrement des
admissions hospitalières, l'intégration des résultats de tests médicaux, le suivi des
maladies chroniques, et assurant un contrôle d'accès sécurisé aux dossiers de santé.
L'objectif global est d'améliorer l'efficacité des soins de santé et la qualité des
services médicaux pour les individus et les professionnels de la santé
        </p>
      </Section>
      <Section>
        <h2 className="h3 text-gray-800">Inscription et Connexion</h2>
        <p>Pour commencer à utiliser notre application, vous devez d'abord créer un compte utilisateur. Le processus d'inscription est simple et ne prend que quelques instants. Vous devrez fournir des informations de base telles que votre nom, votre adresse e-mail et un mot de passe sécurisé. Une fois votre compte créé, vous pourrez vous connecter à tout moment en utilisant vos identifiants. La connexion à votre compte est sécurisée et protège vos données personnelles contre tout accès non autorisé.</p>
        <div className="py-5">
          <iframe src="http://localhost:3000/iframe/view/patient/login" frameborder="0" className="w-100 h-screen border rounded" >
          </iframe>
        </div>
      </Section>
      <Section>
        <h2 className="h3 text-gray-800">Interface Utilisateur</h2>
        <p>L'interface utilisateur de notre application a été soigneusement conçue pour être intuitive et conviviale. Dès que vous vous connectez, vous serez accueilli par un tableau de bord clair et organisé qui vous permettra d'accéder facilement à toutes les fonctionnalités principales. Des menus bien structurés et des boutons explicites vous guideront à travers l'application, vous permettant ainsi de naviguer sans effort et de trouver ce dont vous avez besoin en un clin d'œil.</p>
      </Section>
      <Section>
        <h2 className="h3 text-gray-800">Fonctionnalités Principales</h2>
        <p>Notre application offre une gamme complète de fonctionnalités pour répondre à vos besoins de santé. Parmi celles-ci, vous trouverez :</p>
        <ul className="list-disc">
        Suivi des symptômes : Enregistrez et suivez vos symptômes quotidiens pour mieux comprendre votre santé.
        Ressources médicales : Accédez à une vaste bibliothèque de ressources médicales fiables pour obtenir des informations précieuses sur les conditions médicales, les traitements et plus encore.
        Agenda des rendez-vous : Organisez facilement vos rendez-vous médicaux et recevez des rappels pour ne jamais manquer une consultation.
        Communauté de soutien : Connectez-vous avec d'autres utilisateurs pour partager des conseils, des expériences et du soutien mutuel dans un environnement sécurisé et respectueux.
       </ul>
      </Section>

    
    </section>
  </main>
  </>)
}
const Collapse = ({title,id,list})=>{
    return (<>
        
  <button class="text-start px-4 py-3 focus:font-bold focus:text-bold" type="button" data-bs-toggle="collapse" data-bs-target={`#${id}`} aria-expanded="false" aria-controls={`${id}`}>
    {title}
  </button>
    <div class="collapse p-0 m-0" id={`${id}`}>
  <div class="">
    <ol className="px-4 bg-gray-100 w-full p-2">
    {list.map((item)=>{
        return (<>
        <li className="px-2 text-secondary-color truncate w-64"><a href={`#${item}`}>{item}</a></li>
        </>)
    })}
    </ol>
  </div>
</div>
    </>)
}

const Section = (props)=>{
  return (<>
  <div className="bg-white p-4 rounded my-5 shadow-sm">
    {props.children}
  </div>
  </>)
}