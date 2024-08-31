import { Link } from "react-router-dom";

const LoginLink = (props) =>{
 return (
    <div className=" lg:w-1/2 sm:w-1/1 w-full py-8 px-4">
            <div className="bg-white rounded w-full p-5 shadow " >
                <div className="flex flex-wrap align-items-center justify-evenly">
                    <div className="w-1/2">
                        <img src={props.image} alt="" className="w-full "/>
                    </div>
                    <div className=" flex-1 text-center w-full ">
                        <div className="text-2xl font-semibold my-4  w-full text-primary-color">{props.title}</div>
                       <Link to={`/login/${props.to}`}><button type="button " class="btn bg-primary-color">{props.button}</button></Link>
                    </div>
                </div>
            </div>
    </div>
 )   
}
export default LoginLink;