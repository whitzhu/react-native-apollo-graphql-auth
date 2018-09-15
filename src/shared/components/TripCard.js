import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class TripCard extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Trip Card</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
});
