import { Link, Outlet } from "react-router-dom";
import { AppContext, LanguageContext } from "../AppContext";
import { useContext } from "react";



export default function IndexMedecinPatient(){
    const { language } = useContext(LanguageContext);
    return(
        
        <>
            <div className="min-h-screen" >
                <Header language={language}/>
                <Aside/> 
                <div className="p-4 mx-32 me-0 pt-24 mt-20" > 
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
        <nav className="header-animaiton fixed top-0 left-0 right-0 navbar navbar-expand-lg bg-white shadow-sm z-20">
                        <div className="container">
                            <a className="navbar-brand" href="">
                               <Link to={'/medecin-patient'}> <img src="/img/logo2.png" alt="" className="h-12" /></Link>
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
                                
                                 {/* <li className="nav-item mt-1 ">
                                <a className="nav-link flex" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-secondary-color">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                <span className="ms-2 text-secondary-color">{language == 'FR'?"Nom-de patient" : 'إسم المستخدم'}</span>
                                </a>
                                </li> */}
         
                                {!props.login ? <li className="nav-item ">
                                <a className="nav-link flex" href="#">
                                    <button type="button" class="btn bg-secondary-color">{language == 'FR'?"Sortie" : 'تسجيل الخروج'}</button>
                                </a>
                                </li> : ""
                                }
                                
                            </ul>
    
    )
}
const Aside = ()=>{
    return (
        <>
        <aside id="side" class="fixed shadow bg-secondary-color top-0 bottom-0 p-2 text-gray-200 left-0 z-10">
            <div class="top pt-20">
                <ul class="p-0 m-0">
                    <Link to="/medecin-patient">
                    <li key="menu" class="rounded-sm p-3 p-2 hover:bg-blue-400">
                        
                        <a href="menu.php" class="d-flex flex gap-4 text-gray-100 no-underline hover:text-white	" >
                        <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"  className="h-6 w-6">
                          <path fill="#ffffff" d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
                        </svg>


                        </div>
                        <div class="link mobiled">ACCUEIL</div>
                        </a>
                    </li>
                    </Link>
                    <Link to='/medecin-patient/profile'>
                    <li key="menu" class="rounded-sm p-3 p-2 hover:bg-blue-400">
                        
                        <a href="menu.php" class="d-flex flex gap-4 text-gray-100 no-underline hover:text-white	">
                        <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 448 512"><path fill="#ffffff" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg> 



                        </div>
                        <div class="link mobiled">PROFILE</div>
                        </a>
                    </li>
                    </Link>


                    <Link to="/medecin-patient/examen-systematique">
                        <li key="classes" class="rounded-sm p-3 hover:bg-blue-400 p-2">
                            <a href="classes.php" class="d-flex flex gap-4 text-gray-100 no-underline hover:text-white	">
                            <div class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-6 w-6">
                               <path fill="#ffffff" d="M96 0C60.7 0 32 28.7 32 64V288H144c6.1 0 11.6 3.4 14.3 8.8L176 332.2l49.7-99.4c2.7-5.4 8.3-8.8 14.3-8.8s11.6 3.4 14.3 8.8L281.9 288H352c8.8 0 16 7.2 16 16s-7.2 16-16 16H272c-6.1 0-11.6-3.4-14.3-8.8L240 275.8l-49.7 99.4c-2.7 5.4-8.3 8.8-14.3 8.8s-11.6-3.4-14.3-8.8L134.1 320H32V448c0 35.3 28.7 64 64 64H352c35.3 0 64-28.7 64-64V160H288c-17.7 0-32-14.3-32-32V0H96zM288 0V128H416L288 0z"/>
                            </svg>    
                            </div>                      
                              <div class="link mobiled ">EXAMENS SYSTEMATIQUES</div>
                            </a>
                        </li>
                    </Link>
                    
                    
                    <Link to="/medecin-patient/vaccination">
                    <li key="classes" class="rounded-sm p-3 hover:bg-blue-400 p-2">
                        <a href="classes.php" class="d-flex flex gap-4 text-gray-100 no-underline hover:text-white	">
                        <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-6 w-6">
                            <path fill="#ffffff" d="M441 7l32 32 32 32c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-15-15L417.9 128l55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-72-72L295 73c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l55 55L422.1 56 407 41c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0zM210.3 155.7l61.1-61.1c.3 .3 .6 .7 1 1l16 16 56 56 56 56 16 16c.3 .3 .6 .6 1 1l-191 191c-10.5 10.5-24.7 16.4-39.6 16.4H97.9L41 505c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l57-57V325.3c0-14.9 5.9-29.1 16.4-39.6l43.3-43.3 57 57c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-57-57 41.4-41.4 57 57c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-57-57z"/>
                        </svg>

                            </div>
                        <div class="link mobiled ">VACCINATION</div>
                        </a>
                    </li>
                    </Link>
                     
                    <Link to="/medecin-patient/supplementation">
                    <li key="classes" class="rounded-sm p-3 hover:bg-blue-400 p-2">
                        <a href="classes.php" class="d-flex flex gap-4 text-gray-100 no-underline hover:text-white	">
                        <div class="icon">
                                                
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-6 w-6">
                           <path fill="#ffffff" d="M112 96c-26.5 0-48 21.5-48 48V256h96V144c0-26.5-21.5-48-48-48zM0 144C0 82.1 50.1 32 112 32s112 50.1 112 112V368c0 61.9-50.1 112-112 112S0 429.9 0 368V144zM554.9 399.4c-7.1 12.3-23.7 13.1-33.8 3.1L333.5 214.9c-10-10-9.3-26.7 3.1-33.8C360 167.7 387.1 160 416 160c88.4 0 160 71.6 160 160c0 28.9-7.7 56-21.1 79.4zm-59.5 59.5C472 472.3 444.9 480 416 480c-88.4 0-160-71.6-160-160c0-28.9 7.7-56 21.1-79.4c7.1-12.3 23.7-13.1 33.8-3.1L498.5 425.1c10 10 9.3 26.7-3.1 33.8z"/>
                        </svg>

                            </div>
                        <div class="link mobiled ">SUPPLEMENTATION EN 
VITAMINES</div>
                        </a>
                    </li>
                    </Link>

                    <Link to="/dashboard/gallery">
                    <li key="classes" class="rounded-sm p-3 hover:bg-blue-400 p-2">
                        <a href="classes.php" class="d-flex flex gap-4 text-gray-100 no-underline hover:text-white	">
                        <div class="icon">
                                                
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-6 w-6">
                           <path fill="#ffffff" d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"/>
                        </svg>

                            </div>
                        <div class="link mobiled ">COURBES DE CROISSANCE</div>
                        </a>
                    </li>
                    </Link>

                </ul>
            </div>
           
</aside>
        </>
    )
}