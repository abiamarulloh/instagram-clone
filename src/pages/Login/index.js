import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {ILLogo} from '../../assets';
import {Button, Gap, Input, Link} from '../../components';
import {colors, fonts} from '../../utils';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {}, []);

  const changeEmail = text => {
    setEmail(text);
  };

  const changePassword = text => {
    setPassword(text);
  };

  const handleLogin = () => {
    navigation.replace('MainApp');
  };

  return (
    <View style={styles.page}>
      <Image source={ILLogo} style={styles.logo} />
      <Text style={styles.title}>Masuk dan mulai berbelanja</Text>
      <Input label="Email Address" value={email} setValue={changeEmail} />
      <Gap height={24} />
      <Input label="Password" value={password} setValue={changePassword} />
      <Gap height={10} />
      <Link align="left" title="Forgot My Password" />
      <Gap height={40} />
      <Button title="Sign In" onPress={() => handleLogin()} />
      <Gap height={30} />
      <Link
        title="Create My Account"
        align="center"
        navigation={navigation}
        url="Register"
      />
    </View>
  );
};

const mapStateToProps = state => ({
  email: state.email,
  password: state.password,
});
export default connect(mapStateToProps, {})(Login);

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
    padding: 40,
  },
  logo: {
    width: 100,
    height: 100,
    marginLeft: -20,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    marginTop: 10,
    color: colors.text.primary,
    marginBottom: 40,
    width: 200,
  },
});
