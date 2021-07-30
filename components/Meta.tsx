import Head from 'next/head';

type HeadProps = {
  title?: string;
  description?: string;
};

const DEFAULT_PAGE_TITLE = 'Erick Patrick';
const DEFAULT_PAGE_DESCRIPTION = '';

const Meta = ({ title, description }: HeadProps) => {
  const currentTitle = title
    ? `${title} | ${DEFAULT_PAGE_TITLE}`
    : DEFAULT_PAGE_TITLE;

  const currentDescirption = description ?? DEFAULT_PAGE_DESCRIPTION;

  return (
    <>
      <Head>
        <title>{currentTitle}</title>
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={currentDescirption} />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com"></link>
      </Head>
    </>
  );
};

export default Meta;
