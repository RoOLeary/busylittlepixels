import { FaqComponent } from "./FaqComponent";
import styles from "../../styles/index.module.css";

interface Ifaqs {
    items: {
        question?: string,
        answer?: string
    }
}


export const Faqs = ({ items }:Ifaqs) => {


    // @ts-ignore
    const faqComponents = items.map((item, i) => {
        return <FaqComponent key={i} question={item.question} answer={item.answer}/>
    });

    return <div className={`mx-auto flex items-center`}>
        <div
            className={"flex-auto flex flex-col md:flex-row items-center bg-white"}>
           
            <div className="flex-auto mb-2 w-full">
                <h1 className="pb-8 mb-2 text-2xl font-black leading-tight text-gray-900 border-b border-gray-200 md:text-4xl uppercase">F<span className={'rd_txt'}>re</span>quently Asked <span className={'rd_txt'}>Que</span>stions</h1>
                {faqComponents}
            </div>
        </div>
    </div>;
}