import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, Gap} from '../../atoms';
import {colors, fonts} from '../../../utils';

const Header = ({onPress, title}) => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-dark" onPress={onPress} />
      <Text style={styles.title}>{title}</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.text.white,
  },
  title: {
    fontSize: 20,
    flex: 1,
    textAlign: 'center',
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
});
