import { Link, Outlet } from "react-router-dom";
import { Header, NavLinks } from "./DefaultLayout";


export default function LoginLayout(){
    return(
        <>
            <div>
                <Header for="login"/>
                <div className="main mt-24">
                    <Outlet/>
                </div>
            </div>
        </>
    );
}


