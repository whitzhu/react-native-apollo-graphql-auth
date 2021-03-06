import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, TextInput, Text, Image } from '@shoutem/ui';

export default class AuthScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authStateSignIn: true,
      password: '',
      email: '',
    };
  }

  handleAuthStateChange = () => {
    this.setState({ authStateSignIn: !this.state.authStateSignIn });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.image}>
          <Image
            source={require('../../image/icon.png')}
          />
        </View>
        <TextInput
          autoFocus
          placeholder="email"
          onChangeText={(text) => this.setState({ email: text })}
          styleName="sm-gutter-bottom" />
        <TextInput
          secureTextEntry
          placeholder="password"
          onChangeText={(text) => this.setState({ password: text })}
          styleName="sm-gutter-bottom" />
        <Button
          styleName="secondary xl-gutter-vertical"
          onPress={() => this.props.navigation.navigate('App')}
        >
          <Text>{ this.state.authStateSignIn ? 'Log In' : 'Sign Up' }</Text>
        </Button>
        <Button
          onPress={this.handleAuthStateChange}
        >
          <Text>{ this.state.authStateSignIn ? 'Sign Up' : 'Log In' }</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
  },
  image: {
    alignItems: 'center',
    marginBottom: 40,
  },
});
