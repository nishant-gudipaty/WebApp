// import './index.css';
import { Row, Col} from 'react-bootstrap';
import logoImg from './img/main-logo.png';
import './css/login.css';
import googleLogo from './img/google-logo.png';

const LogIn = () => {
    return ( 
        <div className="login-content d-flex justify-content-center">
            <Row className="inner-content mt-5 container">
                <Col>
                    <div className="main-logo p-4 d-flex justify-content-center">
                        <img src={logoImg} alt="main-logo"/>    
                    </div>
                    <div className="main-text">
                        <div className="text-head text-center h2">BEYOND-CLASS</div>
                        <div className="text-subhead text-center h5 mt-4">Explore the world beyond your classroom !!</div>
                        <div className="text-para text-center">Beyond a class is Netwokring platform exclusively designed for IITM students -make forums ask questions
                        and post answers while connecting with different people within institute !!</div>
                    </div>
                    <div className="text-btn-main text-center">
                        <button className="text-btn mb-5">
                            About | Terms and Conditions | Privacy 
                        </button>    
                    </div>    
                </Col>
                <Col>
                    <Row className='p-2'>
                        <Col className='pt-2'><button className='main-btn'>Log In</button></Col>
                        <Col className='pt-2'><button className='main-btn'>Sign Up</button></Col>
                    </Row>
                        <form >
                        <div class="input-group p-2 input-btn">
                            <input type="text" class="form-control" placeholder="Full Name"/>
                        </div>
                        <div class="input-group p-2 input-btn">
                            <input type="text" class="form-control" placeholder="Smail ID"/>
                            <button class="input-btn-opt">OTP</button>
                        </div>
                        <div class="input-group p-2 input-btn">
                            <input type="text" class="form-control" placeholder="Enter Password"/>
                        </div>
                        <div class="input-group p-2 input-btn">
                            <input type="text" class="form-control" placeholder="Confirm Password"/>
                        </div>
                    </form>
                    <div class="form-check check-btn">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Agree to Terms and Conditions
                        </label>
                    </div>
                    <div class="pt-2 d-flex justify-content-center"><button class='main-btn-sign'>SignUp</button></div>
                    <div class="divider text-center pt-4">OR</div>
                    <div class="d-flex justify-content-center google p-3"><button class="google-btn"> <img src={googleLogo} alt=""/> Login with Google</button></div>
                </Col>
            </Row>
        </div>
     );
}
 
export default LogIn;