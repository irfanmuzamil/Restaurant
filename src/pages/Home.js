import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/bannerR.png";
import "../styles/HomeStyles.css";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h2>Welcome To</h2>
          <p>Shinwari Restaurant</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
      <div>
        <Testimonial />
      </div>
    </Layout>
  );
};

export default Home;
