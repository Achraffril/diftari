import {useState} from 'react';
export default function UserSection(props){
    const [open,setOpen] = useState(false);
    const Toggle = ()=>{
        setOpen(!open);
    }
    return(
        <>
            <div className={`lg:p-16 w-full p-5 ${props.bg}`}>
                <div className={`flex flex-wrap justify-around ${props.direction == "rtl"?"flex-row-reverse":''}`}>
                    <div className={"w-2/3 h-auto flex flex-col align-items-start pt-16"}>
                        <h1 className={`font-semibold mb-3 text-${props.theme}-color text-2xl w-full ${props.language == "AR"? "text-right ":"" }`}>{props.title}</h1>
                        <p className={`${open ? "":"truncate "} transition-all w-full ${props.language == "AR"? "text-right ":"" }`} dir={`${props.language == "AR"? "rtl":"ltr" }`}>
                        {props.paragraph}
                        </p>
                            <a class={`text-${props.theme}-color cursor-pointer`} onClick={()=>{Toggle()}} >
                                {open ? props.language == "FR"?"Lire moins":"أقرأ أقل" :  props.language == "FR"?"Lire plus":"اقرأ المزيد" }
                            </a>
                    </div>
                    <div className="w-1/5 min-w-64 h-auto">
                        <img src={props.image} alt="image" className="w-full h-auto" />
                    </div>
                </div>
            </div>
        </>
    );

}