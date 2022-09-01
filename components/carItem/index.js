import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton';

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

      <StyledButton
        type="primary"
        content={'Custom Order'}
        onPress={() => {
          console.warn('Custom order was pressed');
        }}
      />

      <StyledButton
        type="secondary"
        content={'Existing Inventory'}
        onPress={() => {
          console.warn('Existing Inventory was pressed');
        }}
      />
    </View>
  );
};

export default CarItem;
