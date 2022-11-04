const GrollyPage = () => {
  return (
    <>
      <h1 className="mainheading">Grolly</h1>
      <a href="https://grolly.com.au">
      <figure>
          <img src="/grolly.png" alt="Grolly Website preview"/>
          <figcaption>grolly.com.au</figcaption>
        </figure>
        </a>
      <p>
        This is a grocery comparison website to compare prices of Woolworths and Coles (2 of Australias largest grocery chains). 
        I came up with the idea when browsing my local Woolworths and finding myself impulse buying things whenever there was
        a marked difference in price. I thought I could provide a website app to showcase all these discounts in an easy to navigate layout.
        It uses a common standard barcode format shared by Woolworths and Coles to find matching products and to compare prices.
        It is unique to other price comparison sites as it is clean just showing the minimal price data in 
      an easy to view manner as well as having a barcode scanner to allow you to scan a product barcode to quickly view the details.
      </p>
    <h2 className="subheading">Tech Stack</h2>
    <p> It has 2 versions written for <span className="skill">Angular</span> and <span className="skill">React</span>. 
      The <span className="skill">React</span> version uses <span className="skill">Redux</span> to store the product data, handle the shopping cart and allow filtering options. It also uses <span className="skill">React Router</span> to handle
      navigation and search processing. The search engine makes use of <span className="skill">Elastic Search</span> for finding similar product when there are no barcodes matching.
      The backend consisted of a <span className="skill">Node.js</span> server connecting to a <span className="skill">MongoDB</span>  and <span className="skill">Elastic Search</span> instance in the cloud while a daemon process would regularly poll for the latest prices from Woolworths and Coles.
  </p>
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
      </ul>  
  </p>

  <h2 className="subheading">Technical Hurdles and Problem Solving</h2>
  <p>🚩 I ran into a few technical challenges along the way like I found some products had either the wrong barcode or didn't provide any 
which would prevent identical products from being matched correctly.
To solve this I would provide a link to search for the most similar product based on various keywords and descriptions from the correct product details. This involved days of perusing the advanced 
features of the Elastic Search API to build a custom pattern match algorithm that was over 600 lines long. 
</p>

<p>🚩 Another technical hurdle was quering for the latest prices from woolworths and coles which did not involve webscraping the respective online pages but through
extensive analysis of the API calls I was able to reuse the exact same REST endpoints. The challenge was in refreshing the session cookies
as it was set to expire within a few minutes but I managed to regenerate the necessary cookies to keep the session alive.
</p>

<p>🚩 I would often find some issues with components not rendering due some data update in particular from deeply nested components. 
  I would debug through these interactions including using the React Developer Tools to identify some component further up the parent 
  which was not rendered. I solved these simply by refactoring the code to move it to some shareable common parent where the change in props would trigger a rerender.
</p>

<p>🚩 Other times a component may rerender more often than is expected which could cause a performance hit. I solved these not only by refactoring the component but 
  also making use of useCallback and useMemo hooks to reuse cached instances of components, functions and objects.
</p>

<p>🚩 It originally had user authentication and database tracking for the users cart but wasn't need in the end because I didn't want 
to burden the user experience by logging in so it simply stores the user's cart in localStorage. 
</p>
<p>🚩 The site has gone through 3 revisions with the name and logo having changed from 'GroceryHawker' as it was too wordy. I chose Grolly as a mix on Grocery and Trolley.
</p>

<h2 className="subheading">Experience and Achievements</h2>
  <p> 
    <ul>
      <li>
    ⚡ Gained more experience with <span className="skill">React</span> hooks, state management and to think in <span className="skill">React</span> by trying to keep components simple
    using props and following DRY principle. This is most evident in having a Tile component representing all the specifics of a grocery item 
    to be reused in other components that needs this including product categories, search results, cart items, and detailed product page.
    </li>
      <li>
      <p>⚡ Many reuable components were written from scratch without relying on a library 
        including an infinite scroll component to allow any element to load new data asynchronously when scrolling past the bottom 
      and a custom snackbar notification component for alert notifications. 
      <div className="projectimagewrap">
        <figure className="projectimagewrap_left">
          <img src="/infinitescroller.gif" alt="Infinite Scroller preview"/>
          <figcaption>Infinite scroller</figcaption>
        </figure>
        <figure className="projectimagewrap_right">
        <img src="/snackbar.gif" alt="Snackbar preview"/>
          <figcaption>Snackbar notification</figcaption>
        </figure>
      </div>
      </p>
      </li>
      <li>
      ⚡ I learnt <span className="skill">Redux</span> to a deep level having used the latest <span className="skill">Redux</span> Toolkit to do the heavylifting of handling asynchronous actions and reducer state logic.
      I also learnt the latest version of <span className="skill">React Router</span> has a data API that can also be used for asynchronous loading of data which opens up new methods of implementing the logic.
      </li>
      <li>
      ⚡ I was able to figure out the Coles login cookie process as it was what prevented other sites from being able to sync their prices automatically. 
      This gave my site the instant price refresh whenever Coles had a price update while other sites had to manually update it.
      </li>
    </ul>
  </p>
      
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Grolly' },
  };
}

export default GrollyPage;
