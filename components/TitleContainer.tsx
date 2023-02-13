import { useTypingText } from '../hooks/useTypingText';


interface ITitle {
    title?: String,
    subtitle?: String
}

export const TitleContainer = ({ title, subtitle }:ITitle) => {

    const { word } = useTypingText(['CODE ', 'CRAFT ', 'NEXT.JS ', 'TAILWIND ', 'PWAS', 'TECH NEWS ', 'MATÉ ', 'PUPPIES '], 250, 20);
    
    return (
        <div className="title_container">
            <div className="grid grid-cols-1 justify-items-center gap-10 homeAdjust mb-6">
                <div className="mx-auto w-full text-start mt-4">
                    <h1 className="px-6 font-black text-4xl md:text-6xl mb-6 last:mb-0 uppercase">HELLO THERE!<br/>WELCOME TO BUSY<span style={{ "color": "red" }}>{title}</span>PIXELS<span style={{ "color": "red" }}>.</span><br/>{subtitle} <span style={{ "color": "red" }}>&#9825; {word}</span></h1>
                </div>
            </div>
        </div>
    );
}