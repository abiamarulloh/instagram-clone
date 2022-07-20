import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors} from '../../../utils';

const Link = ({title, fontSize, align, navigation, url}) => {
  return (
    <TouchableOpacity onPress={e => navigation.navigate(url)}>
      <Text style={styles.text(fontSize, align)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Link;
const styles = StyleSheet.create({
  text: (fontSize, align) => ({
    fontSize: fontSize,
    textDecorationLine: 'underline',
    textAlign: align,
    color: colors.text.secondary,
  }),
});
