// import './css/posts.css';
import './css/posts2.css';
import { Row, Col} from 'react-bootstrap';
import {Navbar, Nav} from 'react-bootstrap';
import { Link } from "react-router-dom";
import {Container} from 'react-bootstrap';
// importing images
import answerImg from './images/answer.png';
import popularPostImg from './images/popular-post.png';
import notificationImg from './images/notifications.png';
import beyondClassImg from './images/beyond_class.png';
import profileImg from './images/profile.png'
import photoImg from './images/photo.png';
import videoImg from './images/video.png';
import textImg from './images/text.png'
import createProfileImg from './images/createProfile.png'

const Posts = () => {
    return ( 
        <div className="posts-content">
            <Navbar className='navbar-class'>
                <Container>
                    <Navbar.Brand href="#home"><img src={beyondClassImg} alt="brand-logo"/></Navbar.Brand>
                    <Nav className="me-auto">
                    <input className='input-class' placeholder='Search'/>
                    <Nav.Link className='nav-item-class' href="#home"><img className='img-class' src={popularPostImg} alt="popular-post-img"/>Popular Post</Nav.Link>
                    <Nav.Link className='nav-item-class' href="#features"><img src={answerImg} alt="Answer-img"/>Answer</Nav.Link>
                    <Nav.Link className='nav-item-class' href="#pricing"><img src={popularPostImg} alt="popular-post-img"/>Communities</Nav.Link>
                    <Nav.Link className='nav-item-class' href="#pricing"><img src={notificationImg} alt="Notifiactions-img"/>Notifications</Nav.Link>
                    <Nav.Link className='nav-item-class' href="#pricing"><img src={popularPostImg} alt="popular-post-img"/>My Profile</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Container fluid className='main-content'>
                <div className='main-row-content d-flex justify-content-center'>
                    <Row className='main-row-class'>
                        <Col className='p-2'>
                            <div className='upper-part'>
                                <div className='row-content'>
                                    <img src={profileImg} alt="profile-img"/>
                                    <Link>Create Post</Link>
                                </div>
                                <div className='row-content text-center'>
                                    <Link><img src={photoImg} alt="" /> Photos</Link>
                                    <Link><img src={videoImg} alt="" /> Photos</Link>
                                    <Link><img src={textImg} alt="" /> Photos</Link>
                                </div>
                            </div>
                            <div className="text-box">
                                <div className="top-part">
                                    <img src={popularPostImg} alt="popular-post-img"/>
                                    <h6 className="profile_name">Lakshaya Sharma  2 hours ago</h6>
                                </div>
                                <div className="middle-part"></div>
                                <div className="last-part">hii</div>
                            </div>
                        </Col>
                        <Col className='p-2'>
                            <div className="community-div">
                                <div className="recommandation">Recomanded Comunity</div>
                                <div className="community">
                                    <Link>Community 1</Link>
                                    <Link>Community 2</Link>
                                    <Link>Community 3</Link>
                                    <Link>Community 4</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>        

        </div>
     );
}
 
export default Posts;