import Link from 'next/link'
import { Layout } from '../../components/Layout'
import { Bounded } from '../../components/Bounded'

const Integrations = ({ page, preview }:any) => {

    return(
        <Layout>
            <Bounded as="section" className="bg-white pb-12 py-12 text-black md:pb-20">
                <div className="grid grid-cols-1 justify-items-center gap-20 md:gap-24">
                    <h1>Hello Paddy, draw me like your French girls</h1>
                </div>
            </Bounded>
        </Layout>
    )

}

export default Integrations; 