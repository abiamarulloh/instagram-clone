import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {colors} from '../../utils';

const Profile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <ScrollView>
          <Text>Page Profile</Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default Profile;
const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: 'white',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
});
