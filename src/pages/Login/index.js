import React from 'react';
import {Image, StyleSheet, Text, ToastAndroid, View} from 'react-native';
import {connect} from 'react-redux';
import {ILLogo} from '../../assets';
import {Button, Gap, Input, Link} from '../../components';
import {colors, fonts} from '../../utils';
import {loginAction} from '../../redux/actions/loginAction';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleLogin = navigation => {
    const {email, password} = this.state;
    if (!email) {
      this.alert('Email harus dilengkapi!');
      return false;
    }

    if (!password) {
      this.alert('Password harus dilengkapi!');
      return false;
    }

    if (email !== 'abiamarulloh06@gmail.com') {
      this.alert('Email salah!');
      return false;
    }

    if (password !== 'admin') {
      this.alert('Password salah!');
      return false;
    }

    this.props.loginAction({email: email, password: password});
    navigation.replace('MainApp');
  };

  alert(message) {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.page}>
        <Image source={ILLogo} style={styles.logo} />
        <Text style={styles.title}>Masuk dan mulai berbelanja</Text>
        <Input
          label="Email Address"
          currentValue={this.props.email}
          setCurrentValue={value => this.setState({email: value})}
        />
        <Gap height={24} />
        <Input
          label="Password"
          currentValue={this.props.password}
          setCurrentValue={value => this.setState({password: value})}
        />
        <Gap height={10} />
        <Link align="left" title="Forgot My Password" />
        <Gap height={40} />
        <Button title="Sign In" onPress={() => this.handleLogin(navigation)} />
        <Gap height={30} />
        <Link
          title="Create My Account"
          align="center"
          navigation={navigation}
          url="Register"
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  email: state.login.email,
  password: state.login.password,
});
export default connect(mapStateToProps, {loginAction})(Login);

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
