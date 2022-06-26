import img from './imagesRemovebgPreview.png';
import iceCREAM from './iceCREAM.png';
import molochko from './molochko.png';

import iceCreamLAst from './iceCreamLAst.png'
import facebook from './facebook.png'
import instagram from './instagram.png'
import linkedin from './linkedin.png'
import twitter from './twitter.png'
import AfterLife from './afterLIFE/afterLife';
import Kamaz from './Kamaz.png';
import cake from './cake.png'
import cashBack from './cashBack.png'
import fastDelivery from './fastDelivery.png'

function App() {
  return (
    <div className="container">
      <header className="header">
        <a href=""><img src={img} /></a>

        <div className='middleHeader'>
          <a>Home</a>
          <a>Product</a>
          <a>Pricing</a>
          <a>Testimonials</a>
          <a>Contact Us</a>
        </div>

        <div>
          <a href=""><button>Buy Now</button></a>
        </div>
      </header>
      {/* main */}
      <main >
        <div className='leftMain'>
          <p>Sweet fun, full of milk.</p>
          <h1 className='FeelInside'>Feel inside cold with our delicious <span>ice-cream.</span> </h1>
          <p>Some food has looked so awful that it's looked like something that the dog's brought home, yet after one mouthful I've been left eating my thoughts, my words.</p>
          <a href=""><button>Buy Now</button></a>
        </div>

        <div className='rightMain'>
          <img src={iceCREAM} id="iceCREAM" />
          <img src={molochko} id="molochko" />
        </div>
      </main>

      <div className='afterLIFE'>
        <AfterLife />
      </div>

      {/* after after life life */}
      <div className='afterLIFEone'>

        <div className='leftAfterAfterLifeLife'>
          <h1 className=''>Brown Sugar Oatmea</h1>
          <p>Together with McDonald’s, Burger King has grown to become synonymous with burgers in the US.Together with McDonald’s, Burger King has grown to become synonymous.</p>
          <a href=""><button>See Details</button></a>
        </div>

        <div className='rightAfterAfterLifeLife'>
          <img src={iceCreamLAst} id="iceCreamLAst" />
        </div>

      </div>

      {/* footer */}
      <footer>

        <a href=""><img src={img} /></a>

        <p>Some food has looked so awful that it's looked like something that the dog's brought home.</p>

        <div className='footerLAST'>

          <a><img src={facebook} id='facebook' /></a>
          <a><img src={instagram} id='instagram' /></a>
          <a><img src={linkedin} id='linkedin' /></a>
          <a><img src={twitter} id='twitter' /></a>

        </div>



      </footer>
    </div>
  );
}


export default App;
