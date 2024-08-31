import { Link, Outlet } from "react-router-dom";


export default function IndexPatient(){
    return(
        <>
           <Header></Header>
           <div className="main p-4 ">
           <Outlet /> 
           </div>    
                
                
                
                <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div>
                    Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                    </div>
                    <div class="dropdown mt-3">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                        Dropdown button
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </div>
                </div>
                </div>
        </>
    );
}

const Header  = ()=>{
    return (<>
    
    <header className="flex justify-between align-items-center bg-white p-2 ">
    <button className="text-main-light" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                    </svg>

    </button>
        <nav className="logo flex">
            <div className="img">
                <img src="/6.png" alt="" class="w-10 h-10 rounded"/>
            </div>
            </nav>
        <nav className="profile">
            <div class="dropdown">
                <button class="text-main-light flex gap-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>

                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Profile</a></li>
                    <li><a class="dropdown-item" href="#">Préferences</a></li>
                    <li><a class="dropdown-item" href="#">Se Déconnecter</a></li>
                </ul>
            </div>
        </nav>
    </header>




    <ul class="dropdown-menu">
                                    
                                </ul>



            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel"></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul>
                        <li className="p-3 text-gray-700 hover-text-main-light" ><Link class="dropdown-item"  to={'/patient/informations-general'} data-bs-dismiss="offcanvas" aria-label="Close" ><i class="fi fi-tr-house-chimney-medical"></i> Données générales</Link></li>
                        <li className="p-3 text-gray-700 hover-text-main-light" ><Link class="dropdown-item"  to={'/patient/examens'} data-bs-dismiss="offcanvas" aria-label="Close" >Examens systématiques</Link></li>
                        <li className="p-3 text-gray-700 hover-text-main-light" ><Link class="dropdown-item"  to={'/patient/vaccination'} data-bs-dismiss="offcanvas" aria-label="Close" >Vaccination et supplémentation </Link></li>
                        <li className="p-3 text-gray-700 hover-text-main-light" ><Link class="dropdown-item"  to={'/patient/consultations'} data-bs-dismiss="offcanvas" aria-label="Close" >Consultations médicales</Link></li>
                        <li className="p-3 text-gray-700 hover-text-main-light" ><Link class="dropdown-item"  to={'/patient/hospitalisation'} data-bs-dismiss="offcanvas" aria-label="Close" >Hospitalisations</Link></li>
                        <li className="p-3 text-gray-700 hover-text-main-light" ><Link class="dropdown-item"  to={'/patient/courbes'} data-bs-dismiss="offcanvas" aria-label="Close" >Courbes de croissance</Link></li>
                    </ul>
                </div>
            </div>                                
    </>)
}