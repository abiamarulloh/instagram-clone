import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {ILLogo} from '../../assets';
import {colors, fonts} from '../../utils';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted');
    }, 3000);
  });
  return (
    <View style={styles.page}>
      <Image source={ILLogo} style={styles.logo} />
      <Text style={styles.title}>Amarabi</Text>
      <Text style={styles.desc}>belanja kebutuhan stylish anak muda</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FCF9F5',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.secondary[600],
    color: colors.text.primary,
  },
  desc: {
    fontSize: 16,
    fontFamily: fonts.secondary[400],
    color: colors.text.primary,
    marginTop: 10,
  },
});
