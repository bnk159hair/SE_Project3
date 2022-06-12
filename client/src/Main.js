import React, {useState, useEffect} from 'react';
import {useCookies} from 'react-cookie';

import './App.css';

import ProductInfo from './components/ProductInfo';
import NavBar from './components/NavBar';
import MainImage from './components/MainImage';
import Info from './components/Info';

function Main() {
    return (
        <div>
            <div className="App">
                <NavBar imageLink="./images/glass.png"/>
                <MainImage imageSrc="./images/background1.png" />

                <div className="productList">
                    <ProductInfo imageLink="./images/logo192.png" productId="1" productName="samsung" date="2022/04/05" productInterest={3} />
                    <ProductInfo imageLink="./images/logo192.png" productId="2" productName="apple" date="2001/03/01" productInterest={3} /> 
                    <ProductInfo imageLink="./images/logo192.png" productId="3" productName="korea" date="2021/03/01" productInterest={3} />
                    <ProductInfo imageLink="./images/logo192.png" productId="4" productName="korea" date="2021/03/01" productInterest={3} />       
                </div>
                <div className="productList">
                    <ProductInfo imageLink="./images/logo192.png" productId="1" productName="samsung" date="2022/04/05" productInterest={3} />
                    <ProductInfo imageLink="./images/logo192.png" productId="2" productName="apple" date="2001/03/01" productInterest={3} /> 
                    <ProductInfo imageLink="./images/logo192.png" productId="3" productName="korea" date="2021/03/01" productInterest={3} />
                    <ProductInfo imageLink="./images/logo192.png" productId="4" productName="korea" date="2021/03/01" productInterest={3} />
                </div>
                
            </div>
            <Info />
        </div>
    );
}

// 다른 곳에서 import 해서 사용하기 위해서 export 해줘야 한다.
export default Main;
