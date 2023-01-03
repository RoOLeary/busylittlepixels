import { FaqComponent } from "./FaqComponent";
import styles from "../../styles/index.module.css";
export const Faqs = () => {

    const faqs = [
        {
            key: 0,
            title: "How many team members can I invite?",
            description: "You can invite as many team members as you like"
        },
        {
            key: 1,
            title: "What is the maximum file upload size?",
            description: "No more than 2GB. All files in your account must fit your alloted storage space"
        },
        {
            key: 2,
            title: "How do I reset my password?",
            description: "You can use the reset password function from the settings menu"
        },
        {key: 2, title: "Can I cancel my subscription?", description: "You can, but there is no money-back guarantee"},
        {key: 2, title: "Do you provide additional support?", description: "Yes, please get in touch via e-mail!"},
    ];

    const faqComponents = faqs.map((faq, i) => {
        return <FaqComponent key={i} title={faq.title} description={faq.description}/>
    });

    return <div className={`mx-auto flex items-center`}>
        <div
            className={"flex-auto flex flex-col md:flex-row items-center bg-white md:m-10 "}>
           
            <div className="flex-auto mb-2 w-full p-2">
                <h1 className="flex-none pl-3 text-3xl py-8 font-black tracking-wide">F<span className={'rd_txt'}>re</span>quently Asked <span className={'rd_txt'}>Que</span>stions</h1>
                {faqComponents}
            </div>
        </div>
    </div>;
}