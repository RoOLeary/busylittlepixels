import {useState} from "react";

export type FaqProps = {
    title: string;
    description: string;
}

export const FaqComponent = (props: FaqProps) => {

    const [expanded, setExpanded] = useState(false);
    return <div onClick={() => setExpanded(!expanded)} className="flex flex-col p-3 border-b last:border-b-0 text-gray-light cursor-pointer">
        <div className="flex flex-row items-center">
            <p className={`flex-auto active:text-red-600 hover:text-red-600 pb-2 ${expanded ? "text-red-600 font-black" : "font-black"}`}>{props.title}</p>
        </div>
        <div className={`transition-max-height duration-700 ease-in-out overflow-hidden ${expanded ? "max-h-20" : "max-h-0"}`}>
            <p>{props.description}</p>
        </div>
    </div>
}

