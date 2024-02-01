import { StyleSheet, Text, View, TouchableOpacity, ToastAndroid, Image, ScrollView } from 'react-native'
import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../AppContext'
import AxiosInstance from '../../helper/AxiosInstance'


const Payment = (props) => {
  const { navigation } = props;
  const { emailInfo, paycart } = useContext(AppContext);
  const [products, setProducts] = useState([]);
  const { route } = props;
  const { totalPrice } = route.params;
  const [cart, setCart] = useState([]);
  const [productFavorites, setProductFavorites] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!paycart) return; // Check if paycart is undefined
        const promises = paycart.map(async (item) => {
          const response = await AxiosInstance().get(`/products/${item.productId}`);
          return { item: response.data.price, number: item.number };
        });
        const productsData = await Promise.all(promises);
        return productsData; // Return fetched data
      } catch (error) {
        console.error('Error fetching product data:', error);
        return []; // Return empty array in case of error
      }
    };

    const fetchedData = fetchData(); // Call the fetchData function
    console.log('Fetched data:', fetchedData); // Log the returned data
  }, [paycart]);

  const handleBack = () => {
    navigation.goBack();
  };

  const pay = async () => {
    try {
      // Thực hiện thanh toán thành công
  
      // Cập nhật state của giỏ hàng để loại bỏ các sản phẩm đã thanh toán
      setCart(prevCart => []);
      
      // Cập nhật state của danh sách sản phẩm để loại bỏ các sản phẩm đã thanh toán
      setProducts(prevProducts => []);
      setProductFavorites(prevProductFavorites => []);
      // Hiển thị thông báo thanh toán thành công
      ToastAndroid.show('Thanh toán thành công!', ToastAndroid.SHORT);
      
      // Chuyển hướng về trang chính
      navigation.navigate('Home');
    } catch (error) {
      console.error('Thanh toán thất bại:', error);
    }
  }
  
  

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.title}>
          <TouchableOpacity onPress={handleBack}>
            <Image
              source={require("../../../../assets/images/icback.png")}
              style={{ justifyContent: 'flex-start', marginLeft: 5 }}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 25, color: 'white', fontWeight: 'bold', flex: 1, textAlign: 'center', marginRight: 35 }}>Payment</Text>
        </View>

        <View style={{ alignItems: 'center', borderColor: '#D17842', borderWidth: 2, borderRadius: 25, padding: 10 }}>
          <Text
            style={{ fontSize: 14, fontWeight: '600', color: 'white', marginBottom: 10, marginRight: 250 }}
          >
            Credit cart</Text>
          <Image
            source={require("../../../../assets/images/card.png")}
          />
        </View>

        <View style={styles.containerCard}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={require("../../../../assets/images/wallet.png")}
            />
            <Text style={{ fontSize: 14, fontWeight: '600', color: 'white', marginLeft: 14 }}>Wallet</Text>
          </View>

          <View>
            <Text style={{ fontSize: 14, color: 'white' }}>$ 100.50</Text>
          </View>
        </View>

        <View style={[styles.containerCard, { marginTop: 0 }]}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={require("../../../../assets/images/apple.png")}
            />
            <Text style={{ fontSize: 14, fontWeight: '600', color: 'white', marginLeft: 14 }}>Apple Pay</Text>
          </View>
        </View>

        <View style={[styles.containerCard, { marginTop: 0 }]}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={require("../../../../assets/images/googlepay.png")}
            />
            <Text style={{ fontSize: 14, fontWeight: '600', color: 'white', marginLeft: 14 }}>Google Pay</Text>
          </View>
        </View>

        <View style={[styles.containerCard, { marginTop: 0 }]}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={require("../../../../assets/images/amazon.png")}
            />
            <Text style={{ fontSize: 14, fontWeight: '600', color: 'white', marginLeft: 14 }}>Amazon Pay</Text>
          </View>
        </View>

        <View style={{ marginTop: 60, flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <View>
              <Text style={{
                color: '#AEAEAE',
                fontSize: 12,
                fontWeight: 500
              }}>Price</Text>
            </View>

            <View>
              <Text style={{
                color: 'white',
                fontSize: 20,
                fontWeight: 600
              }}>
                <Text style={{
                  color: '#D17842',
                }}>
                  $ </Text>
                {totalPrice}
              </Text>
            </View>
          </View>

          <View>
            <TouchableOpacity
              onPress={pay}
              style={{ width: 200, height: 60, backgroundColor: '#D17842', borderRadius: 20 }}>
              <Text style={{
                paddingVertical: 20,
                textAlign: 'center',
                fontSize: 16,
                fontWeight: 600,
                color: 'white'
              }}>
                Pay from Credit Card
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default Payment

const styles = StyleSheet.create({
  containerCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 25,
    backgroundColor: '#262B33',
    borderRadius: 25,
    marginTop: 13,
    marginBottom: 11
  },

  container: {
    flex: 1,
    backgroundColor: '#0c0f14',
    padding: 20
  },

  title: {
    paddingTop: 50,
    marginLeft: 10,
    marginBottom: 25,
    flexDirection: 'row',
  },
})