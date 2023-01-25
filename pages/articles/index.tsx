/* eslint-disable react/jsx-no-comment-textnodes */
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import imageLoader from '../../imageLoader'
import { motion } from 'framer-motion';
import styles from '../styles/Home.module.css'

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});


import { Layout } from '../../components/Layout';
import { Bounded } from "../../components/Bounded";
import { GalleryGrid } from "../../components/GalleryGrid";
// import CarouselContainer from "../components/Carousel";
import { CTA } from "../../components/CallToAction";
import { Video } from "../../components/Video";
// import { Faqs } from "../components/Faq/Faqs";

const inter = Inter({ subsets: ['latin'] })

const Articles = () => {

    

    return(
        <Layout>
          <Bounded collapsible={true} as="section" className="px-6 py-20 md:py-32 py-20 md:py-32 bg-white override mb-12">
      
      
      
        <h1 className="font-black tracking-tight text-3xl md:text-[3rem] mb-6 md:pb-8 last:mb-0 text-left">busy<span style={{ "color": "red"}}>little</span>pixels<span style={{ "color": "red"}}>:articles</span></h1>
        <div className="flex flex-col md:flex-row md:gap-8">
      
        {/* <div className="w-full  flex flex-col space-y-16">
         
          {articles.map((article:any, i:number) => {
            // console.log(article.data.article_excerpt)
            return(
              <div key={i} className="grid grid-cols-2 gap-6 md:grid-cols-4">
                <Image src={article.data.article_featured_image.url} alt={'article featured image'} width={160} height={200} className="h-full object-cover w-full md:h-40 col-span-1 bg-center" loading="lazy" loader={imageLoader} />
                <div className="col-span-1 md:col-span-3">
                  <><p className="mb-2 -mt-1 text-sm font-normal text-gray-500">{article.data.publish_date}, <Link href={`/${article.data.category}`}>{article.data.category}</Link></p></>
                  <h2 className="mb-2 md:text-2xl font-extrabold leading-snug text-gray-800">
                    <Link href={`/articles/${article.uid}`} className="duration-300 transition ease-in-out  text-gray-900 hover:text-red-500">{article.data.articletitle[0].text}</Link>
                  </h2>
                  <p className="mb-3 text-sm font-normal text-gray-500 allArticles_excerpt ">
                  </p>
                  <Link href={`/articles/${article.uid}`} className="hidden md:visible btn btn-light btn-sm">Read More</Link>
                </div>
              </div>
            )
          })}
          
          */}
          
       </div> 
        {/* <div className="w-full md:w-0 xl:w-2/6 flex flex-col space-y-16">
          <div className="sticky md:visible">
            <img className="w-full" src="https://place-hold.it/350x1200/black/white.png&text=Advert&bold&fontsize=18" />
          </div>
          <div className="sticky">
            <img className="w-full" src="https://place-hold.it/350x350/black/white.png&text=Advert&bold&fontsize=18" />
          </div>
        </div>
      </div>   */}
      </Bounded>
      <CTA />
    </Layout>

    )
}

// export async function getStaticPaths() {
//   // Call an external API endpoint to get posts
  

//   const res = await fetch('https://servd-test-staging.cl-eu-west-3.servd.dev/api/en/recipes.json');
//   const posts = await res.json()
//   // Get the paths we want to pre-render based on posts
//   const paths = posts && posts.data.map((post) => ({
//       params: { slug: post.slug },
//   }));

//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: true }
// }

// export const getStaticProps: GetStaticProps = async ({ locale, params, preview = false, previewData }) => {
  
//   // console.log(locale);
//   // console.log('locale', locale);

//   let url = `https://servd-test-staging.cl-eu-west-3.servd.dev/api/${locale}/recipes/${params.slug}.json`;
  
//   const res = await fetch(url)
//   const page = await res.json()
//   let prevData; 

//   if(preview){
     
//       const prevResponse = await fetch(`https://servd-test-staging.cl-eu-west-3.servd.dev/api/${locale}/recipes/${params.slug}.json?token=${previewData['token']}`);
//       prevData = await prevResponse.json();
      
//   } 

//   let data = preview ? previewData : page;

//   return {
//       props: {
//           preview: preview ? true : false,
//           page: data
//       },
//       revalidate: 10, // In seconds
//     };
// }


export default Articles; 
