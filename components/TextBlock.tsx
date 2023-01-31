import { Bounded } from "./Bounded"

interface ITextBlock {
    textTitle?: string,
    textBoldTitle?: string,
    textContent?: string,
    displayBorderImage?: boolean,
    selectBorderDisplay?: string
}

export const TextBlock = ({ textTitle, textBoldTitle, textContent, displayBorderImage, selectBorderDisplay }:ITextBlock) => {
    console.log(textTitle)
    return(
        <Bounded collapsible={true} as="section" className="bg-white">
            <div className="relative overflow-hidden bg-white py-16">
            <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]">
                <div className="relative mx-auto h-full max-w-prose text-lg" aria-hidden="true">
                
                {/* <svg className="absolute top-1/2 right-full -translate-y-1/2 -translate-x-32 transform" width="404" height="384" fill="none" viewBox="0 0 404 384">
                    <defs>
                    <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                    </pattern>
                    </defs>
                    <rect width="404" height="384" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
                </svg> */}
                {/* <svg className="absolute bottom-12 left-full translate-x-32 transform" width="400" height="384" fill="none" viewBox="0 0 400 384">
                    <defs>
                    <pattern id="d3eb07ae-5182-43e6-857d-35c643af9034" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                    </pattern>
                    </defs>
                    <rect width="400" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
                </svg> */}
                </div>
            </div>
            <section className="relative lg:px-8">
                <div className="mx-auto max-w-prose text-lg">
                <h1 className="font-black tracking-tighter text-3xl md:text-[3.5rem] mb-6 last:mb-0 uppercase">
                    {textTitle ? textTitle : "TEXT COMP"}{textBoldTitle ? <span style={{ "color": "red"}}>{textBoldTitle}</span> : null}
                </h1>
                {textContent ? 'Ass' : 'nope'}
                <p className="mt-8 text-xl leading-8 text-gray-500">Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien.</p>
                <p className="mt-8 text-xl leading-8 text-gray-500">Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien.</p>
                
                </div>
                
            </section>
            </div>
        </Bounded>

    )

}