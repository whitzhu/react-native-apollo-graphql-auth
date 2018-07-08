import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Navigation from './src/screens/Navigation';

const client = new ApolloClient({
  uri: 'https://api.graph.cool/simple/v1/cjjdbv8l01dov0158mp7le2b1',
});

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Navigation />
      </ApolloProvider>
    );
  }
}
