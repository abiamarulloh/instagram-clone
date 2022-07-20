import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  IconHomeActive,
  IconHome,
  IconCartActive,
  IconCart,
  IconProfileActive,
  IconProfile,
  IconReceipt,
  IconReceiptActive,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const TabItem = ({title, isActive, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Home') {
      return isActive ? <IconHomeActive /> : <IconHome />;
    }

    if (title === 'Cart') {
      return isActive ? <IconCartActive /> : <IconCart />;
    }

    if (title === 'Receipt') {
      return isActive ? <IconReceiptActive /> : <IconReceipt />;
    }

    if (title === 'Profile') {
      return isActive ? <IconProfileActive /> : <IconProfile />;
    }

    return <IconHome />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <View style={styles.icon}>
        <Icon />
      </View>
      <Text style={styles.title(isActive)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  icon: {
    width: 25,
    height: 25,
  },
  title: isActive => ({
    color: isActive ? colors.text.menuActive : colors.text.menuInactive,
    marginTop: 4,
    fontFamily: fonts.primary[600],
    fontSize: 10,
  }),
});
