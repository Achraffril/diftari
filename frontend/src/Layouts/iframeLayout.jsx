import { Outlet } from "react-router-dom";

const IframeLayout =()=>{
    return (<>
    <div className="w-screen">
    <Outlet />
    </div>
    </>)
}
export default IframeLayout;