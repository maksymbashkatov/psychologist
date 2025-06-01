import styles from './page.module.css';
import { articles } from '../../data';
import { Metadata } from 'next';
import ZaChemPrihodyatKPsihologu from '../components/za-chem-prihodyat-k-psihologu';
import GlavnyjVoprosNarcissicheskogoStradaniya from '../components/glavnyj-vopros-narcissicheskogo-stradaniya';
import ZhadnostIUtolenieVnutrennegoGoloda from '../components/zhadnost-i-utolenie-vnutrennego-goloda';
import PsihicheskayaTravmaIObryvSvyazej from '../components/psihicheskaya-travma-i-obryv-svyazej';

interface MyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: MyPageProps): Promise<Metadata> {
  const resolvedParams = Promise.resolve(params) as Promise<{ slug: string }>;
  const { slug } = await resolvedParams;
  const article = articles.find((item) => item.slug === slug);
  return {
    // title: service?.metaTitle,
    // description: service?.metaDescription,
    alternates: {
      canonical: `https://dianalonskaya.com/stati/${article?.slug}`,
    }
  };
}

export default async function ServicePage({ params }: MyPageProps) {
  const resolvedParams = Promise.resolve(params) as Promise<{ slug: string }>;
  const { slug } = await resolvedParams;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return <div>Статья не найдена</div>;
  }

  return <main className={styles.main}>
    {
      article.id === 1 ? <ZaChemPrihodyatKPsihologu/> :
      article.id === 2 ? <GlavnyjVoprosNarcissicheskogoStradaniya/> :
      article.id === 3 ? <ZhadnostIUtolenieVnutrennegoGoloda/> :
      <PsihicheskayaTravmaIObryvSvyazej/>
    }
  </main>
}