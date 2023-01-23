import { useTypingText } from '../hooks/useTypingText';
export const TitleContainer = ({ title, subtitle}: any) => {

    const { word } = useTypingText(['CODE...', 'APPS...', 'MEDIA...', 'TECH...', 'PUPPIES...', 'MATÉ...'], 250, 20);    
    return (
        <div className="title_container">
            <div className="grid grid-cols-1 justify-items-center gap-10 homeAdjust mb-6">
                <div className="mx-auto w-full text-start mt-4">
                    <h1 className="px-6 font-black text-4xl md:text-6xl mb-6 last:mb-0 uppercase">WE ARE BUSY<span style={{ "color": "red" }}>{title}</span>PIXELS<br />{subtitle} {word}</h1>
                </div>
            </div>
        </div>
    );
}