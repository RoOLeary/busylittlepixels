import { FaqComponent } from "./FaqComponent";
import styles from "../../styles/index.module.css";
export const Faqs = () => {

    const faqs = [
        {
            key: 0,
            question: "How many team members can I invite?",
            answer: "You can invite as many team members as you like"
        },
        {
            key: 1,
            question: "What is the maximum file upload size?",
            answer: "No more than 2GB. All files in your account must fit your alloted storage space"
        },
        {
            key: 2,
            question: "How do I reset my password?",
            answer: "You can use the reset password function from the settings menu"
        },
        {key: 2, question: "Can I cancel my subscription?", answer: "You can, but there is no money-back guarantee"},
        {key: 2, question: "Do you provide additional support?", answer: "Yes, please get in touch via e-mail!"},
    ];

    const faqComponents = faqs.map((faq, i) => {
        return <FaqComponent key={i} question={faq.question} answer={faq.answer}/>
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