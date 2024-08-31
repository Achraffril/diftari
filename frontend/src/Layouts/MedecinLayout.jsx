import { Link, Navigate, Outlet, useParams } from "react-router-dom";
import {  LanguageContext } from "../AppContext";
import { useContext, useEffect, useState } from "react";
import axiosClient from "../axios-client";
import { useStateContext } from "../context/ContextProvider";
import Loading from "../componants/loading/Loading";



export default function IndexMedecin(){
    const { language } = useContext(LanguageContext);
    const {user, token, setUser, setToken, notification} = useStateContext();


    if (!token) {
        // return <Navigate to="/login"/>
      }

      const { id } = useParams();
      const [medecin, setMedecin] = useState({nom:"",});
      const [loading, setLoading] = useState(true);

      useEffect(() => {
        axiosClient.get(`/medecin/${localStorage.getItem("user")}`)
          .then((response) => {
            setMedecin(response.data);
            setLoading(false);

          })
          .catch((err) => {
            console.error(err);
            // Handle the error appropriately
          });
      }, [id]);
    

      if (loading) {
        // return <Loading /> ;
      }

      if (!medecin) {
        // return <div>Medecin not found</div>;
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

    return(

        <>
            <div className="min-h-screen" >
                <Header language={language} onlogout={onLogout} userName={medecin.nom}/>

                <div className="main mt-32">
                    <Outlet context={{ medecin }}/>
                </div>
                {notification &&
                <div className="notification">
            {notification}
          </div>
        }
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
                            <NavLinks login={isLogin} onClickLogout={props.onlogout} user_Name={props.userName} flex="col"/>
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
