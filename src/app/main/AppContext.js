import React, { createContext, useState } from 'react'

export const AppContext = createContext()

export const AppProvider = (props) => {
    const { children } = props;
    const [cart, setCart] = useState([])
    const [isLogin, setIsLogin] = useState(true);
    const [heart, setHeart] = useState([]);
    const [productFavorites, setProductFavorites] = useState([]);
    const [payment,setpayment] = useState([]);
    return (
        <AppContext.Provider
            value={{ cart, setCart, isLogin, setIsLogin , heart, setHeart,productFavorites,setProductFavorites,payment,setpayment}}>
            {children}
        </AppContext.Provider>
    )
}