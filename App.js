import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Font, AppLoading } from 'expo';
import Navigation from './src/screens/Navigation';
import authHelper from './src/helpers/authHelper';

const client = new ApolloClient({
  uri: 'https://api.graph.cool/simple/v1/cjjdbv8l01dov0158mp7le2b1',
  request: async (operation) => {
    const token = await authHelper.getToken();
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : null,
      },
    });
  },
});

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fontsAreLoaded: false,
    };
  }

  async componentWillMount() {
    await Font.loadAsync({
      'Rubik-Black': require('./node_modules/@shoutem/ui/fonts/Rubik-Black.ttf'),
      'Rubik-BlackItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-BlackItalic.ttf'),
      'Rubik-Bold': require('./node_modules/@shoutem/ui/fonts/Rubik-Bold.ttf'),
      'Rubik-BoldItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-BoldItalic.ttf'),
      'Rubik-Italic': require('./node_modules/@shoutem/ui/fonts/Rubik-Italic.ttf'),
      'Rubik-Light': require('./node_modules/@shoutem/ui/fonts/Rubik-Light.ttf'),
      'Rubik-LightItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-LightItalic.ttf'),
      'Rubik-Medium': require('./node_modules/@shoutem/ui/fonts/Rubik-Medium.ttf'),
      'Rubik-MediumItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-MediumItalic.ttf'),
      'Rubik-Regular': require('./node_modules/@shoutem/ui/fonts/Rubik-Regular.ttf'),
      'rubicon-icon-font': require('./node_modules/@shoutem/ui/fonts/rubicon-icon-font.ttf'),
    });

    this.setState({ fontsAreLoaded: true });
  }

  render() {
    if (!this.state.fontsAreLoaded) {
      return <AppLoading></AppLoading>;
    }
    return (
      <ApolloProvider client={client}>
        <Navigation />
      </ApolloProvider>
    );
  }
}
