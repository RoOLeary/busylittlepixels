import { FaqComponent } from "./FaqComponent";
import styles from "../../styles/index.module.css";
import { Bounded } from '../../components/Bounded'

/**
 * @typedef {import("@prismicio/client").Content.FaqSlice} FaqSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FaqSlice>} FaqProps
 * @param { FaqProps }
 */
const Faqs = ({ slice }:any) => {

    const faqs:any = slice.items;
    const faqComponents = Object.values(faqs).map((faq:any, i) => {
        return <FaqComponent key={i} question={faq.question[0].text} answer={faq.answer[0].text}/>
    });

    return(
        <Bounded collapsible={false} as="section" className="px-6 py-8 md:py-10">
            <div className={`mx-auto flex items-center`}>
                <div
                    className={"flex-auto flex flex-col md:flex-row items-center bg-white"}>
                
                    <div className="flex-auto mb-2 w-full">
                        {/* <h1>{slice.primary.faq_title[0].text}</h1> */}
                        <h1 className="pb-8 mb-2 text-2xl font-black leading-tight text-gray-900 border-b border-gray-200 md:text-4xl uppercase">F<span className={'rd_txt'}>re</span>quently Asked <span className={'rd_txt'}>Que</span>stions</h1>
                        {faqComponents}
                    </div>
                </div>
            </div>
        </Bounded>
        )
    ;
}

export default Faqs;