import { Link, useNavigate } from "react-router-dom";


export default function NotFound(){
    const navigate = useNavigate();

    const handleBack = () =>{
        navigate(-1);
    }

    return(
        <>

            <main class="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8 bg-white  h-screen">
            <div class="text-center">
                <img src="/img/logo.png" alt="" className="h-20 m-auto" />
                <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">404 - Page not found</h1>
                <p class="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
                <div class="mt-10 flex items-center justify-center gap-x-6">
                <button onClick={handleBack} class="rounded-md bg-primary-color px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-color">Go back</button>
                <Link to="/contact" class="text-sm font-semibold text-gray-900">Contact support <span aria-hidden="true">&rarr;</span></Link>
                </div>
            </div>
            </main>

        </>
    );

}