import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import {ILLogo, IGetStarted} from '../../assets';
import {Button, Gap} from '../../components';
import {fonts} from '../../utils';

const GetStarted = ({navigation}) => {
  return (
    <ImageBackground source={IGetStarted} style={styles.page}>
      <View>
        <Image source={ILLogo} style={styles.logo} />
        <Text style={styles.title}>
          Belanja kebutuhan stylelish jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('Register')}
        />
        <Gap height={16} />
        <Button
          color="secondary"
          title="Sign In"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    backgroundImage: IGetStarted,
    padding: 40,
    flex: 1,
    justifyContent: 'space-between',
  },
  logo: {
    width: 50,
    height: 50,
  },
  title: {
    marginTop: 91,
    fontSize: 24,
    color: 'white',
    fontFamily: fonts.secondary[800],
  },
});
