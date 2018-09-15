import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TripCard from '../shared/components/TripCard';

export default class AuthScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <TripCard></TripCard>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 12,
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#f4f7f6'
  },
});
