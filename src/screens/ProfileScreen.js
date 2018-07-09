import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from '@shoutem/ui';
import { Query } from 'react-apollo';
import authHelper from '../helpers/authHelper';
import { GET_CURRENT_USER_QUERY } from '../graphql/currentUser';

const ProfileAuth = () => (
  <Query query={GET_CURRENT_USER_QUERY}>
    {({ client, loading, data: { currentUser } }) => {
      if (loading) {
        return <View>Loading</View>;
      }

      if (currentUser) {
        return (
          <View style={styles.container}>
            <Text>Email: {currentUser.email}</Text>
            <Button
              onPress={async () => {
                await authHelper.signOut();
                client.resetStore();
              }}
              type="primary"
            >
            Sign out
            </Button>
          </View>
        );
      }
      return null;
    }}
  </Query>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProfileAuth;
