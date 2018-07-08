import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from '@shoutem/ui';

export default class AuthScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Profile Screen</Text>
        <Button
          styleName="secondary"
          onKeyPress={() => console.log('Log out')}
        >
          <Text>Log Out</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
