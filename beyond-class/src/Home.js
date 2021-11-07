import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <div className="home-content">
            <h1 className = "home-title">Home Page</h1>
            <div className="page-links">
                <Link to="/test">Test</Link>
                <Link to="/MainPage">MainPage</Link>
            </div>
        </div>
     );
}
 
export default Home;