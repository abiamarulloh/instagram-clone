import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, TextInput } from 'react-native';
import Gap from '../components/Gap';

import { Text, View } from '../components/Themed';

export default function TabLoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [dataUsers, setDataUsers] = useState([]);
  const getUsers = async () => {
     try {
        const response = await fetch('https://raw.githubusercontent.com/abiamarulloh/instagram-clone/master/assets/data/users.json');
        const json = await response.json();
        setDataUsers(json.data);
      } catch (error) {
        console.error(error);
      } 
  }

  useEffect(() => {
    guard()
    getUsers();
  }, []);
  
  const guard = async () => {
    let user = await AsyncStorage.getItem('username')
    let password = await AsyncStorage.getItem('password')

    if (user && password) { 
      navigation.navigate('Root')
    }
  }
  
  const validation = (directive: string, field: string) => { 
    if(!directive) {
      alert(`Please enter a ${field}`)
      return false;
    }
    return true;
  }

  const handleProcess = async() => {
    if(!validation(username, 'username') && !validation(password, 'password')) return false;

    // Check in json / db
    let userExists = dataUsers.find((item: any) => item.username === username && item.password === password)

    if(userExists) {
      // CURL CALL LOGIN API
        await AsyncStorage.setItem('username', username)
        await AsyncStorage.setItem('password', password)
        navigation.navigate('Root');
        return true
      // CURL CALL LOGIN API
    }

    if(!userExists) {
      alert('Kamu belum terdaftar');
      return false;
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Masuk untuk belanja sekarang juga!</Text>
      <Gap height={10} />
      <Text style={styles.desc}>Belanja Murah diskon 100% di simple e-commerce, anda senang - kami kunang-kunang.</Text>
      <Gap height={30} />
      <TextInput
        style={styles.formControl}
        placeholder="username"
        onChangeText={usernameEvent => setUsername(usernameEvent)}
      />
      <Gap height={30} />
      <TextInput
        style={styles.formControl}
        placeholder="password"
        onChangeText={passwordEvent => setPassword(passwordEvent)}
      />
      <Gap height={30} />
      <Button
        onPress={() => handleProcess()}
        title="Submit"
        color="#C2DED1"
      />
      <Gap height={100} />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: 'white'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#C2DED1'
  },
  desc: {
    fontSize: 14,
  },
  formControl: {
    height: 40,
    borderBottomColor: '#C2DED1',
    borderBottomWidth: 2
  }
});
