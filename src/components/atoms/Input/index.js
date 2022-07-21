import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {colors, fonts} from '../../../utils';

const Input = ({label, currentValue, setCurrentValue}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={e => setCurrentValue(e)}
        defaultValue={currentValue}
      />
    </View>
  );
};

export default Input;
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 12,
    fontFamily: fonts.primary[400],
    color: colors.black,
  },
  label: {
    fontSize: 14,
    color: colors.text.secondary,
    marginBottom: 6,
    fontFamily: fonts.primary[400],
  },
});
