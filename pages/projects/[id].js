import Head from 'next/head';
import Layout from '../../components/layout';
import { getAllProjectIds, getProjectData } from '../../lib/projects';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';


export async function getStaticProps({ params }) {
  const projectData =  await getProjectData(params.id);
  return {
    props: {
      projectData,
    },
  };
}


export async function getStaticPaths() {
    const paths = getAllProjectIds();
    return {
      paths,
      fallback: false,
    };
  }

  export default function Project({ projectData }) {
    return (
      <Layout>
        <Head>
          <title>{projectData.title}</title>
        </Head>
        <article>
          <h1 className={utilStyles.headingXl}>{projectData.title}</h1>
          <div className={utilStyles.lightText}>
            <p>{projectData.status}</p>
          </div>
          <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
        </article>
      </Layout>
    );
  }