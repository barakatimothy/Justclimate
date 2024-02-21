import GoogleSignInButton from './GoogleSignInButton';
import { useNavigate } from 'react-router-dom'; 
import LoginForm from './LoginForm';
import './LandingPage.css';

const LandingPage = ({ handleLogin }) => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleGoogleLoginSuccess = (response) => {
    // Implement your login logic using the Google response
    console.log('Google login success:', response);
    // For testing, assume the user is authenticated
    handleLogin();
    // Redirect to the main page after a successful login
    navigate('/main'); // Change the path as needed
  };

  const handleGoogleLoginFailure = (error) => {
    // Handle login failure
    console.error('Google login failure:', error);
  };

  return (
    <div className="landing-page">
      <div className="content">
        <h1>JustClimate</h1>
        <p>Empowering communities for climate justice.</p>
      </div>
      <div>
        <LoginForm/>
      </div>
      <div className="google-login-container">
        <GoogleSignInButton onSuccess={handleGoogleLoginSuccess} onFailure={handleGoogleLoginFailure} />
      </div>
    </div>
  );
};

export default LandingPage;




