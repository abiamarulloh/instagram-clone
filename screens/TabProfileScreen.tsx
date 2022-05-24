import { StyleSheet } from 'react-native';

import { useState } from 'react';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import TabLoginScreen from './TabLoginScreen';

export default function TabProfileScreen({ navigation }: RootTabScreenProps<'TabProfile'>) {
  const [state, setState] = useState()
  
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Tab Profile</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      </View>
      
      <TabLoginScreen navigation={navigation}  />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
