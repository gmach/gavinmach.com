const VodafonePage = () => {
  return (
    <>

    <h1 className="mainheading">Vodafone</h1>
    <p>
      I worked on 2 major projects at Vodafone called RedSource and Agent Buddy.
      </p>
      <h2 className="subheading">Red Source</h2>
      <figure >
          <img src="/redsource.jpg" alt="Red Source preview"/>
          <figcaption>RedSource Intranet</figcaption>
      </figure>
      <p>This work was a redesign of the Intranet portal for Vodafones call centre staff servicing Australia, New Zealand and India. 
        It allows internal call centre agents to search for documents and articles to help them with customer enquiries.
      </p>
      
    <h2 className="subheading">Agent Buddy</h2>
    <figure >
          <img src="/agentbuddy.jpg" alt="Agent Buddy preview"/>
          <figcaption>Agent Buddy</figcaption>
      </figure>

    <p> This is a SPA (Single Page Application) that allows Vodafone call centre agents a handy tool to assist with reducing the average customer handling time. Includes Agent Notes, Calculators, Emails and SMS.
    </p>
    <h2 className="subheading">Tech Stack</h2>
    <p>
    ❇️ Angular<br/>
    ❇️ JavaScript<br/>
    ❇️ HTML5<br/>
    ❇️ CSS3<br/>
    ❇️ SalesForce<br/>
    </p>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Vodafone' },
  };
}

export default VodafonePage;
