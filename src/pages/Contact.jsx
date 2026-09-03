import Navbar from '../../components/Navbar';
import './contact.css';
import Footer from '../../components/Footer';

const Contact = () => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
        <Navbar current={"Contact Us"} />
        <div className="contact-container">
          <div className="c-hero">
            <div className="c-hero1">
                <img className="hero-img1" src="/media/contact/Group 308.png"></img>
            <div className="hero-text">
              <text className="hero-img2">Contact Us</text>
              <div className="hc">
                <button>Home</button>
                <span> |</span>
                <button>Contact Us</button>
              </div>
            </div>
            </div>
            
          </div>
          <div className="contact-form">
            <div className="cfb"> 
            <img className="cfb-d" src="/media/contact/Group 295.png"/>
              <div className="cfb-border">
                  <div className="sum">
                    <div className="sum-ci-2">
                      <span>Send us Message</span>
                      <img src="/media/contact/Group 297.png"></img>
                    </div>
                    <div className="entries0">
                        <div className="entries">
                          <img className="entries-img" src="/media/contact/Group 298.png"></img>
                          <span> |</span>
                          <input type="text"  placeholder="Enter Your Name"/>
                        </div>
                        <div className="entries">
                          <img className="entries-img" src="/media/contact/Group 298.png"></img>
                          <span> |</span>
                          <input type="text"  placeholder="Enter Your Email Address"/>
                        </div>
                        <div className="entries">
                          <img className="entries-img" src="/media/contact/Group 298.png"></img>
                          <span> |</span>
                          <input type="text"  placeholder="Enter Your Phone Number"/>
                        </div>
                        <div className="entries">
                          <img className="entries-img" src="/media/contact/Group 298.png"></img>
                          <span> |</span>
                          
                          <select className="subject-dropdown">
                            <option value="" >Select subject</option>
                            <option value="inquiry">General Inquiry</option>
                            <option value="custom">Custom Jewellery</option>
                            <option value="support">Order Support</option>
                          </select>
                        </div>
                        <div className="entries-text">
                          <img className="entries-img" src="/media/contact/Group 298.png" alt="icon" />
                          <span> | </span>
                          <textarea className="textarea" placeholder="Your Message"></textarea>
                        </div>
                        <button className="send-btn">
                          <img src="/media/contact/Group 302.png" alt="Send Message" />
                        </button>
                         
                  </div>
                </div>
                    
                  <div className="line15">|</div>
                  <div className="ci">
                    <div>
                      <div className="sum-ci-2">
                      <span>Contact Information</span>
                      <img src="/media/contact/Group 297.png"></img>
                    </div>
                    </div>
                    <div className="ci-list">
                      <div className="ci-list-5">
                        <img className="ci-img" src="/media/contact/Group 304.png" alt="call" />
                        <h3>7047159767</h3>
                      </div>
                      <img src="/media/contact/--.png" alt="call" />
                      <div className="ci-list-5">
                        <img className="ci-img" src="/media/contact/Group 305.png" alt="email" />
                        <h3>info@puspamjeweller.com</h3>
                      </div>
                      <img src="/media/contact/--.png" alt="call" />
                      <div className="ci-list-5">
                        <img className="ci-img" src="/media/contact/Group 306.png" alt="location" />
                        <h3>Jadupur, Purba Medinipur, West Bengal - 721641</h3>
                      </div>
                      <img src="/media/contact/--.png" alt="call" />
                      <div className="ci-list-5">
                        <img className="ci-img" src="/media/contact/3088.png" alt="time" />
                        <h3>Mon-Sat: 10:30 AM-8:30 PM Sunday: Closed</h3>
                      </div>
                      <img src="/media/contact/--.png" alt="call" />
                      <img className="ci-img0" src="/media/contact/Rectangle 440.png" alt="call" />
                    </div>
                    
                  </div>
              </div>              
            </div>
            <div className="map">
              <img src="/media/contact/Group 307.png" alt="call" />
            </div>
            <Footer/>
          </div>
          
        </div>
        
    </div>
);
};

export default Contact;