import { createRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";
import axiosClient from "../../axios-client";

const LoginCard = (props) =>{
    const navigate = useNavigate()
    const emailRef = createRef() 
    const passwordRef = createRef()
    const { setUser, setToken } = useStateContext()
    const [message, setMessage] = useState(null)
  
    const onSubmit = ev => {
      ev.preventDefault()
  
      const payload = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }
      axiosClient.post(`${props.url}`, payload)

        .then(({data}) => {
          setUser(data.user)
          localStorage.setItem("user" , data.user.id)
          setToken(data.token);
          navigate(`${props.route}`)
       
        })
        .catch((err) => {
          const response = err.response;
          if (response && response.status === 422) {
            setMessage(response.data.message)
          }
        })
    }
    
    return (
        <>
        <div className="">
            <div className={`shadow-xl gap-5 rounded-3xl bg-white w-3/4 m-auto my-5 min-h-full  justify-center px-6 py-12 lg:px-8 flex flex-wrap row${ !props.direction ? "flex-row-reverse" : "" }`}>
                <div className="col-md-6">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm " >
            <img
                className="mx-auto h-16 w-auto object-cover"
                src={`/img/${props.logo}`}
                alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            </h2>
                </div>
                {message &&
            <div className="alert">
              <p>{message}</p>
            </div>
          }
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={onSubmit} action={props.action} method="POST">
                <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Votre Identifiant
                </label>
                <div className="mt-2">
                    <input
                    id="email"
                    name="email"
                    ref={emailRef}
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="ID"
                    className=" bg-gray-100 px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none "
                    />
                </div>
                </div>

                <div>
                <div className="flex items-center justify-between">
                    <label htmlFor="password"  className="block text-sm font-medium leading-6 text-gray-900">
                    Mot de passe
                    </label>
                    <div className="text-sm">
                    <a href="#" className={`font-semibold text-${props.theme}-color `}>
                        Mots passe oubliée?
                    </a>
                    </div>
                </div>
                <div className="mt-2">
                    <input
                    id="password"
                    name="password"
                    ref={passwordRef}
                    type="password"
                    autoComplete="current-password"
                    required
                    placeholder="Votre mot de passe"
                    className=" bg-gray-100 px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6  outline-none "
                    />
                </div>
                </div>

                <div>
                <button
                    type="submit"
                    className={`flex w-full justify-center rounded-md bg-${props.theme}-color px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-color`}
                >
                    Se connecter
                </button>
                </div>
            </form>

            {props.inscription?
            <p className="mt-10 text-center text-sm text-gray-500">
            Vous n'avez pas de compte ?{' '}
                <Link to={props.action}>
                <a className={`font-semibold leading-6 text-${props.theme}-color `}>
                S'inscrire 
                </a>
                </Link>
            </p>
            : 
            ""}
                </div>
                </div>
                <div className="col-md-4 image items-center flex align-items-center ">
                    <img src={`/img/${props.image}`} alt="image" className="w-full" />
                </div>
            </div>
        </div>
        </>
    )
}
export default LoginCard;