import React from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

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
        <TextInput
          autoFocus
          placeholder="email"
          style={styles.input}
          onChangeText={(text) => this.setState({ email: text })} />
        <TextInput
          secureTextEntry
          placeholder="password"
          style={styles.input}
          onChangeText={(text) => this.setState({ password: text })} />
        <Button
          title={ this.state.authStateSignIn ? 'Log In' : 'Sign Up' }
          onPress={() => console.log('Button pressed')}
        />
        <Button
          title={ this.state.authStateSignIn ? 'Sign Up' : 'Log In' }
          onPress={this.handleAuthStateChange}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 50,
    width: 300,
    padding: 10,
    marginVertical: 10,
    alignSelf: 'stretch',
  },
});
