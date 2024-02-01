import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { AppContext } from '../AppContext';

const Detail = ({ navigation, route }) => {
  const { data } = route.params;
  const { product } = data;
  const { cart, setCart, heart, setHeart } = useContext(AppContext);
  const [isFavorite, setIsFavorite] = useState(false); // Define isFavorite state
  const [productFavorites, setProductFavorites] = useState([]); // Define productFavorites state

  const addFavorite = () => {
    const itemFavorite = {
      product_id: product._id,
      product_name: product.name,
      product_image: product.image,
      product_description: product.description,
      product_voting: product.voting,
      prodct_rating: product.rating
    };

    if (isFavorite) {
      const updatedFavorites = productFavorites.filter(
        (favoriteItem) => favoriteItem.product_id !== itemFavorite.product_id
      );

      setProductFavorites(updatedFavorites);
      setIsFavorite(false); 
      Alert.alert('Removed from Favorites!');
    } else {
      
      const isAlreadyInFavorites = productFavorites.some(
        (favoriteItem) => favoriteItem.product_id === itemFavorite.product_id
      );

      if (isAlreadyInFavorites) {
      
        const updatedFavorites = productFavorites.filter(
          (favoriteItem) => favoriteItem.product_id !== itemFavorite.product_id
        );

        setProductFavorites(updatedFavorites);
        setIsFavorite(false); 
        Alert.alert('Removed from Favorites!');
      } else {
       
        setProductFavorites([...productFavorites, itemFavorite]);
        setIsFavorite(true);
        Alert.alert('Added to Favorites!');
     
        const existingItemheart = heart.find(item => item._id === product._id);
        if (existingItemheart) {
          const updatedHeart = heart.map(item => {
            if (item._id === product._id) {
              return { ...item, number: item.number + 1 };
            }
            return item;
          });
          setHeart(updatedHeart);
        } else {
          setHeart(prevHeart => [...prevHeart, { _id: product._id, number: 1 }]);
        }
      }
    } 
  };



  const addToCart = () => {
    const existingItem = cart.find(item => item._id === product._id);

    if (existingItem) {
      const updatedCart = cart.map(item => {
        if (item._id === product._id) {
          return { ...item, number: item.number + 1 };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      setCart(prevCart => [...prevCart, { _id: product._id, number: 1 }]);
    }
    Alert.alert('Added to Cart!');
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar backgroundColor="transparent" translucent />
      <Image source={{ uri: product.image }} style={styles.image} />

      <View style={styles.header}>
        <TouchableOpacity style={styles.btnMenu} onPress={() => navigation.goBack()}>
          <Image style={styles.imgHeader} source={require('../../../../assets/images/ic_back.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnMenu} onPress={addFavorite}>
          <Image style={styles.imgHeader} source={require('../../../../assets/images/ic_favorite_red.png')} />
        </TouchableOpacity>
      </View>

      <View style={styles.containerProduct}>
        <View style={styles.left}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.location}>{product.location} From Africa</Text>

            <View style={styles.ratingC}>
              <Image style={styles.imgRating} source={require('../../../../assets/images/ic_star.png')} />
              <Text style={styles.txtRating}>{product.rating} <Text style={styles.numberRating}>({product.voting})</Text></Text>
            </View>
          </View>
        </View>

        <View style={styles.right}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.btn} onPress={() => addToCart(product)}>
              <Image style={styles.imgBtn} source={require('../../../../assets/images/ic_coffee.png')} />
              <Text style={styles.txtBtn}>Bean</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.btn, { marginStart: 20 }]}>
              <Image style={styles.imgBtn} source={require('../../../../assets/images/ic_location.png')} />
              <Text style={styles.txtBtn}>Africa</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.btnBottom}>
            <Text style={styles.txtBtnRight}>Medium Roasted</Text>
          </TouchableOpacity>

        </View>
      </View>

      <View style={styles.body}>
        <Text style={styles.Description}>Description</Text>
        <Text style={styles.textBody}>{product.description}</Text>
        <View style={styles.outerView}>
          <Text style={styles.textLabel}>Size</Text>
          <View style={styles.btnSizeContainer}>
            <TouchableOpacity style={styles.btnSize}><Text style={styles.btnText}>M</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btnSize}><Text style={styles.btnText}>L</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btnSize}><Text style={styles.btnText}>XL</Text></TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.payMent}>
        <View style={styles.Paymentleft}>
          <Text style={styles.textPrice}>Price</Text>
          <Text style={styles.txtPrice}>${product.price}</Text>
        </View>
        <View style={styles.Paymentright}>
          <TouchableOpacity style={styles.btnCart} onPress={addToCart}>
            <Text style={styles.txtCart}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#0C0F14',
  },
  outerView: {
    paddingVertical: 10,
    paddingHorizontal: 0,
  },
  textLabel: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 10,
    color: '#AEAEAE'
  },
  btnSizeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  btnSize: {
    width: 103,
    height: 40,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    borderColor: '#AEAEAE'
  },
  btnText: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 20,
    color: '#AEAEAE'
  },
  txtCart: {
    width: '100%',
    height: 'auto',
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  btnCart: {
    width: '100%',
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D17842',
    borderRadius: 20,
  },
  Paymentright: {
    display: 'flex',
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  txtPrice: {
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    color: '#fff',
    textAlign: 'center',
  },
  dola: {
    color: '#D17842',
  },
  textPrice: {
    width: '100%',
    height: 'auto',
    color: '#aeaeae',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: 12,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  Paymentleft: {
    width: '30%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  payMent: {
    width: '100%',
    height: 60,
    paddingHorizontal: 10,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    bottom: 0,
    position: 'absolute',
  },
  textSize: {
    color: '#AEAEAE',
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    marginTop: 8,
  },
  textBody: {
    color: '#fff',
    fontSize: 12,
    marginTop: 15,
    fontFamily: 'Poppins',
    fontWeight: '400',
  },
  Description: {
    color: '#AEAEAE',
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    lineHeight: 20,
  },
  body: {
    top: 350,
    height: 'auto',
    paddingHorizontal: 18.5,
    display: 'flex',
    flexDirection: 'column',
    paddingVertical: 19.8,
  },
  numberRating: {
    color: '#AEAEAE',
    fontSize: 10,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    lineHeight: 20,
  },
  btnBottom: {
    backgroundColor: '#141921',
    width: 131,
    height: 44.6,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,

  },
  txtRating: {
    color: '#fff',
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 20,
    marginStart: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgRating: {
    width: 22.29,
    height: 22.29,
  },
  ratingC: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25.43,
  },
  rating_buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  txtBtn: {
    color: '#aeaeae',
    fontFamily: 'Poppins',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 20,
    textAlign: 'center',
  },
  imgBtn: {
    width: 32,
    height: 32,
  },
  btn: {
    backgroundColor: '#141921',
    padding: 10,
    borderRadius: 10,
  },
  buttonContainer: {
    width: '100%',
    height: 'auto',
    marginTop: 10,
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10,
  },
  right: {
    width: '40%',
    top: 0,
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // marginTop: 0,
  },
  location: {
    color: '#AEAEAE',
    fontFamily: 'Poppins',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20,
  },
  name: {
    color: '#fff',
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 20,
  },
  nameContainer: {
    width: '100%',
    paddingTop: 31,
    display: 'flex',
    flexDirection: 'column',
  },
  left: {
    width: '60%',
    display: 'flex',
    flexDirection: 'row',
  },

  containerProduct: {
    width: '100%',
    height: 148,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    position: 'absolute',
    top: 293,
    paddingStart: 22.5,
    display: 'flex',
    flexDirection: 'row',
  },
  txtHeader: {
    fontSize: 28,
    fontFamily: 'Semibold',
    color: '#fff'
  },
  textHeader: {
    marginTop: 31,
  },
  imgHeader: {
    width: 30,
    height: 30,
    borderRadius: 10,
  },
  header: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'row',
    padding: 22,
    justifyContent: 'space-between',
    marginTop: 10,
  },
  image: {
    height: 441,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: 'stretch',
  },
  txtBtnRight: {
    color: '#AEAEAE',
    fontFamily: 'Poppins',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20,
  }
});
