import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import CarItem from './components/carItem/index';

const HelloWorldApp = () => {
  return (
    <View style={styles.container}>
      <CarItem />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
  },
});

export default HelloWorldApp;
