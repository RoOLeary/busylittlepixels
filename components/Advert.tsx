import { Bounded } from "./Bounded";

export const Advert = () => {

    return(
        <Bounded collapsible={false} as="section" className="bg-slate-100">
            <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-1 md:gap-10 lg:gap-28">
                <h1 className='text-center'>[ADVERTISEMENT]</h1>
            </div>
        </Bounded>
    ); 
}
 