import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import { getProjectsData } from '../lib/projects';


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const allProjectsData = getProjectsData();
  return {
    props: {
      allPostsData,
      allProjectsData
    },
  };
}

export default function Home({allPostsData, allProjectsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* <section className={utilStyles.headingMd}></section>  */}
      <section className={utilStyles.headingMd}>
        <p>Hi, my name is Chris Nickel, freelance software developer.
        </p>
        <p>
          Throughout my career I have primarily worked with C# on the .NET framework and more recently in .NET core, now known as .NET.
        </p>
        <p>
          I've worked in many areas from Ecommerce, Human Capital Management, Domains, and even a stint in DevOps.
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className="text-3xl font-bold underline">Portfolio</h2>
        <p>Coming Soon!</p>
        <ul className={utilStyles.list}>
          {allProjectsData.map(({ id, date, status, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/projects/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
             
              <p>{status}</p>
            </small>
          </li>
          
          ))}
        </ul>
      </section>

      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className="text-3xl font-bold underline">Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          
          ))}
        </ul>
      </section> */}
    </Layout>
  );
}
