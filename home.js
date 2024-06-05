// import style from './home.module.css';
import './home.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <div className="home">
                <div className="top-banner">
                    <div className="background">
                        <img src="http://localhost:3000/images/bg-image1.jpg" alt="bg-image1" />
                    </div>

                    <div className="info">
                        <h3>Blue Gradiant</h3>
                        <h2>Apple Watch</h2>
                        <p>30% off at your first order</p>
                        <Link to='/shop' className="link">Shop Now</Link>
                    </div>
                </div>

                <div className="trending">
                    <div className="container">
                        <div className="left-box">
                            <div className="header">
                                <div className="heading">
                                    <h2>Trending Items</h2>
                                </div>
                                <div className="categories">
                                    <h3>New</h3>
                                    <h3>Featured</h3>
                                    <h3>Top Selling</h3>
                                </div>
                            </div>
                        </div>
                        <div className="right-box">

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
