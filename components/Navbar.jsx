import React from 'react'
import { useNavigate } from 'react-router-dom';
import './navbar.css';

const Navbar = ({current}) => {
  const navigate = useNavigate();
  return (
    <div className="navbar0">
      <div className="navbar1">
            <div className="navbar1-all">
                <div className="navbar1-left">
                    <img className="navbar1-left-img" src="/media/Home/Group 243.png" alt="img" />
                    <span className="navbar1-left-text" >Jadupur, Purba Medinipur, West Bengal - 721641</span>
                </div>
                <div className="navbar1-mid">                  
                  <span className="navbar1-mid-text">Timeless Beauty. Precious Forever.</span>
                </div>
                <div className="navbar1-right">
                  <img className="navbar1-right-img" src="/media/Home/Group 249.png" alt="img" />
                  <span className="navbar1-right-text1">7047119767</span>
                  <img src="/media/Home/Line 4.png" alt="img" />
                  <span className="navbar1-right-text2">Follow Us:</span>                
                    <img className="navbar1-right-icons" src="/media/Home/Group 250.png" alt="img" />
                    <img className="navbar1-right-icons" src="/media/Home/Group 251.png" alt="img" />
                    <img className="navbar1-right-icons" src="/media/Home/Group 252.png" alt="img" />                  
                </div>
            </div>
      </div>
      <div className="navbar2">
        <div className="navbar2-1" >
          {current == "Home" && <button style={{backgroundImage: 'url("/media/contact/11.png")', backgroundRepeat: 'no-repeat',
            backgroundSize:'100% 100%',height: '60px', width: '70px', color:'white'}} onClick={() => navigate('/Dashboard/Home')}>Home</button>}
          {current != "Home" && <button onClick={() => navigate('/Dashboard/Home')}>Home</button>}
          <img  src="/media/Home/Line 8.png" alt="img" />
          <button>About Us</button>
          <img  src="/media/Home/Line 8.png" alt="img" />
          <button>Collections</button>
          <img  src="/media/Home/Line 8.png" alt="img" />
          <button>Gold Rate</button>
          <img className="li-img" src="/media/Home/Group 245.png" alt="img" />
          <button>Customer Jewellery</button>
          <img  src="/media/Home/Line 8.png" alt="img" />
          <button>Gallery</button>
          <img  src="/media/Home/Line 8.png" alt="img" />

          {current == "Contact Us" && <button  style={{backgroundImage: 'url("/media/contact/11.png")', backgroundRepeat: 'no-repeat',
            backgroundSize:'100% 100%',height: '60px', width: '70px', color:'white'}} onClick={() => navigate('/Dashboard/Contact')}>Contact Us</button>}   
          {current != "Contact Us" && <button onClick={() => navigate('/Dashboard/Contact')}>Contact Us</button>}      
          <div className="navbar2-1-img">
                <img  src="/media/Home/Group 255.png" alt="img" />
          <img src="/media/Home/Group 257.png" alt="img" />
          </div>                    
        </div>
        <div className="navbar2-2"></div>        
      </div>
    </div>
  )
}

export default Navbar;