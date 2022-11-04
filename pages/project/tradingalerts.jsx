const AboutPage = () => {
  return (
    <>
      <h3>Trading Alerts</h3>
      <p>
    I built various tools as personal projects to provide alerts to trading opportunities
    in traditional finance and decentralised finance markets. These range from news based momentum to arbitrage of pricing between exchanges.
    This includes a bot for
    I also  ran some market making algos written in python as well  a stock trading hotkey 

<h2 className="subheading">Tech Stack</h2>
 
  <p>
  <ul>
        <li>
        ❇️ Solidity
        </li>
        <li>
        ❇️ Web3
        </li>
        <li>
        ❇️ Node
        </li>
        <li>
        ❇️ MongoDB
        </li>
        <li>
        ❇️ Python
        </li>
      </ul>  
  </p>

  <h2 className="subheading">Technical Hurdles and Problem Solving</h2>
  <p>🚩 Main issues I found were the general lack of debugging support for smart contract code.
  I found debugging Solidity can be frustratingly complex with <em>HardHat</em> or <em>Truffle</em> until I used the online debuggers like Tenderly which was a gamechanger.
</p>
<h2 className="subheading">Experience and Achievements</h2>
  <p> 
    <ul>
      <li>
      ⚡ Building Dapps with Solidity using Web3.js
      </li>
      <li>
      ⚡ Developing Smart Contracts using ERC-20 Token Standards
    </li>
    <li> ⚡ 
    Deployment and custom configuration of blockchain nodes. I learnt its better to host your own node for low latency access
    to the mempool if running a searcher bot.
    </li>
    <li>
      ⚡ Building Dapps with Solidity using Web3.js
      </li>    
    </ul>



      </p>

</p>




    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
