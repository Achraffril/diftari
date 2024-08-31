import { Link, Outlet, useParams } from "react-router-dom"
import Loading from "../componants/loading/Loading";
import axiosClient from "../axios-client";
import { useStateContext } from "../context/ContextProvider";
import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../AppContext";


const  AdminLayout = (props) =>{

    const {user, token, setUser, setToken, notification} = useStateContext();

    
    if (!token) {
        return <Navigate to="/login"/>
      }

      const { id } = useParams();
      const [admin, setAdmin] = useState(null);
      const [loading, setLoading] = useState(true);

      useEffect(() => {
        axiosClient.get(`/admin/${localStorage.getItem("user")}`)
          .then((response) => {
            setAdmin(response.data);
            setLoading(false);
            console.log(response.data)

          })
          .catch((err) => {
            console.error(err);
            // Handle the error appropriately
          });
      }, [id]);
    

      if (loading) {
        return <Loading /> ;
      }

      if (!admin) {
        return <div>Admin not found</div>;
      }

    const onLogout = ev => {
        ev.preventDefault()

        axiosClient.post('/logout')
          .then(() => {
            setUser({})
            localStorage.removeItem("user")

            setToken(null)
          })
      }
    
    return (
        <>
        <Header onlogout={onLogout} userName={admin.nom}/> 
        <Aside/> 
        <main className="p-4 mx-20 me-0 pt-24 mt-5" id="main">
        <br />
        <br />
        <Outlet context={{ admin }}/>
        </main>
        </>
    )
}
export default AdminLayout;




