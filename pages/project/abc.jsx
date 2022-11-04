const VodafonePage = () => {
  return (
    <>

    <h1 className="mainheading">Australian Broadcasting Corporation</h1>
    <p>
      I worked on multiple projects with the ABC (Australian Broadcasting Corporation) including 
      <ul>
        <li>
        ➖ ABC Splash Playlists and Homepage
        </li>
        <li>
        ➖ Splash Live Streaming Events
        </li>
        <li>
        ➖ ABC Zoom website
        </li>   
      </ul>
      </p>
      <h2 className="subheading">ABC Splash Playlists and Homepage</h2>
      <div className="projectimagewrap">
      <figure className="projectimagewrap_left">
          <img src="/abc_spashplaylists.jpg" alt="Spash Playlists"/>
          <figcaption>Spash Playlists</figcaption>
        </figure>        
      <figure className="projectimagewrap_right">
        <img src="/abc_splash.jpg" alt="ABC Splash"/>
          <figcaption>ABC Splash</figcaption>
        </figure>  
      </div>
      <p>ABC Splash brings you the best Australian content from across ABC TV and Radio plus high-quality video from around the world.
Developed Splash Playlists which is a web application to allow users to maintain a playlist of their favorite videos and audio content.
      </p>
      
    <h2 className="subheading">Splash Live Streaming Events
    </h2>


    <figure >
          <img src="/abc_livestream.jpg" alt="Splash Live Streaming"/>
          <figcaption>Splash Live Streaming</figcaption>
      </figure>

    <p> 
    Developed Splash LiveStream to allow live video streaming of upcoming interview events with special guests. 
    </p>

    <h2 className="subheading">ABC Zoom website</h2>
      <figure >
          <img src="/abc_zoom.jpg" alt="ABC Zoom website"/>
          <figcaption>ABC Zoom website</figcaption>
      </figure>
      <p>Developed ABC Zoom website which provides a landing page for a HTML5 based game primarily aimed at year 9 and 10 students to bring back the fun in science learning.
      </p>

    <h2 className="subheading">Tech Stack</h2>
    <p>
     <ul>
        <li>
        ❇️ Javascript
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
        ❇️ LifeRay CMS
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
