import React, { useEffect, useRef, useState } from 'react';
import '../../App.css';
import CardsH from '../CardsH';
import Footer from '../Footer';
import useScrollToTop from '../useScrollToTop';

function Home() {
    useScrollToTop();
    return (
        <>
            <div className="content">
                <h1 className="home-heading">HOME</h1>
                <p className="home-text">Here are some unfinished projects I am working on currently!</p>
            </div>
            <CardsH/>
            <Footer/>
        </>
    );
}

export default Home;