const Header =(props)=>{
    const isLogin = props.for == "login" ? true :false;
    return (<>
    <div></div>
        <nav className="header-animaiton fixed top-0 left-0 right-0 navbar navbar-expand-lg bg-white shadow-sm z-20">
                        <div className="container">
                            <a className="navbar-brand" href="">
                               <Link to={'/admin'}> <img src="/img/logo2.png" alt="" className="h-12" /></Link>
                            </a>
                            <button className="navbar-toggler border-none outline-none focus:border-none focus:outline:none" type="button" data-bs-toggle="offcanvas" data-bs-target="#defaultLayoutCanvas" aria-controls="defaultLayoutCanvas">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>


                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                            <NavLinks login={isLogin}  onClickLogout={props.onlogout} user_Name={props.userName}     flex="col"/>
                            </div>
                        </div>
                </nav>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="defaultLayoutCanvas" aria-labelledby="offcanvasExampleLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasExampleLabel">{" "}</h5>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <NavLinks login={isLogin} onClickLogout={props.onlogout} user_Name={props.userName} flex="row" />
                    </div>
                </div>
        </>)
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
                                <span className="ms-2 text-secondary-color">Dr. {props.user_Name} </span>
                                </a>
                                </li>

                                {!props.login ? <li className="nav-item ">
                                <Link  className="nav-link flex" href="#">

                                    <button onClick={props.onClickLogout} type="button" class="btn bg-secondary-color">{language == 'FR'?"Se déconnecter" : 'تسجيل الخروج'}</button>
                                </Link>
                                </li> : ""
                                }

                            </ul>

    )
}
const Aside = ()=>{
    return (
        <>
        <aside id="side" class="fixed shadow bg-gray-700 top-0 bg-secondary-color bottom-0 p-2 text-gray-200 left-0 z-10">
            <div class="top pt-20">
                <ul class="p-0 m-0">
                    <Link to="/admin">
                    <li key="menu" class="rounded-sm p-3 p-2 hover:bg-gray-600">
                        
                        <a href="menu.php" class="d-flex flex gap-4 text-gray-100 no-underline hover:text-white	">
                        <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 576 512"> <path fill="#ffffff" d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>

                        </div>
                        <div class="link mobiled">Home</div>
                        </a>
                    </li>
                    </Link>
                    <Link to='/admin/profile'>
                    <li key="menu" class="rounded-sm p-3 p-2 hover:bg-gray-600">

                        <a href="menu.php" class="d-flex flex gap-4 text-gray-100 no-underline hover:text-white	">
                        <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 448 512"><path fill="#ffffff" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg> 
                        </div>
                        <div class="link mobiled">Profile</div>
                        </a>
                    </li>
                    </Link>


                    <Link to="/admin/dashboard">
                        <li key="classes" class="rounded-sm p-3 hover:bg-gray-600 p-2">
                            <a href="classes.php" class="d-flex flex gap-4 text-gray-100 no-underline hover:text-white	">
                            <div class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 512 512"><path fill="#ffffff" d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"/></svg>                        </div>
                            <div class="link mobiled ">Dashboard</div>
                            </a>
                        </li>
                    </Link>
                    
                    
                    <Link to="/admin/demands">
                    <li key="classes" class="rounded-sm p-3 hover:bg-gray-600 p-2">
                        <a href="classes.php" class="d-flex flex gap-4 text-gray-100 no-underline hover:text-white	">
                        <div class="icon">
                                                
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 640 512"><path fill="#ffffff" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0l57.4-43c23.9-59.8 79.7-103.3 146.3-109.8l13.9-10.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176V384c0 35.3 28.7 64 64 64H360.2C335.1 417.6 320 378.5 320 336c0-5.6 .3-11.1 .8-16.6l-26.4 19.8zM640 336a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-76.7-43.3c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L480 353.4l60.7-60.7c6.2-6.2 16.4-6.2 22.6 0z"/></svg>                                                
                            </div>
                        <div class="link mobiled ">Demands</div>
                        </a>
                    </li>
                    </Link>

                   <Link to="/admin/Compts">
                    <li key="classes" class="rounded-sm p-3 hover:bg-gray-600 p-2">
                    <a href="classes.php" class="d-flex flex gap-4 text-gray-100 no-underline hover:text-white	">

                        <div class="d-flex flex gap-4 text-gray-100 no-underline hover:text-white	">
                        <div class="icon">
                                                
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 640 512"><path fill="#ffffff" d="M335.5 4l288 160c15.4 8.6 21 28.1 12.4 43.5s-28.1 21-43.5 12.4L320 68.6 47.5 220c-15.4 8.6-34.9 3-43.5-12.4s-3-34.9 12.4-43.5L304.5 4c9.7-5.4 21.4-5.4 31.1 0zM320 160a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM144 256a40 40 0 1 1 0 80 40 40 0 1 1 0-80zm312 40a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM226.9 491.4L200 441.5V480c0 17.7-14.3 32-32 32H120c-17.7 0-32-14.3-32-32V441.5L61.1 491.4c-6.3 11.7-20.8 16-32.5 9.8s-16-20.8-9.8-32.5l37.9-70.3c15.3-28.5 45.1-46.3 77.5-46.3h19.5c16.3 0 31.9 4.5 45.4 12.6l33.6-62.3c15.3-28.5 45.1-46.3 77.5-46.3h19.5c32.4 0 62.1 17.8 77.5 46.3l33.6 62.3c13.5-8.1 29.1-12.6 45.4-12.6h19.5c32.4 0 62.1 17.8 77.5 46.3l37.9 70.3c6.3 11.7 1.9 26.2-9.8 32.5s-26.2 1.9-32.5-9.8L552 441.5V480c0 17.7-14.3 32-32 32H472c-17.7 0-32-14.3-32-32V441.5l-26.9 49.9c-6.3 11.7-20.8 16-32.5 9.8s-16-20.8-9.8-32.5l36.3-67.5c-1.7-1.7-3.2-3.6-4.3-5.8L376 345.5V400c0 17.7-14.3 32-32 32H296c-17.7 0-32-14.3-32-32V345.5l-26.9 49.9c-1.2 2.2-2.6 4.1-4.3 5.8l36.3 67.5c6.3 11.7 1.9 26.2-9.8 32.5s-26.2 1.9-32.5-9.8z"/></svg>
                        </div>
                        <button class="link mobiled " type="button"  data-bs-target="#compte" aria-controls="compte">Comptes</button>
                        </div>
                      </a>
                    </li>
                    </Link>
                </ul>
            </div>
           
</aside>
        </>
    )
}
