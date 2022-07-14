import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input} from '../../components';
import {colors} from '../../utils';

const Register = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Daftar Akun" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <Input label="Full Name" labelSize={16} labelColor="#7D8797" />
        <Gap height={24} />
        <Input label="Pekerjaan" labelSize={16} labelColor="#7D8797" />
        <Gap height={24} />
        <Input label="Email Address" labelSize={16} labelColor="#7D8797" />
        <Gap height={24} />
        <Input label="Password" labelSize={16} labelColor="#7D8797" />
        <Gap height={40} />
        <Button
          title="Continue"
          onPress={() => navigation.navigate('UploadPhoto')}
        />
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    padding: 40,
    paddingTop: 0,
  },
});
