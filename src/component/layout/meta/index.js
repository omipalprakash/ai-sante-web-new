import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Meta({
  title = 'Default Title',
  description = 'Default description for your app.',
  keywords = 'default, keywords, here',
  author = 'Your Name',
  children,
}) {
  const router = useRouter();
  const baseUrl = 'http://103.247.19.158:3000';
  const canonicalUrl = `${baseUrl}${router.asPath === '/' ? '' : router.asPath}`;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* Add more meta tags as needed */}
      {/* ✅ Canonical Tag */}
      <link rel="canonical" href={canonicalUrl} key="canonical" />
      {children}
    </Head>
  );
}