import './login.css';
const Login = () => {
  return (
    <div className="container">      
      <div className="body2">
        <div className="logo1">
          <div className="logo1-1"></div>
          <div className="logo1-2"></div>
        </div>      
      <div className="logo2">
        <div className="logo2-1">
      </div>
      <div className="text">
        <h1 className="welcome">Welcome Back</h1>
        <p>Sign in to continue to your account</p>
        <div className="login-form">
            <h2 className="login-h2">Email Address</h2>
        <div className="email-container">
            <img src="/media/login/Group 4.png" alt="Email"/>      
            <input className="email" type="text" placeholder="Enter your email" />
        </div>        
        <h2  className="login-h2">Password</h2>
        <div className="email-container">
            <img src="/media/login/Group 5.png" alt="Password" />
            <input className="email" type="password" placeholder="Enter your password" />
        </div>
        <div className="remember-forgot">
          <div>
            <input type="checkbox"/>
            <label>Remember me</label>
          </div>          
          <a href="/forgot-password">Forgot Password?</a>
        </div>
        <button className="login-button" onClick={() => window.location.href = '/Dashboard'}>Login <img src="/media/login/Group 6.png" alt="Login" /></button>
        <h2 className="register">Don't have an account? <a href="/register">Register Now</a></h2>
      </div>     
        </div>           
      </div>
      <div className="logo3">        
      </div>
      <div className="logo4">        
      </div>
      </div>            
    </div>    
  );
};

export default Login;