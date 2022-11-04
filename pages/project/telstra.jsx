const VodafonePage = () => {
  return (
    <>

    <h1 className="mainheading">Telstra</h1>
    <p>
      I worked on multiple projects with Telstra including 
      <ul>
        <li>
        ➖ ID Plus 1.5 and 2.0
        </li>
        <li>
        ➖ NRL App for Subscribing to NRL Digital Pass
        </li>
        <li>
        ➖ MyAccount Auto-Registration
        </li>
        <li>
        ➖ Telstra Common Login pages
        </li>                        
      </ul>
      </p>
      <h2 className="subheading">ID Plus 1.5 and 2.0</h2>
      <figure>
          <img src="/telstra_idplus.png" alt="ID Plus 1.5 and 2.0"/>
          <figcaption>ID Plus 1.5 and 2.0</figcaption>
      </figure>
      <p>Development of ID+1.5 and ID+2.0 for enabling two factor authentication and verification when user logs into any Telstra domain website.
      </p>
      
    <h2 className="subheading">NRL Single Page App for Subscribing to NRL Digital Pass
    </h2>
    <figure >
          <img src="/telstra_nrl.png" alt="NRL Single Page App"/>
          <figcaption>NRL Digital Pass SPA</figcaption>
      </figure>

    <p> Development of NRL/AFL Single Page App for registering subscriptions to streaming video content of football matches. 
 
    </p>

    <h2 className="subheading">Telstra Common Login page</h2>
      <figure >
          <img src="/telstra_commonlogin.jpg" alt="Telstra Common Login page"/>
          <figcaption>Telstra Common Login page</figcaption>
      </figure>
      <p>Developed the new Common Login page for Telstra for all Telstra online websites at <a href="https://signon.telstra.com">https://signon.telstra.com</a>.
    
 This was to make it responsive for mobiles and tablets and to provide a unified look and feel for customers and business users to login to Telstra's online websites.
      </p>

      <h2 className="subheading">MyAccount Auto Registration</h2>
      <figure >
          <img src="/telstra_myAccount.png" alt="MyAccount AutoRegistration"/>
          <figcaption>MyAccount Auto Registration
</figcaption>
      </figure>
      <p>Development of MyAccount Auto Registration project to enable increase uptake of Telstra MyAccount registrations.
      </p>



    <h2 className="subheading">Tech Stack</h2>
    <p>
     <ul>
        <li>
        ❇️ ReactJS
        </li>
        <li>
        ❇️ Javascript
        </li>
        <li>
        ❇️ AngularJS
        </li>
        <li>
        ❇️ CSS3
        </li>
        <li>
        ❇️ HTML5
        </li>
        <li>
        ❇️ Java
        </li>
        <li>
        ❇️ Adobe CQ5/AEM CMS
        </li>
      </ul>  
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
