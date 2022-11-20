import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout.js';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();

  /*
   const res = await fetch('https://swapi.dev/api/people/')
  const allPostsData = await res.json();
   console.log(allPostsData)
  return {
    props: {
      data: allPostsData.results,
    },
  };
 */
  
  return {
    props: {
      allPostsData,
    }
  }
 
}


export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am a Full Stack Web developer pivoting from 10 years as a Red Seal Electrician. I am a lifelong learner, convinced that technology is the future of human evolution. I am going to be part of the evolution. Utilizing modern technologies that simultaneously enhance the Developer and User experience, I create applications that are a pleasure to use and maintain.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
     {/*  <ul>
        {data.map(x => (
          <li>{x.name}</li>
        ))}

      </ul> */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
