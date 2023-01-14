import {useState} from "react";

export type FaqProps = {
    question: string;
    answer: string;
}

export const FaqComponent = (props: FaqProps) => {

    const [expanded, setExpanded] = useState(false);
    return <div onClick={() => setExpanded(!expanded)} className="flex flex-col pb-6 border-b last:border-b-0 text-gray-light cursor-pointer">
        <div className="flex flex-row items-center">
            <p className={`flex-auto active:text-red-500 hover:text-red-500 py-4 easing-linear ${expanded ? "text-red-500 font-black" : "font-black"} uppercase`}>{props.question}</p>
        </div>
        <div className={`transition-max-height duration-700 ease-in-out overflow-hidden ${expanded ? "max-h-20" : "max-h-0"}`}>
            <p>{props.answer}</p>
        </div>
    </div>
}

