import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import IconOnly from './IconOnly';

const Button = ({type, color, title, onPress, icon}) => {
  if (type === 'icon-only') {
    return <IconOnly onPress={onPress} icon={icon} />;
  } else {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.container(color)}>
          <Text style={styles.title(color)}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
};

export default Button;

const styles = StyleSheet.create({
  container: color => ({
    backgroundColor:
      color === 'secondary'
        ? colors.button.secondary.background
        : colors.button.primary.background,
    width: '100%',
    height: 45,
    borderRadius: 10,
  }),
  title: color => ({
    color:
      color === 'secondary'
        ? colors.button.secondary.text
        : colors.button.primary.text,
    fontSize: 18,
    fontFamily: fonts.primary[600],
    paddingVertical: 10,
    textAlign: 'center',
  }),
});
