import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = (props) => {
  const { children } = props;
  const [cart, setCart] = useState([]);
  const [isLogin, setIsLogin] = useState(true);
  const [heart, setHeart] = useState([]);
  const [productFavorites, setProductFavorites] = useState([]);
  const [paycart, setPaycart] = useState([]);
  const [nameInfo, setNameInfo] = useState("");
  const [emailInfo, setEmailInfo] = useState("");
  
  return (
    <AppContext.Provider
      value={{ 
        cart, setCart, 
        isLogin, setIsLogin, 
        heart, setHeart,
        productFavorites, setProductFavorites,
        paycart, setPaycart,
        nameInfo, setNameInfo,
        emailInfo, setEmailInfo
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
