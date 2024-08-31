import { Link, Outlet } from "react-router-dom";
import { AppContext, LanguageContext } from "../AppContext";
import { useContext } from "react";



export default function IndexMedecin(){
    const { language } = useContext(LanguageContext);
    return(
        
        <>
            <div className="min-h-screen" >
                <Header language={language}/>
                <div className="main mt-32">
                    <Outlet/>
                </div>
            </div>
        </>
    );
}


export const Header = (props) =>{
    const isLogin = props.for == "login" ? true :false;

    
    return (
        <>
        <nav className="header-animaiton fixed top-0 left-0 right-0 navbar navbar-expand-lg bg-white shadow-sm z-10">
                        <div className="container">
                            <a className="navbar-brand" href="">
                               <Link to={'/medecin'}> <img src="/img/logo2.png" alt="" className="h-12" /></Link>
                            </a>
                            <button className="navbar-toggler border-none outline-none focus:border-none focus:outline:none" type="button" data-bs-toggle="offcanvas" data-bs-target="#defaultLayoutCanvas" aria-controls="defaultLayoutCanvas">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>


                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                            <NavLinks login={isLogin} flex="col"/>
                            </div>
                        </div>
                </nav>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="defaultLayoutCanvas" aria-labelledby="offcanvasExampleLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasExampleLabel">{" "}</h5>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <NavLinks login={isLogin} flex="row" />
                    </div>
                </div>
        </>
    )
}
export const NavLinks = (props) => {
   
    const { language, changeLanguage } = useContext(LanguageContext);
    const handleLanguage = (newLanguage) => {
      changeLanguage(newLanguage);
    };
    return (
        <ul className={`navbar-nav ms-auto ${props.flex == 'col' ? "align-items-center" : ""} `}>
                                
                                 <li className="nav-item mt-1 ">
                                <a className="nav-link flex" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-secondary-color">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                <span className="ms-2 text-secondary-color">{language == 'FR'?"Nom-d'utilisateur" : 'إسم المستخدم'}</span>
                                </a>
                                </li>
         
                                {!props.login ? <li className="nav-item ">
                                <a className="nav-link flex" href="#">
                                    <button type="button" class="btn bg-secondary-color">{language == 'FR'?"Se déconnecter" : 'تسجيل الخروج'}</button>
                                </a>
                                </li> : ""
                                }
                                
                            </ul>
    
    )
}