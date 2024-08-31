import HeaderSection from "../../componants/home/HeaderSection";
import LoginLink from "../../componants/home/loginLink";
import UserSection from "../../componants/home/userSection";

import { useContext } from "react";
import { AppContext, LanguageContext } from "../../AppContext";



export default function Home(){
    const { language } = useContext(LanguageContext);


    const adultAbout = language == "FR" ? <span>Le carnet de santé d'adulte, ou dossier médical personnel, est un document crucial compilant les informations médicalesessentielles tout au long de la vie. Il rassemble des détails tels que les antécédents médicaux,les résultats d'examens, les vaccinations, et favorise la communication entre les professionnels de la santé.En encourageant une approche proactive de la santé, il renforce la responsabilité individuelle et contribue à la prévention des maladies, jouant ainsi un rôle clé dans une gestion intégrée et personnalisée de la santé.</span> : <span>تعد بطاقة صحة البالغين، أو الملف الطبي الرقمي، مستندًا بالغ الأهمية يجمع المعلومات الطبية الأساسية طوال فترة الحياة. Il تجميع التفاصيل مثل الأدوية السابقة ونتائج الاختبارات والتطعيمات، وتفضيل التواصل بين المتخصصين في الصحة. تشجيع اتباع نهج استباقي للصحة، وتعزيز المسؤولية الفردية والمساهمة في الوقاية من الأمراض الأمراض، بالإضافة إلى دور رئيسي في إدارة متكاملة وشخصية للصحة.</span> ;
    
    const femmeAbout = language == "FR" ?  <span> Le carnet de santé de la femme est un document crucial regroupant des informations médicales essentielles, notamment les antécédents médicaux, les résultats d'examens gynécologiques, les vaccinations et les détails liés à la grossesse. Facilitant la communication entre les professionnels de la santé, il encourage une approche proactive de la santé féminine, favorise la participation active à la gestion de la santé, y compris pendant la grossesse. En intégrant des données sur la santé reproductive et obstétricale, ce carnet renforce la responsabilité individuelle et contribue à la prévention des problèmes spécifiques à la santé des femmes, jouant ainsi un rôle clé dans une prise en charge médicale intégrée et personnalisée.</span> : <span>إن دفتر صحة المرأة هو مستند مهم يجمع المعلومات الطبية الأساسية، بما في ذلك الأدوية السابقة ونتائج فحوصات أمراض النساء والتطعيمات والتفاصيل الكاذبة. تسهيل التواصل بين محترفي الصحة، وتشجيع اتباع نهج استباقي للصحة النسائية، وتفضيل المشاركة النشطة في إدارة الصحة، بما في ذلك على نطاق واسع. من خلال دمج البيانات المتعلقة بالصحة الإنجابية والتوليد، يعزز هذا الدفتر المسؤولية الفردية ويساهم في الوقاية من مشاكل محددة تتعلق بصحة المرأة، بالإضافة إلى دور مهم في جائزة طبية متكاملة وشخصية.</span>;
    
    const enfantAbout = language == "FR" ?  <span> Le carnet de santé de l'enfant est un document essentiel qui regroupe des informations médicales clés tout au long de sa croissance. Il inclut des détails tels que les antécédents médicaux, les vaccinations, les résultats d'examens pédiatriques, offrant un suivi détaillé du développement et de la croissance. Facilitant la communication entre les parents et les professionnels de la santé, ce carnet encourage une approche proactive des soins de santé infantiles. En intégrant des données sur les vaccinations et le développement, il contribue à assurer des soins médicaux appropriés et à prévenir d'éventuels problèmes de santé, jouant ainsi un rôle crucial dans la prise en charge intégrée et personnalisée de la santé de l'enfant.</span> : <span>إن دفتر صحة الطفل هو وثيقة أساسية تجمع المعلومات الطبية على مدى فترة طويلة من الزمن. يتضمن تفاصيل مثل أن الأدوية السابقة والتطعيمات ونتائج اختبارات طب الأطفال توفر متابعة تفصيلية للتطور والتطور. تسهيل التواصل بين الوالدين والمهنيين الصحيين، تشجع هذه الدفتر على اتباع نهج استباقي لنصائح الصحة للأطفال. من خلال دمج البيانات المتعلقة بالتطعيمات والتنمية، تساهم في ضمان الحصول على الرعاية الطبية المناسبة ومنع حدوث مشاكل صحية، بالإضافة إلى دور حاسم في جائزة المسؤولية الصحية المتكاملة والشخصية للطفل.</span>;

    return(
        <>      


                <HeaderSection language={language}/>
                <UserSection direction="ltr" paragraph={adultAbout}   title={language == "FR" ? "Carnet de santé d'adulte"      : "السجل الصحي للبالغين"}  image="/img/adultAbout.png"     theme="secondary"       bg="bg-blue-100"          language={language} />
                <UserSection direction="rtl" paragraph={femmeAbout}   title={language == "FR" ? "Carnet de santé de la femme"   : "السجل الصحي للمرأة"}  image="/img/femmeAbout.png"     theme="female"          bg="bg-white"  language={language} />
                <UserSection direction="ltr" paragraph={enfantAbout}  title={language == "FR" ? "carnet de santé de l'enfant"   : "السجل الصحي للطفل"}  image="/img/enfantAbout.png"    theme="primary"         bg="bg-blue-100"          language={language} />
                <div className="" style={{backgroundImage:""}}>
                    <div className=" w-full py-5">
                        <h1 className="text-center text-3xl font-semibold text-primary-color">{language == 'FR' ? "Se connecter" : "تسجيل الدخول"}</h1>
                    </div>
                    <div className=" flex flex-wrap m-auto lg:p-6 justify-around" id="login">
                            <LoginLink image="/img/patient.png"     title={language =='FR' ? "Uniquement pour les patients":  "فقط للمرضى أو المستفيدين من الرعاية الصحية  "}        button={language == 'FR' ?"Se connecter" : 'تسجيل الدخول'} to="patient"  />
                            <LoginLink image="/img/medecin.png"     title={language =='FR' ? "Uniquement pour les medecins":  "فقط للأطباء والمتخصصين في الرعاية الصحية"}        button={language == 'FR' ?"Se connecter" : 'تسجيل الدخول'} to="medecin"  />
                            <LoginLink image="/img/admin.png"       title={language =='FR' ? "Uniquement pour les administrateur":  "فقط للمسؤولين في وكالات تسهيلات "}  button={language == 'FR' ?"Se connecter" : 'تسجيل الدخول'} to="admin"    />
                    </div>
                </div>
                
        </>
    );

}