import { Link, Outlet } from "react-router-dom";
import { LanguageContext } from "../AppContext";
import { useContext, useEffect, useState } from "react";
import Scroll from 'react-scroll'
const ScrollLink = Scroll.ScrollLink

export default function DefaultLayout(){
    // const { language } = useContext(LanguageContext);
    const savedLanguage = localStorage.getItem('language');


    return(
        <>
            <div>
                <Header />
                <div className="main mt-18">
                    <Outlet/>
                </div>
                <Footer />
            </div>
        </>
    );
}


export const NavLinks = (props)=>{
    // language api
    const { language, changeLanguage } = useContext(LanguageContext);
    const handleLanguage = (newLanguage) => {
      changeLanguage(newLanguage);
    };
    return (
        <ul className={`navbar-nav ms-auto ${props.flex == 'col' ? "align-items-center" : ""} `}>
                                
                                {!props.login ? <li className="nav-item mt-1 ">
                                <Link to='/guide'>
                                <a className="nav-link flex" href="">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-primary-color">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                                    </svg>


                                <span className="ms-2 text-primary-color">{language == 'FR'?"Guide" : 'التوجيهات'}</span>
                                </a>
                                </Link>
                                </li>: ""}
                                <li className="nav-item mt-1 dropdown">
                                    <a className="nav-link flex " aria-current="page" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-primary-color ">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                                        </svg>

                                        <span className="ms-2 text-primary-color">{language == 'FR'?"Langue" : 'اللغة'}</span>


                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" onClick={()=>handleLanguage('FR')}>Français</a></li>
                                        <li><a class="dropdown-item" onClick={()=>handleLanguage('AR')}>العربية</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item mt-1 ">
                                <Link to="/contact">
                                <a className="nav-link flex" >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-primary-color">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                    </svg>

                                <span className="ms-2 text-primary-color">{language == 'FR'?"Contactez-nous" : 'اتصل بنا'}</span>
                                </a>
                                </Link>
                                </li>


                                
                                {!props.login ? <li className="nav-item ">
                                <ScrollLink 
                                to="example-destination" 
                                spy={true} 
                                smooth={true} 
                                duration={500} 
                                className='some-class' 
                                activeClass='some-active-class'
                                >
                                <a className="nav-link flex" >
                                    <button type="button" class="btn bg-primary-color">{language == 'FR'?"Se connecter" : 'تسجيل الدخول'}</button>
                                </a>
                                </ScrollLink>
                                </li>: ""
                                }
                                
                            </ul>
    
    )
}

export const Header = (props) =>{

    const isLogin = props.for == "login" ? true :false;

    
    return (
        <>
        <nav className="header-animaiton fixed top-0 left-0 right-0 z-10 navbar navbar-expand-lg bg-white shadow-sm">
                        <div className="container">
                            <a className="navbar-brand" href="">
                               <Link to={'/home'}> <img src="/img/logo.png" alt="" className="h-12" /></Link>
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
export const Footer = () =>{
    const { language, changeLanguage } = useContext(LanguageContext);
    return (<>
    
    <footer class="bg-white z-10 relative">
    <div class="max-w-screen-xl px-4 pt-14 pb-3 mx-auto sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div class="">
        <img src="/img/logo.png" class="h-16 " alt="logo" />
            <p class="max-w-sm text-sm text-gray-600  ">
            {/* Prioriser votre santé et votre sécurité, Diftari offre des ressources et un soutien de confiance pour votre bien-être. */}
            </p>
        </div>
        <div class="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-2">
            <div class="">
            <p class="font-medium text-primary-color">
                Liens
            </p>
            <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a class="hover:opacity-75" href> {language == 'FR' ? " À propos" : 'معلومات عنا'}  </a>
                <a class="hover:opacity-75" href> {language == 'FR' ? " Guide" : 'المرشد'}  </a>
                <a class="hover:opacity-75" href> {language == 'FR' ? " Contactez-nous" : 'اتصل بنا '}</a>
            </nav>
            </div>
            {/* <div>
            <p class="font-medium text-primary-color">
                Helpful Links
            </p>
            <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a class="hover:opacity-75" href> Contact </a>
                <a class="hover:opacity-75" href> FAQs </a>
                <a class="hover:opacity-75" href> Live Chat </a>
            </nav>
            </div> */}
            <div class="" >
            <p class="font-medium text-primary-color"> {language == 'FR' ? "Télechager" : 'تحميل التطبيق'} </p>
            <nav class="flex flex-col mt-4 text-sm text-gray-500">
            <div class="flex justify-center ">
                <p></p>
                <div class="flex items-center border w-auto rounded-lg px-2 w-52 mx-2">
                    <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" class="w-5 md:w-4 "/>
                    <div class="text-left ml-3">
                        <p class='text-xs text-dark-200'> {language == 'FR' ? "Télechager" : 'تحميل التطبيق'} </p>
                        <p class="text-sm md:text-sm font-semibold text-gray-900"> Google Play Store </p>
                    </div>
                </div>
                <div class="flex items-center border w-auto rounded-lg px-4 py-2 w-44 mx-2">
                    <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" class="w-5 md:w-4  mr-2"/>
                    <div class="text-left">
                        <p class='text-xs text-dark-200'> {language == 'FR' ? "Télechager" : 'تحميل التطبيق'} </p>
                        <p class="text-sm md:text-sm font-semibold text-gray-900"> Apple Store </p>
                    </div>
                </div>
            </div>
            </nav>
            </div>
        </div>
        </div>
        <p class="mt-16 text-xs text-gray-800 text-center">
        © Group GAD-2F
        </p>
    </div>
    </footer>
    </>)
}