// import style from './home.module.css';
import './home.css';
import { Link } from 'react-router-dom';
import HomeProducts from './home_products';
import { useState } from 'react';
import { FaEye } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

function Home() {

    const [trendingProduct,setTrendingProduct] = useState(HomeProducts);

    //filtering trending products

    const filterCategory = (x)=>{
        const filterProduct = HomeProducts.filter((currEle)=>{
            return currEle.type === x;
        })
        setTrendingProduct(filterProduct);
    }

    //displaying all the trending items
    const allTrendings = ()=>{
        setTrendingProduct(HomeProducts);
    }

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
                    <div className="container1">
                        <div className="left-box">
                            <div className="header">
                                <div className="heading">
                                    <h2 onClick={()=>allTrendings()}>Trending Items</h2>
                                </div>
                                <div className="categories">
                                    <h3 onClick={()=> filterCategory('new')}>New</h3>
                                    <h3 onClick={()=> filterCategory('featured')}>Featured</h3>
                                    <h3 onClick={()=> filterCategory('top')}>Top Selling</h3>
                                </div>
                            </div>

                            <div className="products">
                                <div className="container1">
                                    {
                                        trendingProduct.map((currEle)=>{
                                            return(
                                                <>
                                                    <div className="box">
                                                        <div className="img-box">
                                                            <img src={currEle.image} alt="Product-image" />

                                                            <div className="icon">

                                                                <div className="icon-box">
                                                                    <FaEye />
                                                                </div>

                                                                <div className="icon-box">
                                                                    <FaHeart />
                                                                </div>

                                                            </div>

                                                        </div>

                                                        <div className="info">
                                                            <h3>{currEle.Name}</h3>
                                                            <p>${currEle.price}</p>
                                                            <button className='btn'>Add To Cart</button>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })
                                    }
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
