import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../../utils';

const Link = ({title, fontSize, align}) => {
  return (
    <View>
      <Text style={styles.text(fontSize, align)}>{title}</Text>
    </View>
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
