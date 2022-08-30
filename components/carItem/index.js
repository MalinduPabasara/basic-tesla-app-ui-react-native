import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import styles from './styles';

const CarItem = () => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require('../../assets/images/backgroundImage.jpg')}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subTitle}>Start at $45,322</Text>
      </View>
    </View>
  );
};

export default CarItem;
