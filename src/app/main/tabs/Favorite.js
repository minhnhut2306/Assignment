import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, FlatList, RefreshControl } from 'react-native';
import { AppContext } from '../AppContext';
import AxiosInstance from '../../helper/AxiosInstance';
import { useNavigation } from '@react-navigation/native';
import { ToastAndroid } from 'react-native'; // Import ToastAndroid
import React, { useContext, useState, useEffect } from 'react';


export const Favorite = () => {
  const navigation = useNavigation();
  const { heart } = useContext(AppContext);
  const [products, setProducts] = useState([]);
  const { productFavorites, setProductFavorites } = useContext(AppContext);
  const [refreshing, setRefreshing] = useState(false);
  console.log(products);
  useEffect(() => {
    const fetchData = async () => {
      // console.log(cart);
      try {
        // Tạo một mảng các promise từ các yêu cầu API
        const promises = heart.map(async (item) => {
          const response = await AxiosInstance().get(`/products/${item._id}`);
          // console.log(response.product);
          return { item: response.product, number: item.number };
        });

        // Chờ tất cả các promise hoàn thành
        const productsData = await Promise.all(promises);

        // Cập nhật state với dữ liệu từ API
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchData();
  }, [heart]);

  const unFavorite = (productId) => {
    try {
      const updatedFavorites = productFavorites.filter(item => item.product_id !== productId);
      console.log('Updated favorites:', updatedFavorites);
      setProductFavorites(updatedFavorites);
  
      // Filter out the unfavorited item from the products state
      const updatedProducts = products.filter(item => item.item._id !== productId);
      setProducts(updatedProducts);
  
      ToastAndroid.show('Removed from Favorites!', ToastAndroid.SHORT);
    } catch (error) {
      console.error('Error removing from favorites:', error);
    }
  };
  
  

  const onRefresh = () => {
    setRefreshing(true);
    fetchData(); // Assuming fetchData is defined outside of useEffect
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  const renderItemHeart = ({ item }) => {

    return (
      <View style={{ marginTop: 30, alignItems: 'center' }}>
        <View style={styles.containertong}>
          <StatusBar backgroundColor="transparent" translucent />
          <Image source={{ uri: `${item?.item.image}` }} style={styles.image} />
          <View style={styles.header}>

            <TouchableOpacity onPress={() => unFavorite(item?.item._id)} style={styles.btnMenu}>
              <Image style={styles.imgHeader} source={require('../../../../assets/images/ic_favorite_red.png')} />
            </TouchableOpacity>

          </View>
          <View style={styles.containertong2}>
            <View style={styles.containerProduct}>
              <View style={styles.left}>
                <View style={styles.nameContainer}>
                  <Text style={styles.name}>{item?.item.name}</Text>
                  <Text style={styles.location}>From Africa</Text>
                  <View style={styles.ratingC}>
                    <Image style={styles.imgRating} source={require('../../../../assets/images/ic_star.png')} />
                    <Text style={styles.txtRating}>{item?.item.rating} <Text style={styles.numberRating}>({item?.item.voting})</Text></Text>
                  </View>
                </View>
              </View>
              <View style={styles.right}>
                <View style={styles.buttonContainer}>
                  <View style={styles.btn}>
                    <Image style={styles.imgBtn} source={require('../../../../assets/images/ic_coffee.png')} />
                    <Text style={styles.txtBtn}>Bean</Text>
                  </View>

                  <View style={[styles.btn, { marginStart: 20 }]}>
                    <Image style={styles.imgBtn} source={require('../../../../assets/images/ic_location.png')} />
                    <Text style={styles.txtBtn}>Africa</Text>
                  </View>
                </View>

                <View style={styles.btnBottom}>
                  <Text style={styles.txtBtnRight}>
                    Medium Roasted
                  </Text>
                </View>

              </View>
            </View>
            <View style={styles.body}>
              <Text style={styles.Description}>Description</Text>
              <Text style={styles.textBody}>{item?.item.description}</Text>
            </View>
          </View>
        </View>

      </View>

    );
  }
  return (
    <View style={styles.container}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30
      }}>
        <View>
          <TouchableOpacity onPress={() => { navigation.navigate('Settings') }}>
            <View>
              <Image
                style={{ position: 'relative' }}
                source={require('../../../../assets/images/backgroudlogo.png')} />
              <Image
                style={{ position: 'absolute', top: 7, left: 8 }}
                source={require('../../../../assets/images/logomenu.png')} />
            </View>
          </TouchableOpacity>
        </View>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: '600' }}>Favorite</Text>
        <View>
          <TouchableOpacity onPress={() => { navigation.navigate('PersonalDetails') }}>
            <Image
              style={{ width: 30, height: 30, borderRadius: 10 }}
              source={require('../../../../assets/images/ic_user.png')} />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        style={{ marginTop: 30 }}
        data={products}
        renderItem={renderItemHeart}
        keyExtractor={(item, index) => index.toString()}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      />
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0c0f14',
    width: '100%',
    height: '100%',
    padding: 20,

  },
  containertong2: {
    width: 350,
    height: 'auto',
    borderRadius: 10,
    top: '30%',
    shadowColor: '#000',
  },
  containertong: {
    width: 350,
    height: 575,
    borderRadius: 30,
    shadowColor: '#000',
    backgroundColor: '#141921',

  },

  dola: {
    color: '#D17842',
  },
  Favorite: {
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
    top: 0,


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
    width: '45%',
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
    width: '55%',
    display: 'flex',
    flexDirection: 'row',
    paddingStart: 22.5,
  },

  containerProduct: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    display: 'flex',
    height: 150,
    flexDirection: 'row',
  },
  body: {
    height: 153,
    paddingHorizontal: 18.5,
    display: 'flex',
    backgroundColor: '#141921',
    flexDirection: 'column',
    paddingVertical: 19.8,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,

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
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  header: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'row',
    padding: 22,
    justifyContent: 'flex-end',
    marginTop: 10,
  },

  image: {
    height: 420,
    width: 350,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    resizeMode: 'cover', // or 'contain' if you prefer
  },

  txtBtnRight: {
    color: '#AEAEAE',
    fontFamily: 'Poppins',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20,
  }
});

export default Favorite;
