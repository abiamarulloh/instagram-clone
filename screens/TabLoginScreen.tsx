import { useState } from 'react';
import { Button, StyleSheet, TextInput } from 'react-native';
import Gap from '../components/Gap';

import { Text, View } from '../components/Themed';

export default function TabLoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Gap height={10} />
      <Text style={styles.desc}>Belanja Murah diskon 100% di simple e-commerce, anda senang - kami kunang-kunang.</Text>
      <Gap height={30} />
      <TextInput
        style={styles.formControl}
        placeholder="Lengkapi username!"
        onChangeText={usernameEvent => setUsername(usernameEvent)}
      />
      <Gap height={30} />
      <TextInput
        style={styles.formControl}
        placeholder="Lengkapi password!"
        onChangeText={passwordEvent => setPassword(passwordEvent)}
      />
      <Gap height={30} />
      <Button
        onPress={() =>  loginButtonOnPress()}
        title="Submit"
        color="#841584"
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 15,
    paddingRight: 15
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 14,
  },
  formControl: {
    height: 40,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  }
});
