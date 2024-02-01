// Help.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Help = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Need Help?</Text>
      <Text style={styles.text}>Our team at Coffee Corner is here to assist you with any questions or concerns you may have. Whether you need help with placing an order or want to inquire about our menu, we're just a message away!</Text>
      <Text style={styles.text}>Contact us via:</Text>
      <Text style={styles.contact}>Phone: 0333 856 232</Text>
      <Text style={styles.contact}>Email: nhutchodiennguyen2306@gmail.com</Text>
      <Text style={styles.text}>We're dedicated to providing exceptional service to our valued customers. Reach out to us anytime!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  contact: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default Help;
