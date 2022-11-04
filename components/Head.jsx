import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Gavin Mach is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="Gavin Mach, , , web developer portfolio,  web developer,  developer, mern stack, Gavin Mach portfolio, gavinmach.com"
      />
      <meta property="og:title" content="Gavin Mach's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://gavinmach.com.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Gavin Mach',
};
