import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {colors} from '../../utils';

class Home extends Component {
  render() {
    return (
      <>
        <View style={styles.page}>
          <View style={styles.container}>
            <ScrollView>
              <Text>Page Home</Text>
            </ScrollView>
          </View>
        </View>
      </>
    );
  }
}

export default Home;
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
