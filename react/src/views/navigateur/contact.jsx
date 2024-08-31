import { useContext } from "react";
import { LanguageContext } from "../../AppContext";


const Contact = ()=>{
    const { language, changeLanguage } = useContext(LanguageContext);

    return (<>
    <section class="dark:bg-gray-900 mt-16 py-20 ">
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md  shadow bg-white rounded-3xl">
            <h2 class="mb-4 text-4xl tracking-tight font-semibold text-center text-primary-color dark:text-white">Contactez-nous </h2>
            <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Vous rencontrez un problème technique ? Vous souhaitez envoyer des commentaires sur une fonctionnalité bêta ? Vous avez besoin de détails sur notre plan d'affaires ? Faites-le nous savoir !</p>
            <form action="" class="space-y-8">
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Votre adresse email</label>
                    <input type="email" id="email" 
                    className="outline-primary block px-2 w-full rounded-md outline-none border-0 py-1.5 text-gray-900 shadow-sm bg-gray-10  sm:text-sm sm:leading-6"                placeholder="nom@exemple.com" required />
                </div>
                <div>
                    <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sujet</label>
                    <input type="text" id="subject" 
                    className="outline-primary block px-2 w-full rounded-md outline-none border-0 py-1.5 text-gray-900 shadow-sm bg-gray-10  sm:text-sm sm:leading-6"                    placeholder="Votre message" required />
                </div>
                <div class="sm:col-span-2">
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Votre messsage</label>
                    <textarea id="message" rows="6" 
                    className="outline-primary block px-2 w-full rounded-md outline-none border-0 py-1.5 text-gray-900 shadow-sm bg-gray-10  sm:text-sm sm:leading-6"                    placeholder="Laissez un commentaire..."></textarea>
                </div>
                <div className="flex justify-end" >
                <button type="submit" 
                  className="rounded-md bg-primary-color px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                
                >Envoyer le message</button>
                </div>
            </form>
        </div>
        </section>
    </>)
}
export default Contact;