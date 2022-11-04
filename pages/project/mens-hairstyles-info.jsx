const AboutPage = () => {
  return (
    <>
      <h3>Mens Hairstyles</h3>
      <p>This is an info site for mens hairstyles. It shows clean semantic HTML markup with
        non bloated CSS. I did this as a hobby project for a good hairdresser I visited during my trip to Bali.
      </p>
      <img src="/menshairstyles.png"/>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
