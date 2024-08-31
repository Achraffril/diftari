import { Link } from "react-router-dom";

export default function HeaderSection(props){
    return(
        <>
            <div className="w-full w-100 h-screen flex justify-center align-items-center" style={{backgroundImage:'url(/img/main_bg.png)',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
                <div className="container text-white align-items-center flex">
                    <div className={"flex w-full h-full flex-wrap  align-items-center justify-center gap-5 "+ `${props.language=="AR" ?'flex-row-reverse text-right':""}` }>
                        <div className={"flex-1 " }>
                            <h1 className="banner text-7xl font-semibold">{props.language == "FR" ? "La plateforme numérique du dossier de santé":"منصة السجلات الصحية الرقمية"}</h1>
                            <p className="text-xl">{
                            props.language == "FR" ?
                            "Pour améliorer l'efficacité des soins de santé et la qualité des services médicaux pour les individus et les professionnels de la santé."
                            :
                            "تحسين كفاءة الرعاية الصحية وجودة الخدمات الطبية للأفراد والمتخصصين في الرعاية الصحية."
                            }</p>
                        
                        </div>
                        <div className="w-1/3  min-w-32  text-center flex justify-center align-items-center">
                            <div className="w-full">
                            {/* <button className="bg-white text-primary-color p-3 px-16 w-1/2 rounded-xl font-semibold ">{props.language == "FR"?"se connecter" : "تسجيل الدخول"}</button> */}
                            <p className="my-5"></p>
                            <Link to="/inscription/patient">
                            <button className="text-gray-100 border-3 p-3 px-16 w-1/2 font-semibold hover:bg-gray-100 hover:text-gray-800">{props.language == "FR"?"Rejoignez-nous" : "انضم إلينا"}</button>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}