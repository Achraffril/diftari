import { Navigate, createBrowserRouter } from "react-router-dom";
import IndexMedecin from "../Layouts/MedecinLayout";
import NotFound from "../componants/NotFound";
import Home from "../views/navigateur/Home";
import HomeMedecin from "../views/medecin-views/HomeMedecin";
import MedecinLoginPatient from "../views/medecin-views/MedecinLoginPatient";

import MedecinDashboard from "../views/medecin-views/dashboard-medecin";
import MedecinHistorique from "../views/medecin-views/historique-medecin";


import IndexPatient from "../Layouts/PatientLayout";
// import * as PatientViews from "../views/patient/all"
import DefaultLayout from "../Layouts/DefaultLayout";
import LoginCard from "../componants/login/LoginForAll";
import LoginLayout from "../Layouts/LoginLayout";
import Guide from "../views/navigateur/guide";
import { InscriptionMedecin, InscriptionPatient } from "../views/navigateur/inscription";
import Contact from "../views/navigateur/contact";
import IframeLayout from "../Layouts/iframeLayout";
import ConsultationMedecin from "../views/medecin-views/Consultation";
import MedecinProfile from "../views/medecin-views/Profile-medecin";
import MedecinPreferences from "../views/medecin-views/preferences-medecin";
import IndexMedecinPatient from "../Layouts/MedecinPatientLayout";
import HomeMedecinPatient from "../views/medecin-patient-views/HomeMedecinPatient";
import ProfileMedecinPatient from "../views/medecin-patient-views/ProfileMedecinPatient";
import VaccinationMedecinPatient from "../views/medecin-patient-views/VaccinationMedecinPatient";
import SuplimentationMedPatient from "../views/medecin-patient-views/SuplimentationMedPatient";
import ExamanSestimatiqueMedPatient from "../views/medecin-patient-views/ExamanSestimatiqueMedPatient";


const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout/>,
        children:[
            {
                path: '/',
                element: <Navigate to={'/home'}/>
            },
            {
                path: '/home',
                element: <Home/>
            },
            {
                path: '/guide',
                element: <Guide/>
            },
            {
                path: '/contact',
                element: <Contact />
            },
            
           
        ]
    },


    
    {
        path: '/login',
        element: <LoginLayout/>,
        children:[
            {
                path: '/login',
                element: <Navigate to={'/home'}/>
            },
            
            {
                path: '/login/patient',
                element: <LoginCard action="/inscription/patient" image="patient_connect.png" logo="logo.png" direction={true} inscription={true} theme="primary" />

            },
            {
                path: '/login/medecin',
                element: <LoginCard action="/inscription/medecin" image="medecin_connect.png" logo="logo.png" direction={true} inscription={true} theme="primary" />

            },
            {
                path: '/login/admin',
                element: <LoginCard action="" image="admin_login.png" logo="logo2.png" direction={true} inscription={false} theme="secondary" />
            },
           
        ]
    },
    {
        path: '/inscription',
        element: <LoginLayout/>,
        children:[
            {
                path: '/inscription',
                element: <Navigate to={'/home'}/>
            },
            
            {
                path: '/inscription/medecin',
                element: <InscriptionMedecin/>
            },
            
            {
                path: '/inscription/patient',
                element: <InscriptionPatient/>

            }
           
        ]
    },
    {
        path: '/medecin',
        element: <IndexMedecin/>,
        children:[
            {
                path: '/medecin',
                element: <Navigate to={'/medecin/home-medecin'}/>
            },
            {
                path: '/medecin/home-medecin',
                element: <HomeMedecin/>
            },
            {
                path: '/medecin/profile',
                element: <MedecinProfile/>
            },

            {
                path: '/medecin/patient',
                element: <MedecinLoginPatient/>,
                children:[
                    {
                        path:'/medecin/patient/home',
                        element: <dfq/>,
                    },
                ]
            },
            
            {
                path: '/medecin/dashboard',
                element: <MedecinDashboard/>
            },
            {
                path: '/medecin/preferences',
                element: <MedecinPreferences/>
            }
            ,
            {
                path: '/medecin/historique',
                element: <MedecinHistorique />
            },
            {
                path: '/medecin/consultation',
                element: <ConsultationMedecin />
            }
                
            
        ]
    },
    {
        path: '/medecin-patient',
        element: <IndexMedecinPatient/>,
        children:[ 
            {
                path: '/medecin-patient',
                element: <Navigate to={'/medecin-patient/home'}/>
            },
            {
                path: '/medecin-patient/home',
                element: <HomeMedecinPatient/>
            },
            {
                path: '/medecin-patient/profile',
                element: <ProfileMedecinPatient/>
            },
            {
                path: '/medecin-patient/examen-systematique',
                element: <ExamanSestimatiqueMedPatient/>
            },
            {
                path: '/medecin-patient/vaccination',
                element: <VaccinationMedecinPatient/>
            },
            {
                path: '/medecin-patient/supplementation',
                element: <SuplimentationMedPatient/>
            },
           ]
    },
    {
        path: '/iframe',
        element: <IframeLayout/>,
        children:[
            {
                path: '/iframe/view/patient/login',
                element: <LoginCard action="" image="patient_connect.png" logo="logo.png" direction={true} inscription={true} theme="primary" />
            },
            {
                path: '/iframe/view/patient/',
                element: <Guide/>
            },
            {
                path: '/iframe/view/patient/',
                element: <Contact />
            },
            
           
        ]
    },
    // {
    //     path: '/patient',
    //     element: <IndexPatient/>,
    //     children:[
    //         {
    //             path: '/patient',
    //             element: <Navigate to={'/patient/home'}/>
    //         },
    //         {
    //             path: '/patient/login',
    //             element: <PatientViews.P_Login/>
    //         },
    //         {
    //             path: '/patient/profile',
    //             element: <PatientViews.P_Profile/>
    //         },
    //         {
    //             path: '/patient/home',
    //             element: <PatientViews.P_Home/>
    //         },
    //         {
    //             path: '/patient/examens',
    //             element: <PatientViews.P_Examens/>
    //         }
    //         ,
    //         {
    //             path: '/patient/vaccination',
    //             element: <PatientViews.P_Vaccination />
    //         }   
    //         ,
    //         {
    //             path: '/patient/courbes',
    //             element: <PatientViews.P_Courbes />
    //         }
                
    //         ,
    //         {
    //             path: '/patient/hospitalisation',
    //             element: <PatientViews.P_Hospitalisation />
    //         }
                
    //         ,
    //         {
    //             path: '/patient/preferences',
    //             element: <PatientViews.P_Preferences />
    //         }
                
    //         ,
    //         {
    //             path: '/patient/famille',
    //             element: <PatientViews.P_Famille />
    //         }
    //         ,
    //         {
    //             path: '/patient/informations-general',
    //             element: <PatientViews.P_Informations />
    //         }
                
    //         ,
    //         {
    //             path: '/patient/consultations',
    //             element: <PatientViews.P_Consultations />
    //         }
                
            
    //     ]
    // },
    {
        path: '*',
        element: <NotFound/>
    },
]);

export default router;