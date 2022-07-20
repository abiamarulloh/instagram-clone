import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Gap} from '../../components';
import {colors, fonts} from '../../utils';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <View style={styles.page}>
          <View style={styles.container}>
            <ScrollView>
              <Text style={styles.titleHead}>Profile</Text>
              <Gap height={20} />
              <Text style={styles.title}>Hi, Abi Amarulloh</Text>
              <Text style={styles.desc}>+62 89533-7813-520</Text>

              <Gap height={50} />
              <Text style={styles.title}>Riwayat belanja</Text>
              <View style={styles.history}>
                <Text style={styles.historyItemTitle}>Menunggu Pembayaran</Text>
                <Text style={styles.historyItemDesc}>Selasa 19 Jul 07.45</Text>
              </View>
              <View style={styles.history}>
                <Text style={styles.historyItemTitle}>Transaksi Selesai</Text>
                <Text style={styles.historyItemDesc}>Rabu 20 Jul 22.43</Text>
              </View>
            </ScrollView>
          </View>
        </View>
      </>
    );
  }
}

export default Profile;
const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: 'white',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  titleHead: {
    fontSize: 20,
    fontFamily: fonts.primary[400],
    marginBottom: 20,
    color: colors.text.primary,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.primary[800],
    marginBottom: 10,
  },
  desc: {
    fontSize: 15,
    fontFamily: fonts.primary[600],
    marginBottom: 10,
  },
  history: {
    borderWidth: 1,
    borderColor: colors.secondary,
    paddingHorizontal: 10,
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  historyItemTitle: {
    fontSize: 15,
    fontFamily: fonts.primary[800],
    color: colors.secondary,
  },
  historyItemDesc: {
    fontSize: 15,
    fontFamily: fonts.primary[600],
  },
});
