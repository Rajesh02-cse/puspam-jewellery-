import './dashboard.css';

const Dashboard = () => {
  return (
    <div className="dash-1"> 
      <div className="dash-2">

        <div className="sidebar">
          <img src="/media/dashboard/Group 246.png" alt="Logo" className="sidebar-logo" />
          
          <div className="dash-all">
            <div className="dashboard">
              <img className="dash-icon" src="/media/dashboard/Group 11.png" alt="Dashboard Icon" />
              <h1>Dashboard</h1>
            </div>
                 
            <div className="menu">
              <div><img src="/media/dashboard/Group 12.png" alt="Orders" className="menu-icon" />Orders</div>
              <div><img src="/media/dashboard/Group 13.png" alt="Products" className="menu-icon" />Products</div>
              <div><img src="/media/dashboard/Group 14.png" alt="Inventory" className="menu-icon" />Inventory</div>
              <div><img src="/media/dashboard/Group 15.png" alt="Sales Report" className="menu-icon" />Sales Report</div>
              <div><img src="/media/dashboard/Group 16.png" alt="Marketing" className="menu-icon" />Marketing</div>
              <div><img src="/media/dashboard/Group 17.png" alt="Messages" className="menu-icon" />Messages</div>
              <div><img src="/media/dashboard/Group 18.png" alt="Offers" className="menu-icon" />Offers</div>
              <div><img src="/media/dashboard/Group 19.png" alt="Settings" className="menu-icon" />Settings</div>
            </div>
            
            <div className="logout">
              <img className="logout-icon" src="/media/dashboard/Group 20.png" alt="Logout Icon"/>
              <button onClick={() => window.location.href = '/Dashboard/Home'}type="button">Logout</button>
            </div>
          </div>
        </div>

        <div className="main-content">
          
          <div className="navbar">
            <div className="searchbar">
              <div className="searchbar-div1">
                <input className="search-input" type="text" placeholder="Search Anything..." />
                <img src="/media/dashboard/Group 21.png" alt="Search"/>
              </div> 
            </div>
            
            <div className="nav-icons">
              <img src="/media/dashboard/Group 22.png" alt="Notifications" className="logo"/>
              <img src="/media/dashboard/image 18.png" alt="Messages" className="logo"/>
              <div className="admin">
                <div className="admin-text">
                    <p id="admin-p">Admin</p>
                    <small>Super Admin</small>
                </div>
                <img src="/media/dashboard/Group 23.png" alt="Profile" className="admin-logo"/>
              </div>
            </div>
          </div>
                    
          <div className="all-content">
            <div>
              <h1>Welcome Back</h1>
              <h2>Puspam Jewellers</h2>
              <p>Shine brighter with every place.</p>
              <input type="range" className="range" />
            </div>
            
            <div className="all-grids">
              
              <div className="g4-grids">
                <div className="g4-grids-4" >
                  <img src="/media/dashboard/Group 239.png" alt="Settings" className="grid-icon" />
                  <div className="g4-grids-text">
                    <h4>Total Orders</h4>
                    <p4>128</p4>
                    <h3>12% from last month</h3>
                  </div>
                </div>
                <div className="g4-grids-4">
                  <img src="/media/dashboard/Group 240.png" alt="Settings" className="grid-icon" />
                  <div className="g4-grids-text">
                    <h4>Total Sales</h4>
                    <p4>36</p4>
                    <h3>+8% from last month</h3>
                  </div>                  
                </div>
                <div className="g4-grids-4">
                  <img src="/media/dashboard/Group 241.png" alt="Settings" className="grid-icon" />
                  <div className="g4-grids-text">
                    <h4>Total Customers</h4>
                    <p4>92</p4>
                    <h3>+16% from last month</h3>
                  </div>
                </div>
                <div className="g4-grids-4">
                  <img src="/media/dashboard/Group 242.png" alt="Settings" className="grid-icon" />
                  <div className="g4-grids-text">
                    <h4>Products</h4>
                    <p4>₹245,680</p4>
                    <h3>+18% from last month</h3>
                  </div>
                </div>
              </div>
              
              
              <div className="g2-grids">
                <div className="g2-grids-1">
                  <div className="co1">Customer Overview</div> 
                  <div className="co">
                    <img src="/media/dashboard/image 44.png" alt="Chart" className="grid-2-img1"/>
                    <div>
                      <ul>
                        <li><h5>New Customer <span className="co-num">1245</span></h5></li>
                        <li><h5>Returning Customer <span className="co-num">890</span></h5></li>
                        <li><h5>Inactive Customer <span className="co-num">210</span></h5></li>
                      </ul>
                    </div>
                  </div> 
                </div>
                <div className="g2-grids-2"></div>
              </div>
            </div>
          </div>
          
          
          <div className="dash-footer">
            <h2>© 2026 Puspam Jewellers. All Rights Reserved. Design & Developed by Rajesh Paul.</h2>
          </div>
          
        </div>
      </div>      
    </div>
  );
};

export default Dashboard;