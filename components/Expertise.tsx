export const Expertise = () => {

    return(
        <div className="container pt-20 mx-auto w-full max-w-7xl px-3 md:px-8 bg-white">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div>
                    <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl uppercase">Technical <span style={{ "color": "red"}}>Expertise</span></h2>
                    <div className="header__underline"></div>
                    <p className="mt-4 text-gray-500">You know who's into dragons, Morty? Nerds who refuse to admit they're Christian. I couldn't hear you over my own screaming. We've talked about this! 5 more minute of this and I'm going to get mad! You know my name, that's disarming. Not today bitch! You look it up, you don't- you don't even know what it means.</p>

                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                    <div className="border-t border-gray-200 pt-4">
                        <dt className="font-medium text-gray-900">Headless CMS/web solutions</dt>
                        <dd className="mt-2 text-sm text-gray-500">Designed by Good Goods, Inc.</dd>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                        <dt className="font-medium text-gray-900">Mobile Development</dt>
                        <dd className="mt-2 text-sm text-gray-500">Solid walnut base with rare earth magnets and powder coated steel card cover</dd>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                        <dt className="font-medium text-gray-900">Cloud Infrastructure</dt>
                        <dd className="mt-2 text-sm text-gray-500">6.25" x 3.55" x 1.15"</dd>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                        <dt className="font-medium text-gray-900">Building the web of the future</dt>
                        <dd className="mt-2 text-sm text-gray-500">Hand sanded and finished with natural oil</dd>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                        <dt className="font-medium text-gray-900">Solutions Architecture</dt>
                        <dd className="mt-2 text-sm text-gray-500">Wood card tray and 3 refill packs</dd>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                        <dt className="font-medium text-gray-900">Consultancy</dt>
                        <dd className="mt-2 text-sm text-gray-500">Made from natural materials. Grain and color vary with each item.</dd>
                    </div>
                    </dl>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                    <img src="https://source.unsplash.com/640x640/?code" alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." className="rounded-lg bg-gray-100" />
                    <img src="https://source.unsplash.com/640x640/?tech" alt="Top down view of walnut card tray with embedded magnets and card groove." className="rounded-lg bg-gray-100"/>
                    <img src="https://source.unsplash.com/640x640/?mobile" alt="Side of walnut card tray with card groove and recessed card area." className="rounded-lg bg-gray-100"/>
                    <img src="https://source.unsplash.com/640x640/?app" alt="Walnut card tray filled with cards and card angled in dedicated groove." className="rounded-lg bg-gray-100"/>
                </div>
            </div>
        </div>
    )


}
