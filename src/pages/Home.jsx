import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './home.css';
const Home = () => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
        <Navbar current={"Home"} />
        <div className="Home-Container">
          <div className="h-hero">
            <div className="h-hero1">                
              <div className="h-hero-text">
                <img src="/media/Home/Group 265.png"></img>
                <span className="wt">Where Tradition</span>
                <span className="mte">Meets Timeless Elegance</span>
                <span className="egj">Exquisite Gold Jewellery<br></br> Crafted for Every Precious Moment</span>
                <span className="ec">EXPLORE COLLECTIONS</span>
              </div>
              <img className="hero-img1" src="/media/Home/ddse 1.png"></img>
              <div className="h-arrow">
                <img src="/media/Home/Group 266.png"></img>
                <img src="/media/Home/Group 267.png"></img>
              </div>
            </div>
            <></>
            
          </div>



          <div>
        <Footer/>
          </div>          
        </div>        
    </div>
);
};

export default Home;