import './css/posts.css';
import {Navbar} from 'react-bootstrap';
import { Link } from "react-router-dom";
import {Container} from 'react-bootstrap';
// importing images
import answerImg from './images/answer.png';
import popularPostImg from './images/popular-post.png';
import notificationImg from './images/notifications.png';
import beyondClassImg from './images/beyond_class.png';
import photoImg from './images/photo.png';
import videoImg from './images/video.png';

const Posts = () => {
    return ( 
        <div className="posts-content">
            <Navbar className="navbar navbar-expand-lg">
                <div>
                    <ul className="navbar-nav">
                        <Link className="navbar-brand" to = '#'><img src={beyondClassImg} alt="brand-logo"/></Link>
                        <input className="" type="search" placeholder="Search" />
                        <li className="nav-item"><Link className="nav-link active" href=""><img src={popularPostImg} alt="popular-post-img"/> Popular Post</Link></li>
                        <li className="nav-item"><Link className="nav-link" href=""><img src={answerImg} alt="Answer-img"/> Answer</Link></li>
                        <li className="nav-item"><Link className="nav-link" href=""><img src={popularPostImg} alt="popular-post-img"/><i className="fas fa-users"></i> Communities</Link></li>
                        <li className="nav-item"><Link className="nav-link" href=""><img src={notificationImg} alt="Notifiactions-img"/> Notifications</Link></li>
                        <li className="nav-item"><Link className="nav-link" href=""><img src={popularPostImg} alt="popular-post-img"/><i className="far fa-user-circle"></i> My Profile</Link></li>
                    </ul>
                </div>
            </Navbar>

            <Container className='bg-dark'>
                {/* Create post */}
                <div className="posting-div grey" >
                    <div className="create-post-div black">
                        <img src={photoImg} alt='some-test'/>
                        <i className="far fa-user-circle"></i>
                        <input type="text" className="create-post black" placeholder="Create Post"/>
                    </div>
                    <div className="attach-file-div black">
                        <Link className="attaching-link-1" href=""><img src={photoImg} alt="Photos-img"/> Photos</Link>
                        <Link className="attaching-link-2" href=""><img src={videoImg} alt="Videos-img"/> Videos</Link>
                        <Link className="attaching-link-3" href=""><img src={videoImg} alt="Videos-img"/> Text</Link>
                    </div>
                </div>

                {/* <!-- Others-Posts Div -- */}
                <div class="others-posts-div">
                    <div class="post-owner">
                        <img src={popularPostImg} alt="popular-post-img"/>
                        <h4 className="profile_name">Lakshaya Sharma  2 hours ago</h4>
                    </div>
                    <div className="post-content grey">

                    </div>
                    <div className="post-engagement">

                    </div>
                </div>

                <div class="community-div grey">
                    <div class="community-count c-c-head black">
                        <h4>Recommended Communities</h4>
                    </div>
                    <div class="community-count black">
                        <h4>Community 1</h4>
                    </div>
                    <div class="community-count black">
                        <h4>Community 2</h4>
                    </div>
                    <div class="community-count black">
                        <h4>Community 3</h4>
                    </div>
                    <div class="community-count black">
                        <h4>Community 4</h4>
                    </div>
                    <div class="community-count black">
                        <h4>Community 5</h4>
                    </div>
                    <div class="community-count black">
                        <h4>Community 6</h4>
                    </div>
                </div>
            </Container>

        </div>
     );
}
 
export default Posts;