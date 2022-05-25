import { Button, Image, StyleSheet, Text, View } from 'react-native';

import { useEffect, useState } from 'react';
import { RootTabScreenProps } from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Gap from '../components/Gap';
import { LinearGradient } from 'expo-linear-gradient';

export default function TabProfileScreen({ navigation }: RootTabScreenProps<'TabProfile'>) {
  const [username, setUsername] = useState('');
  const [image, setUserImage] = useState('assets/images/favicon.png');

  const getUsers = async () => {
     try {
        const response = await fetch('https://raw.githubusercontent.com/abiamarulloh/instagram-clone/master/assets/data/users.json');
        const json = await response.json();
        if(json) {
          let username = await AsyncStorage.getItem('username')
          const dataUserTemp: any  = await json.data.find((item: any) => item.username === username)
          await setUsername(dataUserTemp?.username)
          await setUserImage(dataUserTemp?.image)
        }
      } catch (error) {
        console.error(error);
      }
  }

  useEffect(() => {
    guard()
    getUsers();
  }, []);

  const logout = async () => {
    await AsyncStorage.clear()
    navigation.navigate('Auth')
  }

  const guard = async () => {
    let user = await AsyncStorage.getItem('username')
    let password = await AsyncStorage.getItem('password')

    if (!user && !password) { 
      navigation.navigate('Auth')
    }
  }

  return (
        <View style={styles.container}>
          <LinearGradient style={styles.storyUserWrap} colors={['orange', 'red']}>
              <View style={styles.storyUser}>
              <Image
                  style={styles.imageProfile}
                  source={{
                    uri: image
                  }}
                />
              </View>
          </LinearGradient> 

          <Gap height={10} />
          <Text style={styles?.title}>{username}</Text>
          <Gap height={10} />

         <Button
            onPress={() => logout()}
            title="Submit"
            color="#C2DED1"
          ></Button>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  },
  storyUserWrap: {
    width: 100,
    height: 100,
    borderRadius: 100,
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  storyUser: {
    width: 96,
    height: 96,
    borderRadius: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageProfile: {
    width: 94,
    height: 94,
    borderRadius: 100
  },
});
