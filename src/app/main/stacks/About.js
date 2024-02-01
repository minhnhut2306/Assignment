// About.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Coffee Corner!</Text>
      <Text style={styles.text}>At Coffee Corner, we are passionate about serving the finest coffee to our customers. Our cozy cafe offers a relaxing atmosphere where you can enjoy your favorite brews and delicious pastries.</Text>
      <Text style={styles.text}>For inquiries and reservations, feel free to contact us:</Text>
      <Text style={styles.contact}>Phone: 0333 856 232</Text>
      <Text style={styles.contact}>Email: nhutchodiennguyen2306@gmail.com</Text>
      <Text style={styles.contact}>Address: 123 Coffee Street, Cityville</Text>
      <Text style={styles.text}>We look forward to welcoming you at Coffee Corner!</Text>
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

export default About;
